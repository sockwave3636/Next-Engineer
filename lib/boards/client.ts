import { auth } from '@/lib/firebase/config';
import type { BoardSummary } from './types';

export class BoardError extends Error {
  constructor(public status: number, message: string, public code?: string) {
    super(message);
  }
}

async function boardRequest<T>(method: 'GET' | 'POST' | 'PATCH' | 'DELETE', url: string, body?: unknown): Promise<T> {
  const currentUser = auth.currentUser;
  if (!currentUser) throw new BoardError(401, 'Please sign in first.');
  const response = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${await currentUser.getIdToken()}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new BoardError(response.status, data.error || 'Something went wrong. Please try again.', data.code);
  return data as T;
}

export const listBoards = () => boardRequest<{ boards: BoardSummary[]; live: boolean }>('GET', '/api/boards');

export const createBoard = async (title: string) => (await boardRequest<{ board: BoardSummary }>('POST', '/api/boards', { title })).board;

export const openBoard = (id: string) => boardRequest<{ board: BoardSummary; live: boolean }>('GET', `/api/boards/${encodeURIComponent(id)}`);

export const updateBoard = async (id: string, changes: { title?: string; shared?: boolean }) =>
  (await boardRequest<{ board: BoardSummary }>('PATCH', `/api/boards/${encodeURIComponent(id)}`, changes)).board;

export const deleteOrLeaveBoard = async (id: string) =>
  (await boardRequest<{ result: 'deleted' | 'left' }>('DELETE', `/api/boards/${encodeURIComponent(id)}`)).result;

// What Liveblocks expects back from an auth callback
type RoomAuthResult = { token: string } | { error: string; reason: string };

// Liveblocks calls this to join a room; the server checks the student may open the board
export async function authorizeRoom(room?: string): Promise<RoomAuthResult> {
  const currentUser = auth.currentUser;
  if (!currentUser) return { error: 'forbidden', reason: 'Please sign in first.' };
  const response = await fetch('/api/boards/live-auth', {
    method: 'POST',
    headers: { Authorization: `Bearer ${await currentUser.getIdToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ room }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) return { error: response.status === 403 ? 'forbidden' : 'unavailable', reason: data.error || 'Could not open this board.' };
  return data as RoomAuthResult;
}

// The address to share; anyone signed in can open it while sharing is on
export const boardLink = (id: string) => `${window.location.origin}/boards/${id}`;
