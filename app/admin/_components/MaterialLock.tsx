'use client';

import { useEffect, useState } from 'react';
import { getMaterialLock, setMaterialLock } from '@/lib/catalog/admin-client';
import Icon from '@/app/components/Icon';
import { errorText } from './ui';

// Master switch: locks every note, paper and premium file for everyone but owners
export default function MaterialLock() {
  const [locked, setLocked] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    getMaterialLock()
      .then((value) => !cancelled && setLocked(value))
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, []);

  const toggle = async () => {
    if (locked === null) return;
    const next = !locked;
    if (
      next &&
      !confirm('Lock all study material? No one except owners will be able to read or see any notes, papers or premium files until you unlock it.')
    ) {
      return;
    }
    setBusy(true);
    setError('');
    try {
      setLocked(await setMaterialLock(next));
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      className={`mb-6 flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center ${
        locked ? 'border-danger/40 bg-danger-soft' : 'border-line bg-surface shadow-soft'
      }`}
      aria-live="polite"
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
          locked ? 'bg-surface text-danger' : 'bg-leaf-soft text-leaf-ink'
        }`}
      >
        <Icon name={locked ? 'lock' : 'lock_open'} size={26} />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`font-display font-semibold ${locked ? 'text-danger-ink' : 'text-ink'}`}>
          {locked === null ? 'Checking study material access…' : locked ? 'All study material is locked' : 'Study material is open'}
        </p>
        <p className={`text-sm ${locked ? 'text-danger-ink/90' : 'text-ink-muted'}`}>
          {locked
            ? 'No one can read or see notes, papers or premium files. Owners still can, here in the admin panel.'
            : 'Signed-in students can read free material, and pass holders can read premium files.'}
        </p>
        {error && <p className="mt-2 text-sm font-semibold text-danger-ink">{error}</p>}
      </div>
      <button
        type="button"
        onClick={toggle}
        disabled={busy || locked === null}
        className={`btn shrink-0 ${locked ? 'btn-primary' : 'btn-danger'}`}
      >
        <Icon name={locked ? 'lock_open' : 'lock'} size={18} />
        {busy ? 'Saving…' : locked ? 'Unlock all material' : 'Lock all material'}
      </button>
    </section>
  );
}
