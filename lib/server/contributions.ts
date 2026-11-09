import { revalidateTag } from 'next/cache';
import { DecodedIdToken } from 'firebase-admin/auth';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { adminBucket, adminDb } from '@/lib/firebase/admin';
import { subjectOnSale } from '@/lib/catalog/access';
import { toSubject } from '@/lib/catalog/convert';
import { CATALOG_TAG, getBranches, getMaterialLocked, getOpenAccess, getResources } from '@/lib/catalog/server';
import { scopeKey } from '@/lib/catalog/types';
import {
  ABANDONED_UPLOAD_MS,
  Contribution,
  ContributionForReview,
  ContributionStatus,
  ContributorState,
  MAX_CREDITS_PER_FILE,
  MAX_UPLOAD_BYTES,
  MAX_WAITING_FILES,
  MyContributions,
  REDEEM_COST,
  REDEEM_DAYS,
  UPLOAD_CHUNK_BYTES,
  addCredits,
  chunkBytesAt,
  chunkCount,
  contributorState,
  creditsWithinCap,
  defaultTitle,
  earnedThisMonth,
  isAcademicYear,
  startsLikePdf,
  uploadBlockMessage,
  withStrike,
} from '@/lib/contributions/rules';
import { HttpError, isOwnerToken } from './http';

// Students' files stay in submissions/{id}/ under a random id until an owner has checked them.
// Nothing here creates a link to a student's file: owners read them a byte range at a time in
// the on-site reader, and what goes live is a rebuilt copy holding only page images.

const DAY_MS = 24 * 60 * 60 * 1000;
// The clean copy can be larger than the original, since every page becomes a picture
const MAX_CLEAN_PARTS = 12;

const submissions = () => adminDb().collection('submissions');
const contributorRef = (uid: string) => adminDb().collection('contributors').doc(uid);
const ledgerRef = (uid: string) => contributorRef(uid).collection('ledger').doc();
const heldFile = (id: string, name: string) => adminBucket().file(`submissions/${id}/${name}`);
const deleteHeldFiles = (id: string) => adminBucket().deleteFiles({ prefix: `submissions/${id}/` });

function submissionRef(id: unknown) {
  if (typeof id !== 'string' || !/^[A-Za-z0-9]{1,40}$/.test(id)) throw new HttpError(400, 'Missing or invalid file id.');
  return submissions().doc(id);
}

type Data = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

function toContribution(id: string, d: Data): Contribution {
  return {
    id,
    subjectId: d.subjectId,
    subjectCode: d.subjectCode,
    subjectName: d.subjectName,
    type: d.type,
    title: d.title,
    unit: d.unit ?? null,
    year: d.year ?? null,
    session: d.session ?? null,
    sizeBytes: d.sizeBytes ?? 0,
    status: d.status,
    reason: d.reason ?? '',
    creditsAwarded: d.creditsAwarded ?? 0,
    createdAt: d.createdAt ?? 0,
  };
}

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, maxLength) : '';
}

function readDetails(body: Data, type: unknown) {
  if (type === 'pyq') {
    const year = cleanText(body.year, 7);
    if (!isAcademicYear(year)) throw new HttpError(400, 'Enter the academic year like 2024-25.');
    if (body.session !== 'odd' && body.session !== 'even') throw new HttpError(400, 'Choose odd or even semester.');
    return { unit: null, year, session: body.session as 'odd' | 'even' };
  }
  const unit = body.unit === null || body.unit === undefined || body.unit === '' ? null : Number(body.unit);
  if (unit !== null && (!Number.isInteger(unit) || unit < 1 || unit > 20)) throw new HttpError(400, 'Choose a valid unit.');
  return { unit, year: null, session: null };
}

async function requireOpenSite() {
  if (await getMaterialLocked()) {
    throw new HttpError(423, 'Study material is locked right now. Please check back later.', 'MATERIAL_LOCKED');
  }
}

// ---- Students: uploading ------------------------------------------------------

