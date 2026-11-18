import { auth } from '@/lib/firebase/config';
import type { Announcement } from './types';

async function ownerRequest<T>(method: 'GET' | 'POST', body?: unknown): Promise<T> {
  const token = await auth.currentUser?.getIdToken();
  if (!token) throw new Error('Please sign in again.');
  const response = await fetch('/api/admin/announcement', {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
  return data as T;
}

export async function getAnnouncementForAdmin(): Promise<Announcement | null> {
  return (await ownerRequest<{ announcement: Announcement | null }>('GET')).announcement;
}

export async function saveAnnouncement(change: Omit<Announcement, 'id'>): Promise<Announcement> {
  return (await ownerRequest<{ announcement: Announcement }>('POST', change)).announcement;
}
