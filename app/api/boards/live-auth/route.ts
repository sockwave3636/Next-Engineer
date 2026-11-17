import { errorResponse, readJson, requireUser } from '@/lib/server/http';
import { authorizeRoom } from '@/lib/server/boards';

// Liveblocks asks here before someone joins a board's live room.
// POST { room } -> Liveblocks' token response
export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    const body = await readJson(request);
    return await authorizeRoom(user, body.room);
  } catch (error) {
    return errorResponse(error);
  }
}
