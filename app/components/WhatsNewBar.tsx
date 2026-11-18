'use client';

import Link from 'next/link';
import Icon from './Icon';
import { Announcement, DISMISSED_KEY } from '@/lib/announcement/types';

// The "What's new" strip at the top of every page. Closing it hides this announcement in this
// browser; a script in the root layout hides it before first paint on later visits, so it never
// flashes. `preview` shows it in the admin panel without the close button doing anything.
export default function WhatsNewBar({ announcement, preview = false }: { announcement: Announcement; preview?: boolean }) {
  const close = () => {
    if (preview) return;
    try {
      localStorage.setItem(DISMISSED_KEY, announcement.id);
    } catch {
      // Storage blocked: it hides until the page reloads
    }
    document.documentElement.classList.add('wn-dismissed');
  };

  const external = announcement.linkHref.startsWith('https://');
  const linkClass = 'inline-flex items-center gap-0.5 whitespace-nowrap font-semibold underline underline-offset-2 hover:no-underline';

  return (
    <div id={preview ? undefined : 'whats-new'} className="bg-brand text-on-brand [.wn-dismissed_&]:hidden" role="region" aria-label="What's new">
      <div className="container-page flex items-center gap-3 py-2 text-sm">
        <span className="shrink-0 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider">New</span>
        <p className="min-w-0 flex-1 leading-snug">
          {announcement.text}{' '}
          {announcement.linkHref &&
            (external ? (
              <a href={announcement.linkHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {announcement.linkLabel} <Icon name="arrow_forward" size={14} />
              </a>
            ) : (
              <Link href={announcement.linkHref} className={linkClass}>
                {announcement.linkLabel} <Icon name="arrow_forward" size={14} />
              </Link>
            ))}
        </p>
        <button
          type="button"
          onClick={close}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-md hover:bg-white/15"
          aria-label="Close this announcement"
          title="Close"
        >
          <Icon name="close" size={18} />
        </button>
      </div>
    </div>
  );
}
