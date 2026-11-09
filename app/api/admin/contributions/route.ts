import { approveContribution, listForReview, rejectContribution, removeContribution } from '@/lib/server/contributions';
import { errorResponse, HttpError, readJson, requireOwner } from '@/lib/server/http';

// The admin panel's Student uploads tab. Owners only.
//
// GET ?status=pending|approved|rejected|removed        -> { files }
// POST { action: 'approve', id, title, credits, parts, … }  -> { creditsAwarded }
// POST { action: 'reject' | 'remove', id, reason, deliberate } -> { ok }
export async function GET(request: Request) {
  try {
    await requireOwner(request);
    const files = await listForReview(new URL(request.url).searchParams.get('status'));
    return Response.json({ files }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    await requireOwner(request);
    const body = await readJson(request);
    switch (body.action) {
      case 'approve':
        return Response.json(await approveContribution(body.id, body));
      case 'reject':
        await rejectContribution(body.id, body);
        return Response.json({ ok: true });
      case 'remove':
        await removeContribution(body.id, body);
        return Response.json({ ok: true });
      default:
        throw new HttpError(400, 'Unknown action.');
    }
  } catch (error) {
    return errorResponse(error);
  }
}
