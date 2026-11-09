'use client';

import { useEffect, useState } from 'react';
import { getOpenAccess, setOpenAccess } from '@/lib/catalog/admin-client';
import Icon from '@/app/components/Icon';
import { errorText } from './ui';

// Free access: everything open to everyone, with no sign-in and no payments. Turning it off
// brings back sign-in, premium files and passes exactly as they were.
export default function FreeAccessSwitch() {
  const [open, setOpen] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    getOpenAccess()
      .then((value) => !cancelled && setOpen(value))
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, []);

  const toggle = async () => {
    if (open === null) return;
    const next = !open;
    const question = next
      ? 'Start free access? Anyone can read every file and download projects without an account, including premium material, and payments stop.'
      : 'End free access? Visitors will need to sign in again, and premium files and payments come back.';
    if (!confirm(question)) return;
    setBusy(true);
    setError('');
    try {
      setOpen(await setOpenAccess(next));
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      className={`mb-6 flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center ${
        open ? 'border-leaf/40 bg-leaf-soft' : 'border-line bg-surface shadow-soft'
      }`}
      aria-live="polite"
    >
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${open ? 'bg-surface text-leaf' : 'bg-surface-strong text-ink-muted'}`}>
        <Icon name="lock_open" size={26} />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`font-display font-semibold ${open ? 'text-leaf-ink' : 'text-ink'}`}>
          {open === null ? 'Checking free access…' : open ? 'Free access is on' : 'Free access is off'}
        </p>
        <p className={`text-sm ${open ? 'text-leaf-ink/80' : 'text-ink-muted'}`}>
          {open
            ? 'Anyone can read every file and download projects without an account, and payments are off.'
            : 'Students sign in to read, and premium files need a pass.'}
        </p>
        {error && <p className="mt-2 text-sm font-semibold text-danger-ink">{error}</p>}
      </div>
      <button type="button" onClick={toggle} disabled={busy || open === null} className={`btn shrink-0 ${open ? 'btn-secondary' : 'btn-primary'}`}>
        {busy ? 'Saving…' : open ? 'End free access' : 'Start free access'}
      </button>
    </section>
  );
}
