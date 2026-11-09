import { DecodedIdToken } from 'firebase-admin/auth';
import { adminBucket, adminDb } from '@/lib/firebase/admin';
import { hasSubjectAccess, needsPass, subjectOnSale } from '@/lib/catalog/access';
import { toSubject } from '@/lib/catalog/convert';
import { getBranches, getMaterialLocked, getOpenAccess } from '@/lib/catalog/server';
import { HttpError, isOwnerToken } from './http';
import { getPassExpiries } from './passes';

// Finds an uploaded resource and checks the caller may read it. Free files are open to any
// signed-in student (signing in puts their email on every page). A file needs an owner account
// or a pass that covers its subject when it's marked premium, or when a subject or semester pass
// for its subject is on sale (see lib/catalog/access.ts). During free access every file is open to
// everyone, with or without an account.
// Returns the Storage file; callers never hand its URL to the browser.
export async function getReadableResource(viewer: DecodedIdToken | null, resourceId: string) {
  const owner = viewer !== null && isOwnerToken(viewer);
  // The admin panel's master lock shuts every file for everyone but owners
  if (!owner && (await getMaterialLocked())) {
    throw new HttpError(423, 'Study material is locked right now. Please check back later.', 'MATERIAL_LOCKED');
  }

  const db = adminDb();
  const resource = (await db.collection('resources').doc(resourceId).get()).data();
  if (!resource || !resource.storagePath) {
    throw new HttpError(404, 'This file no longer exists.');
  }

  if (!owner && !(await getOpenAccess())) {
    if (!viewer) throw new HttpError(401, 'Please sign in first.');
    const subjectSnap = await db.collection('subjects').doc(resource.subjectId).get();
    if (!subjectSnap.exists) throw new HttpError(404, 'This file no longer exists.');
    const subject = toSubject(subjectSnap.id, subjectSnap.data() || {});
    const onSale = subjectOnSale(subject, await getBranches(subject.programId));
    if (needsPass({ premium: resource.premium === true, url: null }, onSale) && !hasSubjectAccess(await getPassExpiries(viewer.uid), subject)) {
      throw new HttpError(403, 'Unlock this subject or its semester to read this file.', 'PASS_REQUIRED');
    }
  }

  return adminBucket().file(resource.storagePath);
}
