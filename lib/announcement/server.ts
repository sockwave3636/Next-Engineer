import { unstable_cache } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import type { Announcement } from './types';

export async function readAnnouncement(): Promise<Announcement | null> {
  const data = (await adminDb().doc('settings/announcement').get()).data();
  // The id goes into an inline script in every page, so only ever letters and digits
  if (!data || typeof data.text !== 'string' || typeof data.id !== 'string' || !/^[a-z0-9]{1,20}$/.test(data.id)) return null;
  return {
    id: data.id,
    on: data.on === true,
    text: data.text,
    linkLabel: typeof data.linkLabel === 'string' ? data.linkLabel : '',
    linkHref: typeof data.linkHref === 'string' ? data.linkHref : '',
  };
}

// What every page shows. Cached with the catalog; saving in the admin panel refreshes it at once.
export const getAnnouncement = unstable_cache(
  async (): Promise<Announcement | null> => {
    const announcement = await readAnnouncement();
    return announcement?.on ? announcement : null;
  },
  ['announcement'],
  { tags: [CATALOG_TAG], revalidate: 86400 }
);
