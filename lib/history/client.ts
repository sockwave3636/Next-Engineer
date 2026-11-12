import { auth } from '@/lib/firebase/config';
import type { HistoryEntry, HistoryKind } from './types';

async function historyRequest<T>(method: 'GET' | 'POST' | 'DELETE', body?: unknown): Promise<T> {
  const currentUser = auth.currentUser;
  if (!currentUser) throw new Error('Please sign in first.');
  const response = await fetch('/api/history', {
    method,
    headers: { Authorization: `Bearer ${await currentUser.getIdToken()}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
  return data as T;
}

export interface Opened {
  kind: HistoryKind;
  itemId: string;
  title: string;
  context: string;
  label: string;
  // The page to come back to; ?read=<readId> is added so it opens the file again
  page: string;
  readId: string;
}

// Saves an opened file to the signed-in student's history. Never gets in the way of reading:
// visitors without an account are skipped and failures are ignored.
export function rememberOpened({ page, readId, ...entry }: Opened): void {
  if (!auth.currentUser) return;
  historyRequest('POST', { ...entry, path: `${page}?read=${encodeURIComponent(readId)}` }).catch(() => {});
}

export async function getHistory(): Promise<HistoryEntry[]> {
  return (await historyRequest<{ entries: HistoryEntry[] }>('GET')).entries;
}

export async function removeFromHistory(id: string): Promise<void> {
  await historyRequest('DELETE', { id });
}

export async function clearHistory(): Promise<void> {
  await historyRequest('DELETE', { all: true });
}

// The ?read=<id> a History link carries, removed from the address bar once read so a reload
// or a shared link doesn't open the file again
export function takeReadParam(): string | null {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('read');
  if (!id) return null;
  params.delete('read');
  const query = params.toString();
  window.history.replaceState(window.history.state, '', window.location.pathname + (query ? `?${query}` : '') + window.location.hash);
  return id;
}
