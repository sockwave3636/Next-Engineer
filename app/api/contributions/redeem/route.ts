import { redeemCredits } from '@/lib/server/contributions';
import { errorResponse, readJson, requireUser } from '@/lib/server/http';

// POST { subjectId } -> { credits, expiresAt }: spends credits on a subject pass
export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    return Response.json(await redeemCredits(user, (await readJson(request)).subjectId));
  } catch (error) {
    return errorResponse(error);
  }
}
