import { errorResponse, readJson, requireString, requireViewer } from '@/lib/server/http';
import { getProjectDownload } from '@/lib/server/projects';

// Long enough to start the download, short enough that a shared link soon stops working
const LINK_MINUTES = 10;

// POST { projectId } -> { url } for a buyer: a short-lived signed link to the project's zip.
// The zip goes straight from Storage to the browser, so its size isn't limited by this function.
export async function POST(request: Request) {
  try {
    const user = await requireViewer(request);
    const { file, fileName } = await getProjectDownload(user, requireString(await readJson(request), 'projectId'));
    const [url] = await file.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + LINK_MINUTES * 60 * 1000,
      responseDisposition: `attachment; filename="${fileName.replace(/[^\w.-]/g, '_')}"`,
    });
    return Response.json({ url }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}
