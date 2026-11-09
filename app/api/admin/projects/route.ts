import { revalidateTag } from 'next/cache';
import { FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { readProjectsCharging } from '@/lib/projects/server';
import { toProject } from '@/lib/projects/types';
import { errorResponse, HttpError, readJson, requireOwner, requireString } from '@/lib/server/http';

// The admin panel's Mini projects tab. Projects are server-only in Firestore (no client rules),
// so owners list and change them through here with the Admin SDK.
//
// GET                                      -> { projects, charging } including drafts
// POST { id, published?: bool, price?: n }  -> { project }
// POST { charging: bool }                   -> { charging }: whether students pay for projects

export async function GET(request: Request) {
  try {
    await requireOwner(request);
    const snapshot = await adminDb().collection('projects').get();
    const projects = snapshot.docs.map((doc) => toProject(doc.id, doc.data())).sort((a, b) => a.number - b.number);
    return Response.json({ projects, charging: await readProjectsCharging() }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    await requireOwner(request);
    const body = await readJson(request);
    if (body.charging !== undefined) {
      if (typeof body.charging !== 'boolean') throw new HttpError(400, 'Missing or invalid charging.');
      await adminDb().doc('settings/site').set({ projectsCharging: body.charging }, { merge: true });
      revalidateTag(CATALOG_TAG, { expire: 0 });
      return Response.json({ charging: body.charging });
    }

    const ref = adminDb().collection('projects').doc(requireString(body, 'id'));
    if (!(await ref.get()).exists) throw new HttpError(404, 'Project not found.');

    const changes: Record<string, unknown> = {};
    if (body.published !== undefined) {
      if (typeof body.published !== 'boolean') throw new HttpError(400, 'Missing or invalid published.');
      changes.published = body.published;
    }
    if (body.price !== undefined) {
      if (typeof body.price !== 'number' || !Number.isInteger(body.price) || body.price < 1 || body.price > 100000) {
        throw new HttpError(400, 'Price must be a whole number of rupees, at least ₹1.');
      }
      changes.price = body.price;
    }
    if (Object.keys(changes).length === 0) throw new HttpError(400, 'Nothing to change.');

    await ref.update({ ...changes, updatedAt: FieldValue.serverTimestamp() });
    revalidateTag(CATALOG_TAG, { expire: 0 });
    const updated = await ref.get();
    return Response.json({ project: toProject(updated.id, updated.data() || {}) });
  } catch (error) {
    return errorResponse(error);
  }
}
