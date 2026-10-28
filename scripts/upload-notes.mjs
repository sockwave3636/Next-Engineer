// Uploads the generated notes PDFs in content/notes into each subject's Notes section.
//
//   npm run upload:notes -- --dry-run            show what would be uploaded
//   npm run upload:notes -- --premium            upload as premium (pass holders only)
//   npm run upload:notes -- --free               upload as free (any signed-in student can read; no downloads)
//   npm run upload:notes -- --only bcs301        one subject only
//   npm run upload:notes -- --replace            replace notes this script uploaded before
//
// One PDF per subject: content/notes/<program>/<branch>/sem-<n>/<code>-<slug>.pdf. The subject id
// comes from the code in the file name, so the subject must already exist (npm run seed:catalog).
// Safe to re-run: a subject that already has this file is skipped unless --replace is given.
// Needs FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, NEXT_PUBLIC_FIREBASE_PROJECT_ID and
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET (.env).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const notesDir = path.join(root, 'content/notes');
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const replace = args.includes('--replace');
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
if (args.includes('--premium') === args.includes('--free') && !dryRun) fail('Pass either --premium or --free.');
const premium = args.includes('--premium');

const TITLE = 'Short Notes: all units (Next Engineer)';

// ---- Find the PDFs --------------------------------------------------------------

const pdfs = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'tools') walk(full);
    } else if (entry.name.endsWith('.pdf')) {
      const subjectId = entry.name.split('-')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
      if (!only || subjectId === only) pdfs.push({ file: full, fileName: entry.name, subjectId });
    }
  }
})(notesDir);
if (pdfs.length === 0) fail('No notes PDFs found.');

// ---- Upload ---------------------------------------------------------------------

try {
  process.loadEnvFile(path.join(root, '.env'));
} catch {
  // Fall back to variables already in the environment
}
const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
if (!projectId || !clientEmail || !privateKey || !storageBucket) {
  fail('Set FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, NEXT_PUBLIC_FIREBASE_PROJECT_ID and NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET in .env first.');
}
const app = initializeApp({ credential: cert({ projectId, clientEmail, privateKey }), storageBucket });
const db = getFirestore(app);
const bucket = getStorage(app).bucket();

let uploaded = 0;
let skipped = 0;
const missing = [];

for (const pdf of pdfs) {
  const subjectRef = db.collection('subjects').doc(pdf.subjectId);
  if (!(await subjectRef.get()).exists) {
    missing.push(pdf.subjectId);
    continue;
  }
  const previous = (
    await db.collection('resources').where('subjectId', '==', pdf.subjectId).where('fileName', '==', pdf.fileName).get()
  ).docs;
  if (previous.length > 0 && !replace) {
    skipped++;
    continue;
  }
  if (dryRun) {
    console.log(`would upload ${pdf.subjectId}: ${pdf.fileName}${previous.length ? ' (replacing)' : ''}`);
    uploaded++;
    continue;
  }

  // Remove the earlier copy first, keeping the subject's counts right
  for (const old of previous) {
    const data = old.data();
    if (data.storagePath) await bucket.file(data.storagePath).delete({ ignoreNotFound: true });
    const batch = db.batch();
    batch.delete(old.ref);
    batch.update(subjectRef, {
      [`resourceCounts.${data.type}`]: FieldValue.increment(-1),
      ...(data.premium ? { 'resourceCounts.premium': FieldValue.increment(-1) } : {}),
    });
    await batch.commit();
  }

  // Same layout as addResource in lib/catalog/admin-client.ts
  const storagePath = `${premium ? 'premium' : 'resources'}/${pdf.subjectId}/${Date.now()}-${pdf.fileName}`;
  const object = bucket.file(storagePath);
  const bytes = fs.readFileSync(pdf.file);
  // No download link, free or premium: students read every file in the on-site reader
  await object.save(bytes, { contentType: 'application/pdf' });

  const batch = db.batch();
  batch.set(db.collection('resources').doc(), {
    subjectId: pdf.subjectId,
    type: 'notes',
    title: TITLE,
    unit: null,
    year: null,
    session: null,
    premium,
    fileUrl: null,
    storagePath,
    url: null,
    fileName: pdf.fileName,
    sizeBytes: bytes.length,
    createdAt: FieldValue.serverTimestamp(),
  });
  batch.update(subjectRef, {
    'resourceCounts.notes': FieldValue.increment(1),
    ...(premium ? { 'resourceCounts.premium': FieldValue.increment(1) } : {}),
  });
  await batch.commit();
  console.log(`uploaded ${pdf.subjectId}: ${pdf.fileName}`);
  uploaded++;
}

console.log(
  `${dryRun ? 'Dry run, nothing written. Would upload' : 'Uploaded'} ${uploaded}, skipped ${skipped} already uploaded` +
    (missing.length ? `, ${missing.length} subject(s) not in Firestore yet: ${missing.join(', ')}` : '') +
    '.'
);
if (!dryRun) console.log('Public pages refresh within an hour, or straight away after any save in the admin panel.');

function fail(message) {
  console.error(message);
  process.exit(1);
}
