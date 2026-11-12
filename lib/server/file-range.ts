import type { File } from '@google-cloud/storage';
import { HttpError } from './http';

// Keeps every response well under Vercel's 4.5 MB function response limit
const MAX_CHUNK_BYTES = 2 * 1024 * 1024;
// How long the reader's direct link to a file stays valid; the reader asks for a new one when it runs out
const LINK_MINUTES = 15;

// A short-lived link the reader fetches byte ranges from directly, so the file's bytes don't pass
// through this server (Vercel bills for every byte that does). Callers check access first.
//
// -> { url, size }
export async function fileLinkResponse(file: File): Promise<Response> {
  const [[metadata], [url]] = await Promise.all([
    file.getMetadata(),
    file.getSignedUrl({ version: 'v4', action: 'read', expires: Date.now() + LINK_MINUTES * 60 * 1000 }),
  ]);
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

  // GCS ranges are inclusive at the end
  const [chunk] = await file.download({ start, end: end - 1 });
  return new Response(new Uint8Array(chunk), {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
