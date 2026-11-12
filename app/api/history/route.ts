import { errorResponse, readJson, requireUser } from '@/lib/server/http';
import { addToHistory, clearHistory, listHistory, removeFromHistory } from '@/lib/server/history';

// The signed-in student's reading history (see lib/history/types.ts)
//
// GET                                        -> { entries }
// POST   { kind, itemId, title, context, label, path }  -> { ok }   saves an opened file
// DELETE { id } or { all: true }             -> { ok }               removes one entry, or all of them
export async function GET(request: Request) {
  try {
    const user = await requireUser(request);
    return Response.json({ entries: await listHistory(user.uid) }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    await addToHistory(user.uid, await readJson(request));
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await requireUser(request);
    const body = await readJson(request);
    if (body.all === true) await clearHistory(user.uid);
    else await removeFromHistory(user.uid, typeof body.id === 'string' ? body.id : '');
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}