export async function startContribution(user: DecodedIdToken, body: Data): Promise<{ id: string }> {
  if (isOwnerToken(user)) throw new HttpError(400, 'Owner accounts add files in the admin panel.');
  if (!user.email_verified) {
    throw new HttpError(403, 'Confirm your email address first, using the link we sent when you signed up.', 'EMAIL_NOT_VERIFIED');
  }
  await requireOpenSite();
  if (body.declared !== true) throw new HttpError(400, 'Please confirm this file is allowed.');
  if (body.type !== 'pyq' && body.type !== 'notes') throw new HttpError(400, 'Choose what you are sharing.');
  const sizeBytes = Number(body.sizeBytes);
  if (!Number.isInteger(sizeBytes) || sizeBytes < 1) throw new HttpError(400, 'Choose a file.');
  if (sizeBytes > MAX_UPLOAD_BYTES) throw new HttpError(413, 'Files can be 20 MB at most.');
  const details = readDetails(body, body.type);

  const db = adminDb();
  if (typeof body.subjectId !== 'string' || !/^[a-z0-9]{1,30}$/.test(body.subjectId)) throw new HttpError(400, 'Missing or invalid subject.');
  const subject = (await db.collection('subjects').doc(body.subjectId).get()).data();
  if (!subject) throw new HttpError(404, 'Subject not found.');

  const ref = submissions().doc();
  const now = Date.now();
  let abandoned: string[] = [];
  await db.runTransaction(async (tx) => {
    const contributor = await tx.get(contributorRef(user.uid));
    const mine = await tx.get(submissions().where('uid', '==', user.uid));
    const blocked = uploadBlockMessage(contributorState(contributor.data()), now);
    if (blocked) throw new HttpError(403, blocked, 'UPLOAD_BLOCKED');

    abandoned = [];
    let waiting = 0;
    mine.forEach((doc) => {
      if (doc.get('status') === 'pending') waiting++;
      else if (doc.get('status') === 'uploading') {
        if (now - (doc.get('createdAt') as number) < ABANDONED_UPLOAD_MS) waiting++;
        else abandoned.push(doc.id);
      }
    });
    if (waiting >= MAX_WAITING_FILES) {
      throw new HttpError(429, `You already have ${MAX_WAITING_FILES} files waiting to be checked. Please wait for those first.`);
    }

    tx.set(contributorRef(user.uid), { name: user.name ?? '', email: user.email ?? '', updatedAt: now }, { merge: true });
    tx.set(ref, {
      uid: user.uid,
      uploaderName: user.name ?? '',
      uploaderEmail: user.email ?? '',
      subjectId: body.subjectId,
      subjectCode: subject.code,
      subjectName: subject.name,
      type: body.type,
      title: cleanText(body.title, 120) || defaultTitle(body.type, subject.code, details),
      ...details,
      sizeBytes,
      status: 'uploading' satisfies ContributionStatus,
      reason: '',
      creditsAwarded: 0,
      createdAt: now,
    });
  });

  await Promise.all(
    abandoned.map(async (id) => {
      await deleteHeldFiles(id);
      await submissions().doc(id).delete();
    })
  );
  return { id: ref.id };
}

async function ownUpload(user: DecodedIdToken, id: unknown) {
  const ref = submissionRef(id);
  const data = (await ref.get()).data();
  if (!data || data.uid !== user.uid || data.status !== 'uploading') {
    throw new HttpError(404, 'This upload has ended. Please start again.');
  }
  return { ref, data };
}

export async function saveUploadChunk(user: DecodedIdToken, id: unknown, index: number, bytes: Uint8Array): Promise<void> {
  const { ref, data } = await ownUpload(user, id);
  if (chunkBytesAt(data.sizeBytes, index) !== bytes.length) throw new HttpError(400, 'Part of the file was the wrong size. Please try again.');
  if (index === 0 && !startsLikePdf(bytes)) {
    await deleteHeldFiles(ref.id);
    await ref.delete();
    throw new HttpError(415, 'Only real PDF files can be shared.');
  }
  await heldFile(ref.id, `part-${index}`).save(Buffer.from(bytes), { resumable: false, contentType: 'application/octet-stream' });
}

async function combineParts(id: string, prefix: string, count: number, destination: ReturnType<typeof heldFile>) {
  const parts = Array.from({ length: count }, (_, index) => heldFile(id, `${prefix}-${index}`));
  try {
    await adminBucket().combine(parts, destination);
  } catch {
    throw new HttpError(400, 'Part of the file is missing. Please try again.');
  }
}

