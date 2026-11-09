import { getFileForReview } from '@/lib/server/contributions';
import { fileRangeResponse } from '@/lib/server/file-range';
import { errorResponse, readJson, requireOwner } from '@/lib/server/http';

// A student's untrusted file, for the owner's on-site reader only. It leaves as raw byte ranges
// to a POST request, so there is nothing a browser can open or save, and no link to share.
//
// POST { id }               -> { size }
// POST { id, start, end }   -> bytes [start, end)
export async function POST(request: Request) {
  try {
    await requireOwner(request);
    const body = await readJson(request);
    return await fileRangeResponse(await getFileForReview(body.id), body);
  } catch (error) {
    return errorResponse(error);
  }
}
