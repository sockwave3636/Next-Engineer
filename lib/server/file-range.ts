import type { File, FileMetadata } from '@google-cloud/storage';
import { after } from 'next/server';
import { HttpError } from './http';
import { copyToMirror, isMirrored, mirrorExists, mirrorKey, mirrorLink, mirrorRange, r2Enabled } from './r2';

// Keeps every response well under Vercel's 4.5 MB function response limit
const MAX_CHUNK_BYTES = 2 * 1024 * 1024;
// How long the reader's direct link to a file stays valid; the reader asks for a new one when it runs out
const LINK_MINUTES = 15;

// The R2 copy to read this file from, or null to read it from Firebase Storage. A missing copy is
// made in the background after this response, so the next reader gets it from R2.
async function mirrorFor(file: File, metadata: FileMetadata): Promise<string | null> {
  if (!r2Enabled() || !isMirrored(file.name)) return null;
  const key = mirrorKey(file.name, String(metadata.generation));
  try {
    if (await mirrorExists(key)) return key;
    after(() => copyToMirror(file, key, metadata.contentType).catch((error) => console.error('Could not copy to R2:', file.name, error)));
  } catch (error) {
    // R2 unreachable: fall back to Firebase Storage
    console.error('Could not check R2 for', file.name, error);
  }
  return null;
}

// A short-lived link the reader fetches byte ranges from directly, so the file's bytes don't pass
// through this server (Vercel bills for every byte that does). From R2 when it has a copy, since
// R2 doesn't charge for downloads. Callers check access first.
//
// -> { url, size }
export async function fileLinkResponse(file: File): Promise<Response> {
  const [metadata] = await file.getMetadata();
  const key = await mirrorFor(file, metadata);
  const url = key
    ? await mirrorLink(key, LINK_MINUTES)
    : (await file.getSignedUrl({ version: 'v4', action: 'read', expires: Date.now() + LINK_MINUTES * 60 * 1000 }))[0];
  return Response.json({ url, size: Number(metadata.size) }, { headers: { 'Cache-Control': 'private, no-store' } });
}

// Serves a private Storage file to the in-site reader a byte range at a time, so the browser
// never gets a file URL. Used for files that must never have a link (students' uploads).
// Callers check access first; every request goes through them again.
//
// body without start/end -> { size }
// body { start, end }    -> bytes [start, end)
export async function fileRangeResponse(file: File, body: Record<string, unknown>): Promise<Response> {
  const [metadata] = await file.getMetadata();
  const size = Number(metadata.size);

  if (body.start === undefined && body.end === undefined) {
    return Response.json({ size }, { headers: { 'Cache-Control': 'private, no-store' } });
  }

  const start = Number(body.start);
  const end = Math.min(Number(body.end), size);
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end <= start || end - start > MAX_CHUNK_BYTES) {
    throw new HttpError(400, 'Invalid byte range.');
  }

  // Published files come from their R2 copy; pending uploads aren't copied, so they come from
  // Firebase Storage (where ranges are inclusive at the end)
  const key = await mirrorFor(file, metadata);
  const chunk = key ? await mirrorRange(key, start, end) : new Uint8Array((await file.download({ start, end: end - 1 }))[0]);
  return new Response(chunk, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
