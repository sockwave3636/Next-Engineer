'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { getMyContributions, redeemCredits } from '@/lib/contributions/client';
import { REDEEM_COST, REDEEM_DAYS } from '@/lib/contributions/rules';
import Icon from './Icon';

// Under a subject's pass prices: spend credits instead of paying, or how to earn them.
// Once the server grants the pass, the live pass listener swaps the box to "unlocked".
export default function CreditRedeem({ subjectId }: { subjectId: string }) {
  const { user } = useAuth();
  const [credits, setCredits] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const uid = user?.uid;

  useEffect(() => {
    if (!uid) return;
    let cancelled = false;
    getMyContributions()
      .then((mine) => !cancelled && setCredits(mine.credits))
      .catch(() => {
        // Paying still works; the box just falls back to the "earn credits" line
      });
    return () => {
      cancelled = true;
    };
  }, [uid]);

  const redeem = async () => {
    setError('');
    setBusy(true);
    try {
      setCredits((await redeemCredits(subjectId)).credits);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  if (uid && credits !== null && credits >= REDEEM_COST) {
    return (
      <div className="mt-4 flex flex-col gap-3 rounded-xl bg-leaf-soft p-4 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-leaf-ink">
          You have <strong>{credits} credits</strong>. Use {REDEEM_COST} to unlock this subject for {REDEEM_DAYS} days.
        </p>
        <button type="button" onClick={redeem} disabled={busy} className="btn btn-leaf shrink-0">
          <Icon name="toll" size={18} /> {busy ? 'Unlocking…' : `Use ${REDEEM_COST} credits`}
        </button>
        {error && <div className="alert alert-error sm:basis-full">{error}</div>}
      </div>
    );
  }

  return (
    <p className="mt-4 flex items-start gap-2 text-sm text-ink-muted">
      <Icon name="toll" size={18} className="mt-px text-brand" />
      <span>
        Can&apos;t pay right now?{' '}
        <Link href="/contribute" className="link">
          Share papers or your own notes to earn credits
        </Link>
        . {REDEEM_COST} credits unlock a subject for {REDEEM_DAYS} days.
      </span>
    </p>
  );
}
