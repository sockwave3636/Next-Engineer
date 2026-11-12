import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { HISTORY_SHOWN, HistoryEntry, HistoryKind, SAFE_ID } from '@/lib/history/types';
import { HttpError } from './http';

const historyOf = (uid: string) => adminDb().collection('users').doc(uid).collection('history');

const text = (value: unknown, name: string, max = 200): string => {
  if (typeof value !== 'string' || !value.trim() || value.length > max) throw new HttpError(400, `Missing or invalid ${name}.`);
  return value.trim();
};

// The link back has to be a page on this site, never another address
const sitePath = (value: unknown): string => {
  const path = text(value, 'path', 300);
  if (!/^\/[A-Za-z0-9][A-Za-z0-9/_-]*(\?read=[A-Za-z0-9_-]+)?$/.test(path)) throw new HttpError(400, 'Missing or invalid path.');
  return path;
};

export async function addToHistory(uid: string, body: Record<string, unknown>): Promise<void> {
  const kind = body.kind;
  if (kind !== 'resource' && kind !== 'project') throw new HttpError(400, 'Missing or invalid kind.');
  const itemId = text(body.itemId, 'itemId');
  if (!SAFE_ID.test(itemId)) throw new HttpError(400, 'Missing or invalid itemId.');

  await historyOf(uid).doc(`${kind}-${itemId}`).set({
    kind: kind satisfies HistoryKind,
    title: text(body.title, 'title'),
    context: text(body.context, 'context'),
    label: text(body.label, 'label', 60),
    path: sitePath(body.path),
    openedAt: FieldValue.serverTimestamp(),
  });
}

export async function listHistory(uid: string): Promise<HistoryEntry[]> {
  const snapshot = await historyOf(uid).orderBy('openedAt', 'desc').limit(HISTORY_SHOWN).get();
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      kind: data.kind,
      title: data.title,
      context: data.context,
      label: data.label,
      path: data.path,
      openedAt: (data.openedAt as Timestamp | undefined)?.toDate().toISOString() ?? new Date().toISOString(),
    };
  });
}

export async function removeFromHistory(uid: string, id: string): Promise<void> {
  if (!/^(resource|project)-[A-Za-z0-9_-]{1,150}$/.test(id)) throw new HttpError(400, 'Missing or invalid id.');
  await historyOf(uid).doc(id).delete();
}

export async function clearHistory(uid: string): Promise<void> {
  await adminDb().recursiveDelete(historyOf(uid));
}
