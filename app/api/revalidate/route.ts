import { revalidateTag } from 'next/cache';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { errorResponse, HttpError, isOwnerToken, requireUser } from '@/lib/server/http';

// Called by the admin panel after every catalog edit so public pages show it immediately
export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    if (!isOwnerToken(user)) {
      throw new HttpError(403, 'Only owners can refresh the catalog.');
    }
    // expire: 0 → the next visitor gets fresh data instead of the stale copy
    revalidateTag(CATALOG_TAG, { expire: 0 });
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}
