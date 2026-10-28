import { DecodedIdToken } from 'firebase-admin/auth';
import { adminBucket, adminDb } from '@/lib/firebase/admin';
import { hasSubjectAccess } from '@/lib/catalog/access';
import { toSubject } from '@/lib/catalog/convert';
import { getMaterialLocked } from '@/lib/catalog/server';
import { HttpError, isOwnerToken } from './http';
import { getPassExpiries } from './passes';

// Finds an uploaded resource and checks the caller may read it. Free files are open to any
// signed-in student (signing in puts their email on every page); premium files also need an
// owner account or a subject/semester pass that covers the subject (see lib/catalog/access.ts).
// Returns the Storage file; callers never hand its URL to the browser.
export async function getReadableResource(user: DecodedIdToken, resourceId: string) {
  const owner = isOwnerToken(user);
  // The admin panel's master lock shuts every file for everyone but owners
  if (!owner && (await getMaterialLocked())) {
    throw new HttpError(423, 'Study material is locked right now. Please check back later.', 'MATERIAL_LOCKED');
  }

  const db = adminDb();
  const resource = (await db.collection('resources').doc(resourceId).get()).data();
  if (!resource || !resource.storagePath) {
    throw new HttpError(404, 'This file no longer exists.');
  }

  if (resource.premium && !owner) {
    const subjectSnap = await db.collection('subjects').doc(resource.subjectId).get();
    if (!subjectSnap.exists) throw new HttpError(404, 'This file no longer exists.');
    const subject = toSubject(subjectSnap.id, subjectSnap.data() || {});
    if (!hasSubjectAccess(await getPassExpiries(user.uid), subject)) {
      throw new HttpError(403, 'Unlock this subject or its semester to read this file.', 'PASS_REQUIRED');
    }
  }

  return adminBucket().file(resource.storagePath);
}
