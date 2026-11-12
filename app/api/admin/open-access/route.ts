import { revalidateTag } from 'next/cache';
import { FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG, readFreeWithoutSignIn, readOpenAccess } from '@/lib/catalog/server';
import { errorResponse, HttpError, readJson, requireOwner } from '@/lib/server/http';

// The admin panel's free-access switches. Owners only; written with the Admin SDK, so the
// settings document needs no client write access.
//
// GET                    -> { open, signIn }
// POST { open: bool }    -> { open, signIn }   free access on or off
// POST { signIn: bool }  -> { open, signIn }   during free access, whether readers sign in first
export async function GET(request: Request) {
  try {
    await requireOwner(request);
    return Response.json(await readSwitches(), { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireOwner(request);
    const body = await readJson(request);
    const changed = { openAccessChangedAt: FieldValue.serverTimestamp(), openAccessChangedBy: user.email ?? null };
    if (typeof body.open === 'boolean') {
      await adminDb().doc('settings/site').set({ openAccess: body.open, ...changed }, { merge: true });
    } else if (typeof body.signIn === 'boolean') {
      await adminDb().doc('settings/site').set({ freeWithoutSignIn: !body.signIn, ...changed }, { merge: true });
    } else {
      throw new HttpError(400, 'Missing or invalid open or signIn.');
    }
    revalidateTag(CATALOG_TAG, { expire: 0 });
    return Response.json(await readSwitches());
  } catch (error) {
    return errorResponse(error);
  }
}

async function readSwitches() {
  const [open, withoutSignIn] = await Promise.all([readOpenAccess(), readFreeWithoutSignIn()]);
  return { open, signIn: !withoutSignIn };
}
