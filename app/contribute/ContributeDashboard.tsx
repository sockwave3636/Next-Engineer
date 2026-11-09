'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';
import Icon from '../components/Icon';
import { getMyContributions } from '@/lib/contributions/client';
import { ContributionStatus, MAX_WAITING_FILES, MONTHLY_CREDIT_CAP, MyContributions, REDEEM_COST } from '@/lib/contributions/rules';

const STATUS: Record<ContributionStatus, { label: string; badge: string }> = {
  uploading: { label: 'Uploading', badge: 'badge-muted' },
  pending: { label: 'Waiting to be checked', badge: 'badge-brand' },
  approved: { label: 'Accepted', badge: 'badge-leaf' },
  rejected: { label: 'Not accepted', badge: 'badge-sun' },
  removed: { label: 'Removed', badge: 'badge-sun' },
};

// A signed-in student's credits, any penalty, and the files they've shared
export default function ContributeDashboard() {
  const { user, loading } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const [mine, setMine] = useState<MyContributions | null>(null);
  const [error, setError] = useState('');
  const uid = user?.uid;

  useEffect(() => {
    if (!uid) return;
    let cancelled = false;
    getMyContributions().then(
      (result) => !cancelled && setMine(result),
      (err) => !cancelled && setError(err instanceof Error ? err.message : 'Could not load your credits.')
    );
    return () => {
      cancelled = true;
    };
  }, [uid]);

  if (loading) return null;

  if (!user) {
    return (
      <section className="card card-pad flex flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name="toll" size={26} />
        </span>
        <p className="mt-3 font-display text-lg font-semibold text-ink">Sign in to see your credits</p>
        <button type="button" onClick={() => openAuthPrompt({ reason: 'Sign in to share files and earn credits' })} className="btn btn-primary mt-4">
          Sign in
        </button>
      </section>
    );
  }

  if (error) return <div className="alert alert-error">{error}</div>;
  if (!mine) return <p className="text-sm text-ink-muted">Loading your credits…</p>;

  return (
    <section className="space-y-5" aria-label="Your credits">
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Your credits" value={String(mine.credits)} note={`${REDEEM_COST} unlock a subject`} />
        <Stat label="Earned this month" value={`${mine.earnedThisMonth} / ${MONTHLY_CREDIT_CAP}`} note="Monthly limit" />
        <Stat label="Waiting to be checked" value={`${mine.waiting} / ${MAX_WAITING_FILES}`} note="Files at a time" />
      </div>

      {mine.uploadBlocked && <div className="alert alert-error">{mine.uploadBlocked}</div>}
      {!mine.uploadBlocked && mine.strikes > 0 && (
        <div className="alert border-sun/40 bg-sun-soft font-normal text-sun-ink">
          You have {mine.strikes} {mine.strikes === 1 ? 'warning' : 'strikes'} for a fake or copied file. Another one restricts your sharing.
        </div>
      )}

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">Files you&apos;ve shared</h2>
        {mine.files.length === 0 ? (
          <p className="mt-2 text-sm text-ink-muted">Nothing yet. Open a subject and press “Share a file”.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {mine.files.map((file) => (
              <li key={file.id} className="card flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="font-semibold text-ink">{file.title}</p>
                  <p className="text-xs text-ink-muted">
                    {file.subjectCode} · {new Date(file.createdAt).toLocaleDateString('en-IN')}
                  </p>
                  {file.reason && <p className="mt-1 text-sm text-ink-muted">{file.reason}</p>}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {file.creditsAwarded > 0 && <span className="font-mono text-sm font-semibold text-leaf-ink">+{file.creditsAwarded}</span>}
                  <span className={`badge ${STATUS[file.status].badge}`}>{STATUS[file.status].label}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</p>
      <p className="mt-1 font-display text-3xl font-extrabold text-ink">{value}</p>
      <p className="mt-0.5 text-xs text-ink-muted">{note}</p>
    </div>
  );
}
