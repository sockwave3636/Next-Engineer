import { auth } from '@/lib/firebase/config';
import type { DropdownMessage } from './types';

async function ownerRequest<T>(method: 'GET' | 'POST', body?: unknown): Promise<T> {
  const token = await auth.currentUser?.getIdToken();
  if (!token) throw new Error('Please sign in again.');
  const response = await fetch('/api/admin/dropdown-message', {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
  return data as T;
}

export async function getDropdownForAdmin(): Promise<DropdownMessage> {
  return (await ownerRequest<{ message: DropdownMessage }>('GET')).message;
}

export async function saveDropdownMessage(change: Omit<DropdownMessage, 'id'>): Promise<DropdownMessage> {
  return (await ownerRequest<{ message: DropdownMessage }>('POST', change)).message;
}
