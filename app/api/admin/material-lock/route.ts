import { revalidateTag } from 'next/cache';
import { FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG, readMaterialLocked } from '@/lib/catalog/server';
import { errorResponse, HttpError, isOwnerToken, readJson, requireUser } from '@/lib/server/http';

// The admin panel's "Lock all material" switch. Owners only; written with the Admin SDK, so
// the settings document needs no client write access.
//
// GET                    -> { locked }
// POST { locked: bool }  -> { locked }
async function requireOwner(request: Request) {
  const user = await requireUser(request);
  if (!isOwnerToken(user)) throw new HttpError(403, 'Only owners can change this.');
  return user;
}

export async function GET(request: Request) {
  try {
    await requireOwner(request);
    return Response.json({ locked: await readMaterialLocked() }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireOwner(request);
    const body = await readJson(request);
    if (typeof body.locked !== 'boolean') throw new HttpError(400, 'Missing or invalid locked.');

    await adminDb().doc('settings/site').set(
      { materialLocked: body.locked, materialLockChangedAt: FieldValue.serverTimestamp(), materialLockChangedBy: user.email ?? null },
      { merge: true }
    );
    // Subject pages and the file API read the switch through the catalog cache
    revalidateTag(CATALOG_TAG, { expire: 0 });
    return Response.json({ locked: body.locked });
  } catch (error) {
    return errorResponse(error);
  }
}
