import type { DecodedIdToken } from 'firebase-admin/auth';
import { FieldValue } from 'firebase-admin/firestore';
import { Liveblocks } from '@liveblocks/node';
import { adminDb } from '@/lib/firebase/admin';
import { toMillis } from '@/lib/catalog/convert';
import {
  BOARD_TITLE_MAX,
  BoardSummary,
  MAX_BOARD_MEMBERS,
  MAX_BOARDS_PER_OWNER,
  boardIdFromRoom,
  roomIdFor,
} from '@/lib/boards/types';
import { HttpError } from './http';

// boards/{id}: { title, ownerId, ownerName, memberIds (owner first, then everyone who opened it
// through the link), shared, createdAt, lastOpenedAt }. Only the server reads and writes it.
const boards = () => adminDb().collection('boards');

type BoardDoc = FirebaseFirestore.DocumentData;

// Liveblocks needs a secret key (LIVEBLOCKS_SECRET_KEY in .env and Vercel) for live drawing
export const boardsLive = () => !!process.env.LIVEBLOCKS_SECRET_KEY;

function liveblocks(): Liveblocks {
  const secret = process.env.LIVEBLOCKS_SECRET_KEY;
  if (!secret) throw new HttpError(503, 'Study boards are not switched on yet. Please try again later.', 'BOARDS_OFF');
  return new Liveblocks({ secret });
}

// The name other people see on your cursor. Never the email address.
function displayName(user: DecodedIdToken): string {
  const name = typeof user.name === 'string' ? user.name.replace(/\s+/g, ' ').trim() : '';
  return name.slice(0, 40) || 'Student';
}

function cleanTitle(value: unknown): string {
  const title = typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';
  if (!title) throw new HttpError(400, 'Give the board a name.');
  if (title.length > BOARD_TITLE_MAX) throw new HttpError(400, `Board names can be up to ${BOARD_TITLE_MAX} characters.`);
  return title;
}

function toSummary(id: string, data: BoardDoc, uid: string): BoardSummary {
  return {
    id,
    title: data.title ?? 'Untitled board',
    ownerName: data.ownerName ?? 'Student',
    isOwner: data.ownerId === uid,
    shared: data.shared === true,
    lastOpenedAt: toMillis(data.lastOpenedAt) || toMillis(data.createdAt),
  };
}

const canOpen = (data: BoardDoc, uid: string) => data.ownerId === uid || data.shared === true;

async function readBoard(id: string): Promise<BoardDoc> {
  if (!/^[A-Za-z0-9]{1,40}$/.test(id)) throw new HttpError(404, 'This board doesn’t exist.');
  const data = (await boards().doc(id).get()).data();
  if (!data) throw new HttpError(404, 'This board doesn’t exist. It may have been deleted.');
  return data;
}

// Boards you own, and shared boards you've opened before. Shared boards the owner has since made
// private drop off the list.
export async function listBoards(uid: string): Promise<BoardSummary[]> {
  const snapshot = await boards().where('memberIds', 'array-contains', uid).limit(100).get();
  return snapshot.docs
    .filter((doc) => canOpen(doc.data(), uid))
    .map((doc) => toSummary(doc.id, doc.data(), uid))
    .sort((a, b) => b.lastOpenedAt - a.lastOpenedAt);
}

export async function createBoard(user: DecodedIdToken, title: unknown): Promise<BoardSummary> {
  const name = cleanTitle(title);
  const owned = await boards().where('ownerId', '==', user.uid).count().get();
  if (owned.data().count >= MAX_BOARDS_PER_OWNER) {
    throw new HttpError(400, `You can have up to ${MAX_BOARDS_PER_OWNER} boards. Delete one you no longer need first.`);
  }
  const ref = boards().doc();
  await ref.set({
    title: name,
    ownerId: user.uid,
    ownerName: displayName(user),
    memberIds: [user.uid],
    shared: false,
    createdAt: FieldValue.serverTimestamp(),
    lastOpenedAt: FieldValue.serverTimestamp(),
  });
  return { id: ref.id, title: name, ownerName: displayName(user), isOwner: true, shared: false, lastOpenedAt: Date.now() };
}

// Opening a shared board through its link adds it to your "Shared with you" list
export async function openBoard(user: DecodedIdToken, id: string): Promise<BoardSummary> {
  const data = await readBoard(id);
  if (!canOpen(data, user.uid)) throw new HttpError(403, 'This board is private. Ask its owner to share it.', 'BOARD_PRIVATE');
  const members: string[] = Array.isArray(data.memberIds) ? data.memberIds : [];
  const joining = !members.includes(user.uid);
  if (joining && members.length >= MAX_BOARD_MEMBERS) {
    throw new HttpError(403, `This board already has ${MAX_BOARD_MEMBERS} people on it.`, 'BOARD_FULL');
  }
  await boards()
    .doc(id)
    .update({
      lastOpenedAt: FieldValue.serverTimestamp(),
      ...(joining ? { memberIds: FieldValue.arrayUnion(user.uid) } : {}),
    });
  return { ...toSummary(id, data, user.uid), lastOpenedAt: Date.now() };
}

// Owners only: rename, or turn link sharing on or off
export async function updateBoard(uid: string, id: string, body: Record<string, unknown>): Promise<BoardSummary> {
  const data = await readBoard(id);
  if (data.ownerId !== uid) throw new HttpError(403, 'Only the board’s owner can change it.');
  const changes: Record<string, unknown> = {};
  if ('title' in body) changes.title = cleanTitle(body.title);
  if ('shared' in body) {
    if (typeof body.shared !== 'boolean') throw new HttpError(400, 'Missing or invalid shared.');
    changes.shared = body.shared;
  }
  if (Object.keys(changes).length === 0) throw new HttpError(400, 'Nothing to change.');
  await boards().doc(id).update(changes);
  return toSummary(id, { ...data, ...changes }, uid);
}

// The owner deletes the board and everything drawn on it; anyone else just leaves it
export async function deleteOrLeaveBoard(uid: string, id: string): Promise<'deleted' | 'left'> {
  const data = await readBoard(id);
  if (data.ownerId !== uid) {
    await boards().doc(id).update({ memberIds: FieldValue.arrayRemove(uid) });
    return 'left';
  }
  if (boardsLive()) {
    await liveblocks()
      .deleteRoom(roomIdFor(id))
      .catch((error: { status?: number }) => {
        // Never opened, so Liveblocks has no room for it
        if (error?.status !== 404) throw error;
      });
  }
  await boards().doc(id).delete();
  return 'deleted';
}

// Lets a signed-in student into a board's live room, with their name for the cursor label
export async function authorizeRoom(user: DecodedIdToken, room: unknown): Promise<Response> {
  const id = typeof room === 'string' ? boardIdFromRoom(room) : null;
  if (!id) throw new HttpError(400, 'Missing or invalid room.');
  const data = await readBoard(id);
  if (!canOpen(data, user.uid)) throw new HttpError(403, 'This board is private. Ask its owner to share it.', 'BOARD_PRIVATE');
  const client = liveblocks();
  const session = client.prepareSession(user.uid, { userInfo: { name: displayName(user) } });
  session.allow(roomIdFor(id), session.FULL_ACCESS);
  const { status, body } = await session.authorize();
  return new Response(body, { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' } });
}
