'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { prepareGoogleSignIn, useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';
import { isListedOwnerEmail } from '@/lib/owners';
import PageShell from './PageShell';

// Shown on /admin to anyone who isn't a verified owner, explaining why and how to fix it
export default function AdminAccess() {
  const { user, logout, sendVerificationEmail, refreshUser, loginWithGoogle } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  // This page offers "Continue with Google" directly, so get the popup ready up front and keep
  // the button disabled until it is (at most 8 seconds)
  const [googleReady, setGoogleReady] = useState(false);
  useEffect(() => {
    Promise.race([prepareGoogleSignIn(), new Promise((resolve) => setTimeout(resolve, 8000))]).then(() => setGoogleReady(true));
  }, []);

  const run = async (action: () => Promise<void>, successMessage?: string) => {
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await action();
      if (successMessage) setNotice(successMessage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  };

  const checkVerified = () =>
    run(async () => {
      await refreshUser();
      // refreshUser updates context; if still unverified this page stays and says so
      setNotice('Still not verified. Open the link in the email, then try again.');
    });

  let icon: string;
  let title: string;
  let body: React.ReactNode;
  let actions: React.ReactNode;

  if (!user) {
    icon = '🔐';
    title = 'Admin sign-in';
    body = 'Sign in with an owner account to manage programs, subjects, study material, posts and messages.';
    actions = (
      <button onClick={() => openAuthPrompt({ reason: 'Owner sign-in', allowSignUp: false })} className="btn btn-primary">
        Sign in
      </button>
    );
  } else if (isListedOwnerEmail(user.email) && !user.emailVerified) {
    icon = '✉️';
    title = 'Verify your email to continue';
    body = (
      <>
        <span className="font-bold text-ink">{user.email}</span> is an owner address, but you signed in with a
        password and that email isn&apos;t verified yet. Signing in with Google using the same address works
        straight away, because Google accounts are already verified.
      </>
    );
    actions = (
      <div className="w-full space-y-3">
        {/* Google accounts are verified, so this is the quickest way in */}
        <button onClick={() => run(loginWithGoogle)} disabled={busy || !googleReady} className="btn btn-primary w-full">
          {googleReady ? 'Continue with Google instead' : 'Getting Google sign-in ready…'}
        </button>
        <div className="flex items-center gap-3 text-xs font-bold text-ink-muted">
          <div className="flex-1 border-t border-line" />
          or verify this account
          <div className="flex-1 border-t border-line" />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() =>
              run(
                sendVerificationEmail,
                `Sent to ${user.email} from noreply@learn-2f2c9.firebaseapp.com. It often lands in Spam or Promotions, and can take a few minutes.`
              )
            }
            disabled={busy}
            className="btn btn-secondary"
          >
            Send verification email
          </button>
          <button onClick={checkVerified} disabled={busy} className="btn btn-secondary">
            I&apos;ve verified it
          </button>
          <button onClick={() => run(logout)} disabled={busy} className="btn btn-ghost">
            Log out
          </button>
        </div>
      </div>
    );
  } else {
    icon = '🚫';
    title = "This account can't open the admin panel";
    body = (
      <>
        You&apos;re signed in as <span className="font-bold text-ink">{user.email}</span>, which isn&apos;t an owner
        account. Log out and sign in with an owner email.
      </>
    );
    actions = (
      <>
        <button onClick={() => run(logout)} disabled={busy} className="btn btn-primary">
          Log out
        </button>
        <Link href="/" className="btn btn-secondary">
          Back to site
        </Link>
      </>
    );
  }

  return (
    <PageShell>
      <div className="container-page max-w-lg py-20">
        <div className="card card-pad text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-3xl" aria-hidden="true">
            {icon}
          </div>
          <h1 className="mt-4 text-2xl font-black text-ink">{title}</h1>
          <p className="mt-2 text-ink-muted">{body}</p>
          {notice && <div className="alert alert-success mt-5">{notice}</div>}
          {error && <div className="alert alert-error mt-5">{error}</div>}
          <div className="mt-6 flex flex-wrap justify-center gap-2">{actions}</div>
        </div>
      </div>
    </PageShell>
  );
}
