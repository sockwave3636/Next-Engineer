import { cancelContribution, finishContribution, getMyContributions, startContribution } from '@/lib/server/contributions';
import { errorResponse, HttpError, readJson, requireUser } from '@/lib/server/http';

// A student's credits and shared files, and the steps of uploading one.
//
// GET                                                       -> credits, penalties and files
// POST { action: 'start', subjectId, type, sizeBytes, … }   -> { id }
// POST { action: 'finish' | 'cancel', id }                  -> { ok }
export async function GET(request: Request) {
  try {
    const user = await requireUser(request);
    return Response.json(await getMyContributions(user), { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    const body = await readJson(request);
    switch (body.action) {
      case 'start':
        return Response.json(await startContribution(user, body));
      case 'finish':
        await finishContribution(user, body.id);
        return Response.json({ ok: true });
      case 'cancel':
        await cancelContribution(user, body.id);
        return Response.json({ ok: true });
      default:
        throw new HttpError(400, 'Unknown action.');
    }
  } catch (error) {
    return errorResponse(error);
  }
}
