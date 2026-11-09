import { errorResponse, readJson, requireString, requireViewer } from '@/lib/server/http';
import { fileRangeResponse } from '@/lib/server/file-range';
import { getReadableProjectDocument } from '@/lib/server/projects';

// A project's PDFs (synopsis, guide, report, viva) in the read-only reader, a byte range at a
// time, like /api/resources/view. Every request re-checks the purchase.
//
// POST { projectId, documentId }               -> { size }
// POST { projectId, documentId, start, end }   -> bytes [start, end)
export async function POST(request: Request) {
  try {
    const user = await requireViewer(request);
    const body = await readJson(request);
    const file = await getReadableProjectDocument(user, requireString(body, 'projectId'), requireString(body, 'documentId'));
    return await fileRangeResponse(file, body);
  } catch (error) {
    return errorResponse(error);
  }
}
