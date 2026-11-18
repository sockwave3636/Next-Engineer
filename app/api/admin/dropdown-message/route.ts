import { revalidateTag } from 'next/cache';
import { FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { isSafeLink } from '@/lib/announcement/types';
import { readDropdownMessage } from '@/lib/messages/server';
import { AUDIENCES, DROPDOWN_LABEL_MAX, DROPDOWN_TEXT_MAX, DROPDOWN_TITLE_MAX, DropdownMessage } from '@/lib/messages/types';
import { errorResponse, HttpError, readJson, requireOwner } from '@/lib/server/http';

// The admin panel's drop-down message. Owners only; written with the Admin SDK.
//
// GET                                                         -> { message }
// POST { title, text, buttonLabel, buttonHref, audience, on }  -> { message }
export async function GET(request: Request) {
  try {
    await requireOwner(request);
    return Response.json({ message: await readDropdownMessage() }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    return errorResponse(error);
  }
}

const oneLine = (value: unknown) => (typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '');
// The message keeps its line breaks, but no runs of blank lines
const paragraph = (value: unknown) => (typeof value === 'string' ? value.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim() : '');

export async function POST(request: Request) {
  try {
    const user = await requireOwner(request);
    const body = await readJson(request);
    const title = oneLine(body.title);
    const text = paragraph(body.text);
    const buttonLabel = oneLine(body.buttonLabel);
    const buttonHref = oneLine(body.buttonHref);
    const audience = AUDIENCES.find((a) => a.id === body.audience)?.id;
    if (typeof body.on !== 'boolean') throw new HttpError(400, 'Missing or invalid on.');
    if (!audience) throw new HttpError(400, 'Choose who sees it.');
    if (!title) throw new HttpError(400, 'Give the message a title.');
    if (title.length > DROPDOWN_TITLE_MAX) throw new HttpError(400, `Keep the title to ${DROPDOWN_TITLE_MAX} characters.`);
    if (!text) throw new HttpError(400, 'Write the message first.');
    if (text.length > DROPDOWN_TEXT_MAX) throw new HttpError(400, `Keep the message to ${DROPDOWN_TEXT_MAX} characters.`);
    if (buttonHref && !isSafeLink(buttonHref)) throw new HttpError(400, 'The button link must be a page on this site, like /contribute, or a full https:// address.');
    if (buttonHref && !buttonLabel) throw new HttpError(400, 'Give the button a label, like “Share a file”.');
    if (buttonLabel.length > DROPDOWN_LABEL_MAX) throw new HttpError(400, `Keep the button label to ${DROPDOWN_LABEL_MAX} characters.`);

    // Anything new to say gets a new id, so everyone sees it again
    const current = await readDropdownMessage();
    const changed =
      current.title !== title || current.text !== text || current.buttonLabel !== buttonLabel || current.buttonHref !== buttonHref || current.audience !== audience;
    const message: DropdownMessage = {
      id: changed ? Date.now().toString(36) : current.id,
      on: body.on,
      title,
      text,
      buttonLabel: buttonHref ? buttonLabel : '',
      buttonHref,
      audience,
    };
    await adminDb()
      .doc('settings/dropdownMessage')
      .set({ ...message, updatedAt: FieldValue.serverTimestamp(), updatedBy: user.email ?? null });
    revalidateTag(CATALOG_TAG, { expire: 0 });
    return Response.json({ message });
  } catch (error) {
    return errorResponse(error);
  }
}
