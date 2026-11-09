import { revalidateTag } from 'next/cache';
import { FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG, readOpenAccess } from '@/lib/catalog/server';
import { errorResponse, HttpError, readJson, requireOwner } from '@/lib/server/http';

// The admin panel's free-access switch. Owners only; written with the Admin SDK, so the
// settings document needs no client write access.
//
// GET                  -> { open }
// POST { open: bool }  -> { open }
export async function GET(request: Request) {
  try {
    await requireOwner(request);
    return Response.json({ open: await readOpenAccess() }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireOwner(request);
    const body = await readJson(request);
    if (typeof body.open !== 'boolean') throw new HttpError(400, 'Missing or invalid open.');

    await adminDb().doc('settings/site').set(
      { openAccess: body.open, openAccessChangedAt: FieldValue.serverTimestamp(), openAccessChangedBy: user.email ?? null },
      { merge: true }
    );
    revalidateTag(CATALOG_TAG, { expire: 0 });
    return Response.json({ open: body.open });
  } catch (error) {
    return errorResponse(error);
  }
}
