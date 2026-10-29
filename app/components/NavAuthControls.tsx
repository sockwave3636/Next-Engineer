'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';
import { usePasses } from '../context/PassContext';
import Icon from './Icon';

// Sign-in / account buttons for the site header
export default function NavAuthControls() {
  const { user, logout } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const { passes } = usePasses();
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
          <Icon name="admin_panel_settings" size={16} /> Admin
        </Link>
      )}
      {/* Jumps to "Your passes" at the top of the home page */}
      {Object.keys(passes).length > 0 && (
        <Link href="/#my-passes" className="btn btn-soft btn-sm" aria-label="My passes" title="My passes">
          <Icon name="workspace_premium" size={16} />
          <span className="hidden sm:inline">My passes</span>
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