export async function finishContribution(user: DecodedIdToken, id: unknown): Promise<void> {
  const { ref, data } = await ownUpload(user, id);
  const original = heldFile(ref.id, 'original');
  await combineParts(ref.id, 'part', chunkCount(data.sizeBytes), original);

  const [metadata] = await original.getMetadata();
  const size = Number(metadata.size);
  const [tail] = size === data.sizeBytes ? await original.download({ start: Math.max(0, size - 1024), end: size - 1 }) : [Buffer.alloc(0)];
  if (!tail.includes('%%EOF')) {
    await deleteHeldFiles(ref.id);
    await ref.delete();
    throw new HttpError(415, 'This PDF looks damaged or incomplete.');
  }

  await Promise.all(Array.from({ length: chunkCount(size) }, (_, index) => heldFile(ref.id, `part-${index}`).delete({ ignoreNotFound: true })));
  await ref.update({ status: 'pending' satisfies ContributionStatus });
}

export async function cancelContribution(user: DecodedIdToken, id: unknown): Promise<void> {
  const { ref } = await ownUpload(user, id);
  await deleteHeldFiles(ref.id);
  await ref.delete();
}

export async function getMyContributions(user: DecodedIdToken): Promise<MyContributions> {
  const [contributor, mine] = await Promise.all([contributorRef(user.uid).get(), submissions().where('uid', '==', user.uid).get()]);
  const state = contributorState(contributor.data());
  const now = Date.now();
  const files = mine.docs
    .map((doc) => toContribution(doc.id, doc.data()))
    .filter((file) => file.status !== 'uploading')
    .sort((a, b) => b.createdAt - a.createdAt);
  return {
    ...state,
    earnedThisMonth: earnedThisMonth(state, now),
    uploadBlocked: uploadBlockMessage(state, now),
    emailVerified: user.email_verified === true,
    waiting: files.filter((file) => file.status === 'pending').length,
    files: files.slice(0, 50),
  };
}

// ---- Students: spending credits -----------------------------------------------

