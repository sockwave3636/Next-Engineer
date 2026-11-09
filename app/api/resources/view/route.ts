import { errorResponse, readJson, requireString, requireViewer } from '@/lib/server/http';
import { fileRangeResponse } from '@/lib/server/file-range';
import { getReadableResource } from '@/lib/server/resources';

// Every uploaded file, free or premium, is read-only in the in-site reader. The browser never
// gets a file URL: it asks for byte ranges here, and every request re-checks access.
//
// POST { resourceId }               -> { size }
// POST { resourceId, start, end }   -> bytes [start, end)
export async function POST(request: Request) {
  try {
    const user = await requireViewer(request);
    const body = await readJson(request);
    const file = await getReadableResource(user, requireString(body, 'resourceId'));
    return await fileRangeResponse(file, body);
  } catch (error) {
    return errorResponse(error);
  }
}
