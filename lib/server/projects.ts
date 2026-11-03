import { DecodedIdToken } from 'firebase-admin/auth';
import { Timestamp } from 'firebase-admin/firestore';
import { adminBucket, adminDb } from '@/lib/firebase/admin';
import { getMaterialLocked } from '@/lib/catalog/server';
import { scopeKey } from '@/lib/catalog/types';
import { HttpError, isOwnerToken } from './http';

interface StoredFile {
  id?: string;
  free?: boolean;
  storagePath?: string;
  fileName?: string;
}

// Whether this student has bought the project (passes/project:{id})
export async function ownsProject(uid: string, projectId: string): Promise<boolean> {
  const pass = await adminDb()
    .collection('users')
    .doc(uid)
    .collection('passes')
    .doc(scopeKey({ type: 'project', projectId }))
    .get();
  return ((pass.get('expiresAt') as Timestamp | undefined)?.toMillis() ?? 0) > Date.now();
}

// A published project's raw record, storage paths included. Owners also reach drafts.
// The admin panel's master lock shuts projects too, for everyone but owners.
async function loadProject(user: DecodedIdToken, projectId: string) {
  const owner = isOwnerToken(user);
  if (!owner && (await getMaterialLocked())) {
    throw new HttpError(423, 'Study material is locked right now. Please check back later.', 'MATERIAL_LOCKED');
  }
  const data = (await adminDb().collection('projects').doc(projectId).get()).data();
  if (!data || (!owner && data.published !== true)) {
    throw new HttpError(404, 'This project no longer exists.');
  }
  return { owner, data };
}

async function requireBought(user: DecodedIdToken, projectId: string, owner: boolean) {
  if (!owner && !(await ownsProject(user.uid, projectId))) {
    throw new HttpError(403, 'Buy this project to open its files.', 'PROJECT_REQUIRED');
  }
}

// One of the project's PDFs, for the reader. Free documents need only a sign-in.
// Returns the Storage file; callers never hand its URL to the browser.
export async function getReadableProjectDocument(user: DecodedIdToken, projectId: string, documentId: string) {
  const { owner, data } = await loadProject(user, projectId);
  const document = ((data.documents ?? []) as StoredFile[]).find((d) => d.id === documentId);
  if (!document?.storagePath) throw new HttpError(404, 'This file no longer exists.');
  if (!document.free) await requireBought(user, projectId, owner);
  return adminBucket().file(document.storagePath);
}

// The project's zip, for buyers only
export async function getProjectDownload(user: DecodedIdToken, projectId: string) {
  const { owner, data } = await loadProject(user, projectId);
  const download = data.download as StoredFile | undefined;
  if (!download?.storagePath) throw new HttpError(404, 'This project has no download yet.');
  await requireBought(user, projectId, owner);
  return { file: adminBucket().file(download.storagePath), fileName: download.fileName || `${projectId}.zip` };
}
