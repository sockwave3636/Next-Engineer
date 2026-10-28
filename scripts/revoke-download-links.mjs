// Makes uploaded study material read-only: removes the saved download link (fileUrl) from every
// resource record and revokes the file's Firebase download token, so links shared earlier stop
// working. Students then read files only through the on-site reader (/api/resources/view).
//
//   node scripts/revoke-download-links.mjs --dry-run   show what would change
//   node scripts/revoke-download-links.mjs             do it
//
// Blog media is untouched. Safe to re-run. Needs the Firebase service account in .env.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');

try {
  process.loadEnvFile(path.join(root, '.env'));
} catch {
  // Fall back to variables already in the environment
}
const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
if (!projectId || !clientEmail || !privateKey) {
  console.error('Set FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY and NEXT_PUBLIC_FIREBASE_PROJECT_ID in .env first.');
  process.exit(1);
}
const app = initializeApp({
  credential: cert({ projectId, clientEmail, privateKey }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
});
const db = getFirestore(app);
const bucket = getStorage(app).bucket();

let links = 0;
let tokens = 0;
let missing = 0;
const docs = (await db.collection('resources').get()).docs;

for (const doc of docs) {
  const { fileUrl, storagePath } = doc.data();
  if (fileUrl) {
    links++;
    if (!dryRun) await doc.ref.update({ fileUrl: FieldValue.delete() });
  }
  if (!storagePath) continue;
  const file = bucket.file(storagePath);
  const [exists] = await file.exists();
  if (!exists) {
    missing++;
    continue;
  }
  const [metadata] = await file.getMetadata();
  if (metadata.metadata?.firebaseStorageDownloadTokens) {
    tokens++;
    // Setting a custom metadata key to null deletes it
    if (!dryRun) await file.setMetadata({ metadata: { firebaseStorageDownloadTokens: null } });
  }
}

const summary = `${links} saved link(s) removed, ${tokens} download token(s) revoked, across ${docs.length} resource(s)`;
console.log(dryRun ? `Dry run, nothing changed. Would do: ${summary}.` : `Done: ${summary}.`);
if (missing) console.log(`${missing} resource(s) point at a file that no longer exists in Storage.`);
