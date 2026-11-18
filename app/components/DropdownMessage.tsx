'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import DropdownCard from './DropdownCard';
import { DropdownMessage as Message, SEEN_KEY, VISIT_KEY } from '@/lib/messages/types';

// The team's drop-down message (written in the admin panel), sliding down below the header.
// Signed-in students see each message once (remembered per account in this browser). Visitors
// who aren't signed in see it on every new visit; closing it hides it for the rest of that visit.
// A new message shows again to everyone.
const DELAY_MS = 1200;

// Pages where it would get in the way: the full-screen board and the admin panel
const hiddenOn = (path: string) => /^\/boards\/[^/]+/.test(path) || path.startsWith('/admin');

function alreadyClosed(message: Message, uid: string | undefined): boolean {
  try {
    return uid ? localStorage.getItem(SEEN_KEY(uid)) === message.id : sessionStorage.getItem(VISIT_KEY) === message.id;
  } catch {
    // Storage blocked: show it, it's only a note
    return false;
  }
}

function forThisPerson(message: Message, signedIn: boolean): boolean {
  return message.audience === 'everyone' || (message.audience === 'signedIn') === signedIn;
}

export default function DropdownMessage({ message }: { message: Message }) {
  const { user, loading } = useAuth();
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  // Drives the slide-down: false as it appears, true a moment later
  const [shown, setShown] = useState(false);
  // Drops down just below the site header (and the What's new bar, if it's showing)
  const [top, setTop] = useState(12);
  const uid = user?.uid;

  useEffect(() => {
    if (loading || hiddenOn(pathname) || !forThisPerson(message, !!uid) || alreadyClosed(message, uid)) return;
    let slide: ReturnType<typeof setTimeout> | undefined;
    const timer = setTimeout(() => {
      const header = document.querySelector('header');
      setTop(Math.max(12, (header?.getBoundingClientRect().bottom ?? 0) + 12));
      setOpen(true);
      slide = setTimeout(() => setShown(true), 30);
    }, DELAY_MS);
    return () => {
      clearTimeout(timer);
      clearTimeout(slide);
      setOpen(false);
      setShown(false);
    };
  }, [loading, pathname, uid, message]);

  const close = () => {
    try {
      if (uid) localStorage.setItem(SEEN_KEY(uid), message.id);
      else sessionStorage.setItem(VISIT_KEY, message.id);
    } catch {
      // Storage blocked: it closes for this page only
    }
    setShown(false);
    setTimeout(() => setOpen(false), 250);
  };

  if (!open) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 z-30 flex justify-center px-4" style={{ top }} aria-live="polite">
      <DropdownCard
        message={message}
        onClose={close}
        className={`pointer-events-auto transition duration-300 ease-out ${shown ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}
      />
    </div>
  );
}
