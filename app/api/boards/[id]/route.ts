import { errorResponse, readJson, requireUser } from '@/lib/server/http';
import { boardsLive, deleteOrLeaveBoard, openBoard, updateBoard } from '@/lib/server/boards';

type Context = { params: Promise<{ id: string }> };

// One study board
//
// GET                           -> { board, live }   opens it (joins it, if it's shared by link)
// PATCH { title?, shared? }     -> { board }         owner only
// DELETE                        -> { result }        the owner deletes it; anyone else leaves it
export async function GET(request: Request, { params }: Context) {
  try {
    const user = await requireUser(request);
    const { id } = await params;
    return Response.json({ board: await openBoard(user, id), live: boardsLive() }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PATCH(request: Request, { params }: Context) {
  try {
    const user = await requireUser(request);
    const { id } = await params;
    return Response.json({ board: await updateBoard(user.uid, id, await readJson(request)) });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: Request, { params }: Context) {
  try {
    const user = await requireUser(request);
    const { id } = await params;
    return Response.json({ result: await deleteOrLeaveBoard(user.uid, id) });
  } catch (error) {
    return errorResponse(error);
  }
}
