import { revalidateTag } from 'next/cache';
import { FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { readAnnouncement } from '@/lib/announcement/server';
import { ANNOUNCEMENT_LABEL_MAX, ANNOUNCEMENT_TEXT_MAX, isSafeLink } from '@/lib/announcement/types';
import { errorResponse, HttpError, readJson, requireOwner } from '@/lib/server/http';

// The admin panel's "What's new" bar. Owners only; written with the Admin SDK.
//
// GET                                         -> { announcement }   (null if never set)
// POST { text, linkLabel, linkHref, on }      -> { announcement }
export async function GET(request: Request) {
  try {
    await requireOwner(request);
    return Response.json({ announcement: await readAnnouncement() }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

const clean = (value: unknown) => (typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '');

export async function POST(request: Request) {
  try {
    const user = await requireOwner(request);
    const body = await readJson(request);
    const text = clean(body.text);
    const linkLabel = clean(body.linkLabel);
    const linkHref = clean(body.linkHref);
    if (typeof body.on !== 'boolean') throw new HttpError(400, 'Missing or invalid on.');
    if (!text) throw new HttpError(400, 'Write the announcement first.');
    if (text.length > ANNOUNCEMENT_TEXT_MAX) throw new HttpError(400, `Keep it to ${ANNOUNCEMENT_TEXT_MAX} characters.`);
    if (linkHref && !isSafeLink(linkHref)) throw new HttpError(400, 'The link must be a page on this site, like /boards, or a full https:// address.');
    if (linkHref && !linkLabel) throw new HttpError(400, 'Give the link a label, like “Take a look”.');
    if (linkLabel.length > ANNOUNCEMENT_LABEL_MAX) throw new HttpError(400, `Keep the link label to ${ANNOUNCEMENT_LABEL_MAX} characters.`);

    // New wording gets a new id, so students who closed the old bar see this one
    const current = await readAnnouncement();
    const changed = !current || current.text !== text || current.linkHref !== linkHref || current.linkLabel !== linkLabel;
    const announcement = {
      id: changed ? Date.now().toString(36) : current.id,
      on: body.on,
      text,
      linkLabel: linkHref ? linkLabel : '',
      linkHref,
    };
    await adminDb()
      .doc('settings/announcement')
      .set({ ...announcement, updatedAt: FieldValue.serverTimestamp(), updatedBy: user.email ?? null });
    revalidateTag(CATALOG_TAG, { expire: 0 });
    return Response.json({ announcement });
  } catch (error) {
    return errorResponse(error);
  }
}
