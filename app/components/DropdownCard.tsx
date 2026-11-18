'use client';

import Link from 'next/link';
import Icon from './Icon';
import type { DropdownMessage } from '@/lib/messages/types';

// The drop-down message's card, used on the site and as the preview in the admin panel.
// Everything in it is plain text.
export default function DropdownCard({ message, onClose, className = '' }: { message: DropdownMessage; onClose: () => void; className?: string }) {
  const external = message.buttonHref.startsWith('https://');

  return (
    <section
      role="region"
      aria-labelledby="dropdown-title"
      className={`w-full max-w-xl rounded-2xl border border-line bg-surface p-4 text-left shadow-float sm:p-5 ${className}`}
    >
      <div className="flex gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name="campaign" size={22} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 id="dropdown-title" className="font-display font-semibold text-ink">
              {message.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="-mr-1 -mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-ink-muted hover:bg-surface-muted hover:text-ink"
              aria-label="Close"
            >
              <Icon name="close" size={18} />
            </button>
          </div>
          <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ink-muted">{message.text}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {message.buttonHref &&
              (external ? (
                <a href={message.buttonHref} target="_blank" rel="noopener noreferrer" onClick={onClose} className="btn btn-primary btn-sm">
                  {message.buttonLabel} <Icon name="open_in_new" size={16} />
                </a>
              ) : (
                <Link href={message.buttonHref} onClick={onClose} className="btn btn-primary btn-sm">
                  {message.buttonLabel} <Icon name="arrow_forward" size={16} />
                </Link>
              ))}
            <button type="button" onClick={onClose} className="btn btn-ghost btn-sm">
              Got it
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