export async function redeemCredits(user: DecodedIdToken, subjectId: unknown): Promise<{ credits: number; expiresAt: number }> {
  if (isOwnerToken(user)) throw new HttpError(400, 'Owner accounts already have full access.');
  await requireOpenSite();
  if (await getOpenAccess()) throw new HttpError(400, 'Everything is free right now. Keep your credits for later.');
  if (typeof subjectId !== 'string' || !/^[a-z0-9]{1,30}$/.test(subjectId)) throw new HttpError(400, 'Missing or invalid subject.');

  const db = adminDb();
  const subjectSnap = await db.collection('subjects').doc(subjectId).get();
  if (!subjectSnap.exists) throw new HttpError(404, 'Subject not found.');
  const subject = toSubject(subjectSnap.id, subjectSnap.data() || {});
  if (!subjectOnSale(subject, await getBranches(subject.programId)) && !subject.resourceCounts.premium) {
    throw new HttpError(400, 'Everything in this subject is already free.');
  }

  const scope = { type: 'subject' as const, subjectId };
  const key = scopeKey(scope);
  const passRef = db.collection('users').doc(user.uid).collection('passes').doc(key);
  return db.runTransaction(async (tx) => {
    const contributor = await tx.get(contributorRef(user.uid));
    const pass = await tx.get(passRef);
    const state = contributorState(contributor.data());
    if (state.credits < REDEEM_COST) throw new HttpError(400, `You need ${REDEEM_COST} credits for this.`);

    const now = Date.now();
    const currentExpiry = pass.exists ? (pass.get('expiresAt') as Timestamp).toMillis() : 0;
    const expiresAt = Math.max(now, currentExpiry) + REDEEM_DAYS * DAY_MS;
    const credits = state.credits - REDEEM_COST;
    tx.set(
      passRef,
      {
        scope,
        scopeKey: key,
        label: `${subject.code} ${subject.name}`,
        expiresAt: Timestamp.fromMillis(expiresAt),
        paidWith: 'credits',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    tx.set(contributorRef(user.uid), { credits, updatedAt: now }, { merge: true });
    tx.set(ledgerRef(user.uid), { change: -REDEEM_COST, reason: `Unlocked ${subject.code} for ${REDEEM_DAYS} days`, createdAt: now });
    return { credits, expiresAt };
  });
}

// ---- Owners: checking files ---------------------------------------------------

export async function listForReview(status: unknown): Promise<ContributionForReview[]> {
  if (status !== 'pending' && status !== 'approved' && status !== 'rejected' && status !== 'removed') {
    throw new HttpError(400, 'Choose which files to list.');
  }
  const snapshot = await submissions().where('status', '==', status).get();
  // Oldest first in the queue, so nobody waits forever; newest first everywhere else
  const docs = snapshot.docs
    .sort((a, b) => (status === 'pending' ? 1 : -1) * ((a.get('createdAt') as number) - (b.get('createdAt') as number)))
    .slice(0, 100);

  const strikes = new Map<string, number>();
  await Promise.all(
    Array.from(new Set(docs.map((doc) => doc.get('uid') as string))).map(async (uid) => {
      strikes.set(uid, contributorState((await contributorRef(uid).get()).data()).strikes);
    })
  );

  return Promise.all(
    docs.map(async (doc) => {
      const data = doc.data();
      const file = toContribution(doc.id, data);
      const duplicate =
        status === 'pending' &&
        file.type === 'pyq' &&
        (await getResources(file.subjectId)).some((r) => r.type === 'pyq' && r.year === file.year && r.session === file.session);
      return {
        ...file,
        uploaderName: data.uploaderName ?? '',
        uploaderEmail: data.uploaderEmail ?? '',
        uploaderStrikes: strikes.get(data.uid) ?? 0,
        duplicate,
      };
    })
  );
}

async function pendingFile(id: unknown) {
  const ref = submissionRef(id);
  const data = (await ref.get()).data();
  if (!data || data.status !== 'pending') throw new HttpError(404, 'This file is no longer waiting to be checked.');
  return { ref, data };
}

// For the owner's reader only; callers never hand its URL to the browser
export async function getFileForReview(id: unknown) {
  const { ref } = await pendingFile(id);
  return heldFile(ref.id, 'original');
}

export async function saveCleanChunk(id: unknown, index: number, bytes: Uint8Array): Promise<void> {
  const { ref } = await pendingFile(id);
  if (!Number.isInteger(index) || index < 0 || index >= MAX_CLEAN_PARTS) throw new HttpError(413, 'The clean copy is too large.');
  if (bytes.length === 0 || bytes.length > UPLOAD_CHUNK_BYTES) throw new HttpError(400, 'Part of the file was the wrong size.');
  if (index === 0 && !startsLikePdf(bytes)) throw new HttpError(415, 'The clean copy is not a PDF.');
  await heldFile(ref.id, `clean-${index}`).save(Buffer.from(bytes), { resumable: false, contentType: 'application/octet-stream' });
}

function contributorWrite(state: ContributorState, now: number) {
  return { ...state, updatedAt: now };
}

export async function approveContribution(id: unknown, body: Data): Promise<{ creditsAwarded: number }> {
  const { ref, data } = await pendingFile(id);
  const title = cleanText(body.title, 120);
  if (!title) throw new HttpError(400, 'Enter a title.');
  const details = readDetails(body, data.type);
  const requested = Number(body.credits);
  if (!Number.isInteger(requested) || requested < 0 || requested > MAX_CREDITS_PER_FILE) {
    throw new HttpError(400, `Credits must be a whole number from 0 to ${MAX_CREDITS_PER_FILE}.`);
  }
  const parts = Number(body.parts);
  if (!Number.isInteger(parts) || parts < 1 || parts > MAX_CLEAN_PARTS) throw new HttpError(400, 'The clean copy is missing.');
  const premium = body.premium === true;

  const storagePath = `${premium ? 'premium' : 'resources'}/${data.subjectId}/${Date.now()}-${ref.id}.pdf`;
  const clean = adminBucket().file(storagePath);
  await combineParts(ref.id, 'clean', parts, clean);
  const [metadata] = await clean.getMetadata();

  const db = adminDb();
  const resourceRef = db.collection('resources').doc();
  const subjectRef = db.collection('subjects').doc(data.subjectId);
  let creditsAwarded = 0;
  try {
    await db.runTransaction(async (tx) => {
      const current = await tx.get(ref);
      const contributor = await tx.get(contributorRef(data.uid));
      if (current.get('status') !== 'pending') throw new HttpError(409, 'Someone else has already dealt with this file.');

      const now = Date.now();
      const state = contributorState(contributor.data());
      creditsAwarded = creditsWithinCap(state, requested, now);
      tx.set(resourceRef, {
        subjectId: data.subjectId,
        type: data.type,
        title,
        ...details,
        premium,
        aiGenerated: false,
        sharedByStudent: true,
        fileUrl: null,
        storagePath,
        url: null,
        fileName: `${ref.id}.pdf`,
        sizeBytes: Number(metadata.size),
        createdAt: FieldValue.serverTimestamp(),
      });
      tx.update(subjectRef, {
        [`resourceCounts.${data.type}`]: FieldValue.increment(1),
        ...(premium ? { 'resourceCounts.premium': FieldValue.increment(1) } : {}),
      });
      tx.update(ref, { status: 'approved' satisfies ContributionStatus, title, ...details, creditsAwarded, resourceId: resourceRef.id, reviewedAt: now });
      tx.set(contributorRef(data.uid), contributorWrite(addCredits(state, creditsAwarded, now), now), { merge: true });
      if (creditsAwarded > 0) {
        tx.set(ledgerRef(data.uid), { change: creditsAwarded, reason: `Accepted: ${title}`, submissionId: ref.id, createdAt: now });
      }
    });
  } catch (error) {
    await clean.delete({ ignoreNotFound: true });
    throw error;
  }

  // The student's original is never kept once the clean copy exists
  await deleteHeldFiles(ref.id);
  revalidateTag(CATALOG_TAG, { expire: 0 });
  return { creditsAwarded };
}

function readReason(body: Data): string {
  const reason = cleanText(body.reason, 300);
  if (!reason) throw new HttpError(400, 'Give a reason. The student sees it.');
  return reason;
}

export async function rejectContribution(id: unknown, body: Data): Promise<void> {
  const { ref, data } = await pendingFile(id);
  const reason = readReason(body);
  const deliberate = body.deliberate === true;
  const db = adminDb();
  await db.runTransaction(async (tx) => {
    const current = await tx.get(ref);
    const contributor = await tx.get(contributorRef(data.uid));
    if (current.get('status') !== 'pending') throw new HttpError(409, 'Someone else has already dealt with this file.');
    const now = Date.now();
    tx.update(ref, { status: 'rejected' satisfies ContributionStatus, reason, deliberate, reviewedAt: now });
    if (deliberate) tx.set(contributorRef(data.uid), contributorWrite(withStrike(contributorState(contributor.data()), now), now), { merge: true });
  });
  await deleteHeldFiles(ref.id);
}

// Takes down a file that was approved and later found to be copied or fake, and takes back its credits
export async function removeContribution(id: unknown, body: Data): Promise<void> {
  const ref = submissionRef(id);
  const reason = readReason(body);
  const deliberate = body.deliberate === true;
  const db = adminDb();
  let storagePath: string | null = null;
  await db.runTransaction(async (tx) => {
    const current = await tx.get(ref);
    const data = current.data();
    if (!data || data.status !== 'approved') throw new HttpError(404, 'This file is not live.');
    const resourceRef = db.collection('resources').doc(data.resourceId);
    const subjectRef = db.collection('subjects').doc(data.subjectId);
    const resource = await tx.get(resourceRef);
    const subject = await tx.get(subjectRef);
    const contributor = await tx.get(contributorRef(data.uid));

    const now = Date.now();
    if (resource.exists) {
      storagePath = resource.get('storagePath') ?? null;
      tx.delete(resourceRef);
      if (subject.exists) {
        tx.update(subjectRef, {
          [`resourceCounts.${data.type}`]: FieldValue.increment(-1),
          ...(resource.get('premium') ? { 'resourceCounts.premium': FieldValue.increment(-1) } : {}),
        });
      }
    }
    let state = contributorState(contributor.data());
    state = { ...state, credits: Math.max(0, state.credits - (data.creditsAwarded ?? 0)) };
    if (deliberate) state = withStrike(state, now);
    tx.set(contributorRef(data.uid), contributorWrite(state, now), { merge: true });
    if (data.creditsAwarded) {
      tx.set(ledgerRef(data.uid), { change: -data.creditsAwarded, reason: `Removed: ${data.title}`, submissionId: ref.id, createdAt: now });
    }
    tx.update(ref, { status: 'removed' satisfies ContributionStatus, reason, deliberate, creditsAwarded: 0, reviewedAt: now });
  });
  if (storagePath) await adminBucket().file(storagePath).delete({ ignoreNotFound: true });
  revalidateTag(CATALOG_TAG, { expire: 0 });
}
