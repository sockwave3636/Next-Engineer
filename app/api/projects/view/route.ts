import { errorResponse, readJson, requireString, requireViewer } from '@/lib/server/http';
import { fileLinkResponse, fileRangeResponse } from '@/lib/server/file-range';
import { getReadableProjectDocument } from '@/lib/server/projects';

// A project's PDFs (synopsis, guide, report, viva) in the read-only reader, like
// /api/resources/view. Every request re-checks the purchase.
//
// POST { projectId, documentId, link: true }   -> { url, size }
// POST { projectId, documentId }               -> { size }
// POST { projectId, documentId, start, end }   -> bytes [start, end)
export async function POST(request: Request) {
  try {
    const user = await requireViewer(request);
    const body = await readJson(request);
    const file = await getReadableProjectDocument(user, requireString(body, 'projectId'), requireString(body, 'documentId'));
    return await (body.link === true ? fileLinkResponse(file) : fileRangeResponse(file, body));
  } catch (error) {
    return errorResponse(error);
  }
}
