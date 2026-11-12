'use client';

import { useEffect, useState } from 'react';
import { FreeAccess, getFreeAccess, setFreeAccess } from '@/lib/catalog/admin-client';
import Icon from '@/app/components/Icon';
import { errorText } from './ui';

// Free access: everything free, with no payments. While it's on, readers either sign in first (so
// every page carries their email) or read without an account. Turning it off brings back
// premium files and passes exactly as they were.
export default function FreeAccessSwitch() {
  const [state, setState] = useState<FreeAccess | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    getFreeAccess()
      .then((value) => !cancelled && setState(value))
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, []);

  const save = async (change: { open: boolean } | { signIn: boolean }, question: string) => {
    if (!confirm(question)) return;
    setBusy(true);
    setError('');
    try {
      setState(await setFreeAccess(change));
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const toggleOpen = () => {
    if (!state) return;
    const next = !state.open;
    save(
      { open: next },
      next
        ? `Start free access? Every file and project is free, including premium material, and payments stop.${
            state.signIn ? ' Readers still sign in to open files.' : ' Anyone can read without an account.'
          }`
        : 'End free access? Premium files and payments come back, and everyone signs in to read.'
    );
  };

  const toggleSignIn = () => {
    if (!state) return;
    const next = !state.signIn;
    save(
      { signIn: next },
      next
        ? 'Ask readers to sign in? Visitors sign in with Google or email before opening a file. Everything stays free.'
        : 'Let visitors read without an account? Pages will show "Next Engineer" instead of the reader\'s email, and reading history stops for them.'
    );
  };

  const open = state?.open ?? false;

  return (
    <section
      className={`mb-6 rounded-2xl border p-5 ${open ? 'border-leaf/40 bg-leaf-soft' : 'border-line bg-surface shadow-soft'}`}
      aria-live="polite"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${open ? 'bg-surface text-leaf' : 'bg-surface-strong text-ink-muted'}`}>
          <Icon name="lock_open" size={26} />
        </span>
        <div className="min-w-0 flex-1">
          <p className={`font-display font-semibold ${open ? 'text-leaf-ink' : 'text-ink'}`}>
            {state === null ? 'Checking free access…' : open ? 'Free access is on' : 'Free access is off'}
          </p>
          <p className={`text-sm ${open ? 'text-leaf-ink/80' : 'text-ink-muted'}`}>
            {!open
              ? 'Students sign in to read, and premium files need a pass.'
              : state?.signIn
                ? 'Every file and project is free and payments are off. Readers sign in first.'
                : 'Anyone can read every file and download projects without an account, and payments are off.'}
          </p>
          {error && <p className="mt-2 text-sm font-semibold text-danger-ink">{error}</p>}
        </div>
        <button type="button" onClick={toggleOpen} disabled={busy || state === null} className={`btn shrink-0 ${open ? 'btn-secondary' : 'btn-primary'}`}>
          {busy ? 'Saving…' : open ? 'End free access' : 'Start free access'}
        </button>
      </div>

      {open && state && (
        <div className="mt-4 flex flex-col gap-3 border-t border-leaf/30 pt-4 sm:flex-row sm:items-center">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface text-leaf">
            <Icon name="login" size={24} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display font-semibold text-leaf-ink">{state.signIn ? 'Readers sign in first' : 'No sign-in needed'}</p>
            <p className="text-sm text-leaf-ink/80">
              {state.signIn
                ? 'Each page carries the reader’s email, and students get a reading history.'
                : 'Pages show “Next Engineer” instead of an email, and there is no reading history.'}
            </p>
          </div>
          <button type="button" onClick={toggleSignIn} disabled={busy} className="btn btn-secondary shrink-0">
            {state.signIn ? 'Let visitors read without signing in' : 'Ask readers to sign in'}
          </button>
        </div>
      )}
    </section>
  );
}
