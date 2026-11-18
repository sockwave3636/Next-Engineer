// Copies study files from Firebase Storage to Cloudflare R2, where students' readers download them
// (R2 doesn't charge for downloads). Safe to run again: only copies what R2 is missing.
//
//   node scripts/r2-sync.mjs --dry-run   show what would be copied
//   node scripts/r2-sync.mjs             copy missing files
//   node scripts/r2-sync.mjs --prune     also delete R2 copies of files no longer in Firebase Storage
//
// Needs the Firebase service account and R2_* variables in .env (see .env.example).
// Copies are named exactly like mirrorKey() in lib/server/r2.ts.
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { AwsClient } from 'aws4fetch';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.loadEnvFile(path.join(root, '.env'));
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const prune = args.includes('--prune');

const MIRRORED_FOLDERS = ['resources/', 'projects/'];
const PARALLEL = 4;

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } = process.env;
if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) {
  console.error('Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and R2_BUCKET in .env first.');
  process.exit(1);
}
const r2 = new AwsClient({ accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY, service: 's3', region: 'auto' });
const base = `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET}`;

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
});
const bucket = getStorage(app).bucket();

function mirrorKey(name, generation) {
  const extension = name.match(/\.[A-Za-z0-9]{1,8}$/)?.[0]?.toLowerCase() ?? '';
  return `files/${createHash('sha256').update(name).digest('hex').slice(0, 40)}-${generation}${extension}`;
}

// Every copy already in R2
async function listR2() {
  const keys = new Set();
  let token = '';
  for (;;) {
    const url = new URL(base);
    url.searchParams.set('list-type', '2');
    url.searchParams.set('prefix', 'files/');
    if (token) url.searchParams.set('continuation-token', token);
    const response = await r2.fetch(url.toString());
    const xml = await response.text();
    if (!response.ok) throw new Error(`Listing R2 failed (${response.status}): ${xml.slice(0, 300)}`);
    for (const m of xml.matchAll(/<Key>([^<]+)<\/Key>/g)) keys.add(m[1]);
    const next = xml.match(/<NextContinuationToken>([^<]+)<\/NextContinuationToken>/);
    if (!/<IsTruncated>true<\/IsTruncated>/.test(xml) || !next) return keys;
    token = next[1];
  }
}

const files = (await Promise.all(MIRRORED_FOLDERS.map((prefix) => bucket.getFiles({ prefix }).then(([list]) => list)))).flat();
const wanted = new Map(files.map((file) => [mirrorKey(file.name, file.metadata.generation), file]));
const existing = await listR2();
const missing = [...wanted].filter(([key]) => !existing.has(key));
const orphans = [...existing].filter((key) => !wanted.has(key));
const mb = (bytes) => (bytes / 1048576).toFixed(1);

console.log(`Firebase Storage: ${files.length} study files. R2 has ${existing.size - orphans.length} of them.`);
console.log(`To copy: ${missing.length} files, ${mb(missing.reduce((s, [, f]) => s + Number(f.metadata.size), 0))} MB`);
if (prune) console.log(`To delete from R2 (their file is gone from Firebase Storage): ${orphans.length}`);
if (dryRun) process.exit(0);

let done = 0;
let failed = 0;
const queue = [...missing];
await Promise.all(
  Array.from({ length: PARALLEL }, async () => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      const [key, file] = item;
      try {
        const [bytes] = await file.download();
        const response = await r2.fetch(`${base}/${key}`, {
          method: 'PUT',
          body: new Uint8Array(bytes),
          headers: { 'Content-Type': file.metadata.contentType || 'application/octet-stream' },
        });
        if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
        done++;
        console.log(`  copied ${done}/${missing.length}  ${mb(bytes.length).padStart(6)} MB  ${file.name}`);
      } catch (error) {
        failed++;
        console.error(`  FAILED ${file.name}: ${error.message}`);
      }
    }
  })
);

if (prune) {
  for (const key of orphans) {
    const response = await r2.fetch(`${base}/${key}`, { method: 'DELETE' });
    console.log(`  ${response.ok ? 'deleted' : `FAILED (${response.status})`} ${key}`);
  }
}
console.log(`Done: ${done} copied${failed ? `, ${failed} failed (run again to retry)` : ''}.`);
process.exit(failed ? 1 : 0);
