import { errorResponse, HttpError, readJson, requireString, requireUser } from '@/lib/server/http';
import { getReadableResource } from '@/lib/server/resources';

// Keeps every response well under Vercel's 4.5 MB function response limit
const MAX_CHUNK_BYTES = 2 * 1024 * 1024;

// Every uploaded file, free or premium, is read-only in the in-site reader. The browser never
// gets a file URL: it asks for byte ranges here, and every request re-checks access.
//
// POST { resourceId }               -> { size }
// POST { resourceId, start, end }   -> bytes [start, end)
export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    const body = await readJson(request);
    const file = await getReadableResource(user, requireString(body, 'resourceId'));

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
  } catch (error) {
    return errorResponse(error);
  }
}
