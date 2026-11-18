import { createHash } from 'node:crypto';
import type { File } from '@google-cloud/storage';
import { AwsClient } from 'aws4fetch';

// Cloudflare R2 keeps a copy of each study file, and students' readers download from it, because
// R2 doesn't charge for downloads (Firebase Storage does, about ₹10 a GB). Firebase Storage stays
// the original: uploads, edits and deletes all happen there, and a missing copy is made the first
// time a file is needed. Pending student uploads are never copied.
//
// Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and R2_BUCKET (see .env.example).
// Without them, everything is served from Firebase Storage as before.

// Folders whose files get a copy in R2. Pending student uploads (submissions/) never do.
export const MIRRORED_FOLDERS = ['resources/', 'projects/'];

function config() {
  const { R2_ACCOUNT_ID: account, R2_ACCESS_KEY_ID: keyId, R2_SECRET_ACCESS_KEY: secret, R2_BUCKET: bucket } = process.env;
  return account && keyId && secret && bucket ? { account, keyId, secret, bucket } : null;
}

export const r2Enabled = () => config() !== null;

let client: AwsClient | null = null;
function r2() {
  const c = config();
  if (!c) throw new Error('R2 is not set up.');
  client ??= new AwsClient({ accessKeyId: c.keyId, secretAccessKey: c.secret, service: 's3', region: 'auto' });
  return { client, base: `https://${c.account}.r2.cloudflarestorage.com/${c.bucket}` };
}

// Where a Firebase Storage file's copy lives in R2. The generation changes whenever the file is
// replaced, so a replaced file gets a fresh copy. scripts/r2-sync.mjs must name copies the same way.
export function mirrorKey(name: string, generation: string | number): string {
  const extension = name.match(/\.[A-Za-z0-9]{1,8}$/)?.[0]?.toLowerCase() ?? '';
  return `files/${createHash('sha256').update(name).digest('hex').slice(0, 40)}-${generation}${extension}`;
}

export const isMirrored = (name: string) => MIRRORED_FOLDERS.some((folder) => name.startsWith(folder));

export async function mirrorExists(key: string): Promise<boolean> {
  const { client, base } = r2();
  const response = await client.fetch(`${base}/${key}`, { method: 'HEAD' });
  if (response.status === 404) return false;
  if (!response.ok) throw new Error(`R2 HEAD failed: ${response.status}`);
  return true;
}

export async function copyToMirror(file: File, key: string, contentType?: string): Promise<void> {
  const body = new Uint8Array((await file.download())[0]);
  const { client, base } = r2();
  // Signed first, then sent as plain bytes: R2 needs a Content-Length, which fetch only sets
  // reliably for a byte body (inside Next.js, a pre-built Request goes out without one)
  const signed = await client.sign(`${base}/${key}`, {
    method: 'PUT',
    body,
    headers: { 'Content-Type': contentType || 'application/octet-stream' },
  });
  const response = await fetch(signed.url, { method: 'PUT', headers: signed.headers, body });
  if (!response.ok) throw new Error(`R2 PUT failed: ${response.status} ${await response.text()}`);
}

// A short-lived link the reader fetches byte ranges from directly (the bucket allows the site's
// addresses through its CORS rule)
export async function mirrorLink(key: string, minutes: number): Promise<string> {
  const { client, base } = r2();
  const url = new URL(`${base}/${key}`);
  url.searchParams.set('X-Amz-Expires', String(minutes * 60));
  return (await client.sign(url.toString(), { method: 'GET', aws: { signQuery: true } })).url;
}

// Bytes [start, end) of a copy, for files that are streamed through the site instead of linked
export async function mirrorRange(key: string, start: number, end: number): Promise<Uint8Array<ArrayBuffer>> {
  const { client, base } = r2();
  const response = await client.fetch(`${base}/${key}`, { headers: { Range: `bytes=${start}-${end - 1}` } });
  if (response.status !== 206 && response.status !== 200) throw new Error(`R2 GET failed: ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
}

// Removes the copy of a file that's about to be deleted from Firebase Storage. Copies that
// outlive their file are never linked to, and scripts/r2-sync.mjs --prune clears them out.
export async function deleteMirrorOf(file: File): Promise<void> {
  if (!r2Enabled() || !isMirrored(file.name)) return;
  try {
    const [metadata] = await file.getMetadata();
    const { client, base } = r2();
    await client.fetch(`${base}/${mirrorKey(file.name, String(metadata.generation))}`, { method: 'DELETE' });
  } catch (error) {
    console.error('Could not delete the R2 copy of', file.name, error);
  }
}
