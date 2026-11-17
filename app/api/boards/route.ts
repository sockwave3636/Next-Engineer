import { errorResponse, readJson, requireUser } from '@/lib/server/http';
import { boardsLive, createBoard, listBoards } from '@/lib/server/boards';

// The signed-in student's study boards
//
// GET               -> { boards, live }   live: whether drawing is switched on (Liveblocks key set)
// POST { title }    -> { board }          creates a private board
export async function GET(request: Request) {
  try {
    const user = await requireUser(request);
    return Response.json({ boards: await listBoards(user.uid), live: boardsLive() }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    const body = await readJson(request);
    return Response.json({ board: await createBoard(user, body.title) });
  } catch (error) {
    return errorResponse(error);
  }
}
