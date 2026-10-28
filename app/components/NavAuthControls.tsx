'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';

// Sign-in / account buttons for the site header
export default function NavAuthControls() {
  const { user, logout } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  // Only owners sign in on the admin pages, so no sign-up there
  const onAdmin = usePathname()?.startsWith('/admin') ?? false;

  if (!user) {
    return (
      <button
        onClick={() => openAuthPrompt(onAdmin ? { reason: 'Owner sign-in', allowSignUp: false } : {})}
        className="btn btn-primary btn-sm"
      >
        Sign in
      </button>
    );
  }

  const initial = (user.name || user.email || '?').trim().charAt(0).toUpperCase();

  return (
    <>
      {user.isOwner && (
        <Link href="/admin" className="btn btn-soft btn-sm">
          <span aria-hidden="true">👑</span> Admin
        </Link>
      )}
      <span
        className="hidden h-8 w-8 place-items-center rounded-full bg-brand text-sm font-bold text-on-brand sm:grid"
        title={user.name}
        aria-label={`Signed in as ${user.name}`}
      >
        {initial}
      </span>
      <button onClick={logout} className="btn btn-ghost btn-sm">
        Log out
      </button>
    </>
  );
}
