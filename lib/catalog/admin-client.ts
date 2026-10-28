// Owner-only catalog writes from the admin panel (client SDK; Firestore rules enforce ownership).
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  query,
  serverTimestamp,
  setDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { deleteObject, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from '@/lib/firebase/config';
import { DEFAULT_BRANCHES, DEFAULT_PROGRAMS } from './defaults';
import { byCode, byOrder, byResourceOrder, toBranch, toProgram, toResource, toSubject } from './convert';
import {
  ALL_BRANCHES,
  Branch,
  Offering,
  PassSettings,
  Program,
  Resource,
  ResourceType,
  Subject,
  SubjectKind,
  offeringKey,
  subjectIdFromCode,
  subjectSlug,
} from './types';

// ---- Cache refresh -------------------------------------------------------

// Public pages are cached; ask the server to drop the cache after every edit
export async function refreshPublicPages(): Promise<void> {
  const token = await auth.currentUser?.getIdToken();
  if (!token) return;
  await fetch('/api/revalidate', { method: 'POST', headers: { Authorization: `Bearer ${token}` } }).catch(() => {
    // Pages refresh on their own within the hour if this fails
  });
}

// ---- Master lock ----------------------------------------------------------

async function ownerRequest<T>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
  const token = await auth.currentUser?.getIdToken();
  if (!token) throw new Error('Please sign in again.');
  const response = await fetch(path, {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
  return data as T;
}

// Whether all study material is locked (no one but owners can read or see it)
export async function getMaterialLock(): Promise<boolean> {
  return (await ownerRequest<{ locked: boolean }>('GET', '/api/admin/material-lock')).locked;
}

export async function setMaterialLock(locked: boolean): Promise<boolean> {
  return (await ownerRequest<{ locked: boolean }>('POST', '/api/admin/material-lock', { locked })).locked;
}

// ---- Programs & branches -------------------------------------------------

export interface ProgramWithBranches extends Program {
  branches: Branch[];
}

export async function listPrograms(): Promise<ProgramWithBranches[]> {
  const snapshot = await getDocs(collection(db, 'programs'));
  const programs = await Promise.all(
    snapshot.docs.map(async (programDoc) => {
      const branchSnap = await getDocs(collection(db, 'programs', programDoc.id, 'branches'));
      return {
        ...toProgram(programDoc.id, programDoc.data()),
        branches: branchSnap.docs.map((b) => toBranch(b.id, programDoc.id, b.data())).sort(byOrder),
      };
    })
  );
  return programs.sort(byOrder);
}

export async function seedDefaultPrograms(): Promise<void> {
  const batch = writeBatch(db);
  for (const program of DEFAULT_PROGRAMS) {
    const { id, ...data } = program;
    batch.set(doc(db, 'programs', id), data, { merge: true });
  }
  for (const branch of DEFAULT_BRANCHES) {
    const { id, programId, ...data } = branch;
    batch.set(doc(db, 'programs', programId, 'branches', id), data, { merge: true });
  }
  await batch.commit();
  await refreshPublicPages();
}

export async function saveProgram(program: Program): Promise<void> {
  const { id, ...data } = program;
  const batch = writeBatch(db);
  batch.set(doc(db, 'programs', id), data, { merge: true });
  if (!program.hasBranches) {
    // Branchless programs keep their program-wide pass on the hidden 'all' branch
    batch.set(
      doc(db, 'programs', id, 'branches', 'all'),
      { name: program.fullName, shortName: program.name, order: 1, active: true },
      { merge: true }
    );
  }
  await batch.commit();
  await refreshPublicPages();
}

export async function deleteProgram(programId: string): Promise<void> {
  const subjects = await getDocs(query(collection(db, 'subjects'), where('programId', '==', programId)));
  if (!subjects.empty) {
    throw new Error(
      `This program still has ${subjects.size} subject(s), so it can't be deleted. To take it off the site, ` +
        'click Edit and untick “Show on the site”. To delete it, delete its subjects first.'
    );
  }
  const branches = await getDocs(collection(db, 'programs', programId, 'branches'));
  const batch = writeBatch(db);
  branches.docs.forEach((b) => batch.delete(b.ref));
  batch.delete(doc(db, 'programs', programId));
  await batch.commit();
  await refreshPublicPages();
}

export async function saveBranch(branch: Branch): Promise<void> {
  const { id, programId, ...data } = branch;
  await writeBatch(db).set(doc(db, 'programs', programId, 'branches', id), data, { merge: true }).commit();
  await refreshPublicPages();
}

// Replaces a branch's semester pass prices; keys are semester numbers ("1"…"8").
// Branchless programs keep theirs on the hidden 'all' branch.
export async function saveSemesterPasses(programId: string, branchId: string, passes: Record<string, PassSettings>): Promise<void> {
  // mergeFields replaces the whole map (so cleared semesters go away) and creates the
  // hidden 'all' branch if it's missing
  await setDoc(doc(db, 'programs', programId, 'branches', branchId), { semesterPasses: passes }, { mergeFields: ['semesterPasses'] });
  await refreshPublicPages();
}

export async function deleteBranch(programId: string, branchId: string): Promise<void> {
  const subjects = await getDocs(
    query(collection(db, 'subjects'), where('programId', '==', programId))
  );
  const used = subjects.docs.filter((s) =>
    (s.data().offerings as Offering[] | undefined)?.some((o) => o.branchId === branchId)
  );
  if (used.length > 0) {
    throw new Error(`${used.length} subject(s) are offered in this branch. Remove them from it first.`);
  }
  await deleteDoc(doc(db, 'programs', programId, 'branches', branchId));
  await refreshPublicPages();
}

// ---- Subjects ------------------------------------------------------------

export async function listSubjects(programId: string): Promise<Subject[]> {
  const snapshot = await getDocs(query(collection(db, 'subjects'), where('programId', '==', programId)));
  return snapshot.docs.map((d) => toSubject(d.id, d.data())).sort(byCode);
}

export interface SubjectInput {
  code: string;
  name: string;
  credits: number;
  kind: SubjectKind;
  group: string;
  unitTitles: string[];
  description: string;
  programId: string;
  offerings: Offering[];
  pass: PassSettings;
}

// Creates a subject (id from its code) or updates an existing one
export async function saveSubject(input: SubjectInput, existingId?: string): Promise<string> {
  const code = input.code.trim().toUpperCase();
  const id = existingId || subjectIdFromCode(code);
  if (!id) throw new Error('Enter a subject code.');
  if (input.offerings.length === 0) throw new Error('Choose at least one semester the subject is taught in.');

  const subjectRef = doc(db, 'subjects', id);
  if (!existingId && (await getDoc(subjectRef)).exists()) {
    throw new Error(`A subject with code ${code} already exists. Edit it instead, or add this branch to its offerings.`);
  }

  // A subject offered to every branch shouldn't also list individual branches for the same semester
  const offerings = dedupeOfferings(input.offerings);
  const data = {
    code,
    name: input.name.trim(),
    slug: subjectSlug(code, input.name.trim()),
    credits: input.credits,
    kind: input.kind,
    group: input.group.trim(),
    unitTitles: input.unitTitles.map((t) => t.trim()).filter(Boolean),
    description: input.description.trim(),
    programId: input.programId,
    offerings,
    offeringKeys: offerings.map((o) => offeringKey(input.programId, o.branchId, o.semester)),
    pass: input.pass,
    updatedAt: serverTimestamp(),
    ...(existingId ? {} : { resourceCounts: {}, createdAt: serverTimestamp() }),
  };
  await writeBatch(db).set(subjectRef, data, { merge: true }).commit();
  await refreshPublicPages();
  return id;
}

function dedupeOfferings(offerings: Offering[]): Offering[] {
  const sharedSemesters = new Set(offerings.filter((o) => o.branchId === ALL_BRANCHES).map((o) => o.semester));
  const seen = new Set<string>();
  return offerings
    .filter((o) => o.branchId === ALL_BRANCHES || !sharedSemesters.has(o.semester))
    .filter((o) => {
      const key = `${o.branchId}|${o.semester}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.semester - b.semester);
}

// Deletes the subject, its resource records, and their files
export async function deleteSubject(subjectId: string): Promise<void> {
  const resources = await listResources(subjectId);
  await Promise.all(resources.map((r) => deleteStorageFile(r.storagePath)));
  const batch = writeBatch(db);
  resources.forEach((r) => batch.delete(doc(db, 'resources', r.id)));
  batch.delete(doc(db, 'subjects', subjectId));
  await batch.commit();
  await refreshPublicPages();
}

// ---- Resources -----------------------------------------------------------

export async function listResources(subjectId: string): Promise<Resource[]> {
  const snapshot = await getDocs(query(collection(db, 'resources'), where('subjectId', '==', subjectId)));
  return snapshot.docs.map((d) => toResource(d.id, d.data(), true)).sort(byResourceOrder);
}

export interface ResourceInput {
  subjectId: string;
  type: ResourceType;
  title: string;
  unit: number | null;
  year: string | null;
  session: 'odd' | 'even' | null;
  premium: boolean;
  file: File | null;
  url: string | null;
}

const isPdf = (file: File) => file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

export async function addResource(input: ResourceInput): Promise<void> {
  if (!input.title.trim()) throw new Error('Enter a title.');
  if (!input.file && !input.url) throw new Error('Choose a file or enter a link.');
  if (input.file && !isPdf(input.file)) {
    throw new Error('Files must be PDFs, so they can open in the read-only reader.');
  }
  if (input.premium && !input.file) throw new Error('Premium resources must be PDF files.');

  let storagePath: string | null = null;
  if (input.file) {
    const safeName = input.file.name.replace(/[^\w.\-]+/g, '_');
    // Neither folder is readable by browsers; students read files through /api/resources/view
    storagePath = `${input.premium ? 'premium' : 'resources'}/${input.subjectId}/${Date.now()}-${safeName}`;
    await uploadBytes(ref(storage, storagePath), input.file, { contentType: 'application/pdf' });
  }

  const batch = writeBatch(db);
  batch.set(doc(collection(db, 'resources')), {
    subjectId: input.subjectId,
    type: input.type,
    title: input.title.trim(),
    unit: input.unit,
    year: input.year?.trim() || null,
    session: input.session,
    premium: input.premium,
    fileUrl: null,
    storagePath,
    url: input.url?.trim() || null,
    fileName: input.file?.name ?? null,
    sizeBytes: input.file?.size ?? null,
    createdAt: serverTimestamp(),
  });
  batch.update(doc(db, 'subjects', input.subjectId), {
    [`resourceCounts.${input.type}`]: increment(1),
    ...(input.premium ? { 'resourceCounts.premium': increment(1) } : {}),
  });
  try {
    await batch.commit();
  } catch (error) {
    await deleteStorageFile(storagePath); // don't leave an orphaned upload behind
    throw error;
  }
  await refreshPublicPages();
}

export async function updateResource(
  resourceId: string,
  fields: Partial<Pick<Resource, 'title' | 'unit' | 'year' | 'session'>>
): Promise<void> {
  await writeBatch(db).update(doc(db, 'resources', resourceId), fields).commit();
  await refreshPublicPages();
}

export async function deleteResource(resource: Resource): Promise<void> {
  await deleteStorageFile(resource.storagePath);
  const batch = writeBatch(db);
  batch.delete(doc(db, 'resources', resource.id));
  batch.update(doc(db, 'subjects', resource.subjectId), {
    [`resourceCounts.${resource.type}`]: increment(-1),
    ...(resource.premium ? { 'resourceCounts.premium': increment(-1) } : {}),
  });
  await batch.commit();
  await refreshPublicPages();
}

async function deleteStorageFile(path: string | null): Promise<void> {
  if (!path) return;
  try {
    await deleteObject(ref(storage, path));
  } catch (error) {
    // Already gone is fine; anything else should surface
    if ((error as { code?: string }).code !== 'storage/object-not-found') throw error;
  }
}
