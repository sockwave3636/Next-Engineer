import { unstable_cache } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { AUDIENCES, Audience, DEFAULT_DROPDOWN, DropdownMessage } from './types';

const str = (value: unknown) => (typeof value === 'string' ? value : '');

// The saved message, or the built-in one if an owner has never saved any
export async function readDropdownMessage(): Promise<DropdownMessage> {
  const data = (await adminDb().doc('settings/dropdownMessage').get()).data();
  if (!data) return DEFAULT_DROPDOWN;
  const audience = AUDIENCES.some((a) => a.id === data.audience) ? (data.audience as Audience) : 'everyone';
  return {
    // Only letters and digits, since students' browsers store it
    id: /^[a-z0-9]{1,20}$/.test(str(data.id)) ? str(data.id) : 'saved',
    on: data.on === true,
    title: str(data.title),
    text: str(data.text),
    buttonLabel: str(data.buttonLabel),
    buttonHref: str(data.buttonHref),
    audience,
  };
}

// What pages show (null when it's turned off). Cached with the catalog; saving refreshes it.
export const getDropdownMessage = unstable_cache(
  async (): Promise<DropdownMessage | null> => {
    const message = await readDropdownMessage();
    return message.on && message.text ? message : null;
  },
  ['dropdown-message'],
  { tags: [CATALOG_TAG], revalidate: 86400 }
);
