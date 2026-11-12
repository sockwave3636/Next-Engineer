import { errorResponse, readJson, requireString, requireViewer } from '@/lib/server/http';
import { fileLinkResponse, fileRangeResponse } from '@/lib/server/file-range';
import { getReadableResource } from '@/lib/server/resources';

// Every uploaded file, free or premium, is read-only in the in-site reader, and every request
// re-checks access. The reader normally fetches the bytes straight from Storage through a
// short-lived link; files shared by students are streamed through here instead, a range at a time.
//
// POST { resourceId, link: true }   -> { url, size }
// POST { resourceId }               -> { size }
// POST { resourceId, start, end }   -> bytes [start, end)
export async function POST(request: Request) {
  try {
    const user = await requireViewer(request);
    const body = await readJson(request);
    const link = body.link === true;
    const file = await getReadableResource(user, requireString(body, 'resourceId'), link);
    return await (link ? fileLinkResponse(file) : fileRangeResponse(file, body));
  } catch (error) {
    return errorResponse(error);
  }
}
