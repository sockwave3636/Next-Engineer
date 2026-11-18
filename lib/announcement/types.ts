// The "What's new" bar at the top of every page, set by owners in the admin panel
// (settings/announcement). Each saved change gets a new id, so a student who closed the last
// announcement still sees the next one.
export interface Announcement {
  id: string;
  on: boolean;
  text: string;
  // Optional link, such as "/boards" or a full https:// address
  linkLabel: string;
  linkHref: string;
}

export const ANNOUNCEMENT_TEXT_MAX = 140;
export const ANNOUNCEMENT_LABEL_MAX = 30;

// Remembers, per browser, the id of the announcement the student closed
export const DISMISSED_KEY = 'whats-new-dismissed';

// A page on this site ("/boards") or a full https:// address. Never javascript: or data: links.
export function isSafeLink(href: string): boolean {
  if (/^\/(?!\/)[^\s<>"']{0,200}$/.test(href)) return true;
  try {
    return new URL(href).protocol === 'https:' && href.length <= 300;
  } catch {
    return false;
  }
}
