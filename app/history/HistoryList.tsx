'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';
import Icon from '../components/Icon';
import { clearHistory, getHistory, removeFromHistory } from '@/lib/history/client';
import type { HistoryEntry } from '@/lib/history/types';

const errorText = (error: unknown) => (error instanceof Error ? error.message : 'Something went wrong. Please try again.');

// "Today", "Yesterday" or a date, for grouping the list
function dayLabel(iso: string): string {
  const day = new Date(iso);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  if (day.toDateString() === today.toDateString()) return 'Today';
  if (day.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return day.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: day.getFullYear() === today.getFullYear() ? undefined : 'numeric' });
}

const timeLabel = (iso: string) => new Date(iso).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });

// The signed-in student's reading history, newest first, with Remove and Clear all
export default function HistoryList() {
  const { user, loading } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const [entries, setEntries] = useState<HistoryEntry[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState('');
  const uid = user?.uid;

  useEffect(() => {
    if (!uid) return;
    let cancelled = false;
    setEntries(null);
    getHistory().then(
      (result) => !cancelled && setEntries(result),
      (err) => !cancelled && setError(errorText(err))
    );
    return () => {
      cancelled = true;
    };
  }, [uid]);

  const remove = async (entry: HistoryEntry) => {
    setBusy(entry.id);
    setError('');
    try {
      await removeFromHistory(entry.id);
      setEntries((list) => list?.filter((e) => e.id !== entry.id) ?? null);
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(null);
    }
  };

  const clearAll = async () => {
    if (!confirm('Clear your whole reading history? This can’t be undone.')) return;
    setBusy('all');
    setError('');
    try {
      await clearHistory();
      setEntries([]);
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(null);
    }
  };

  if (loading) return null;

  if (!user) {
    return (
      <section className="card card-pad flex flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name="history" size={26} />
        </span>
        <p className="mt-3 font-display text-lg font-semibold text-ink">Sign in to see your reading history</p>
        <p className="mt-1 max-w-md text-sm text-ink-muted">Once you sign in, every note and paper you open is saved here.</p>
        <button type="button" onClick={() => openAuthPrompt({ reason: 'Sign in to see your reading history' })} className="btn btn-primary mt-4">
          Sign in
        </button>
      </section>
    );
  }

  if (!entries) {
    return error ? <div className="alert alert-error">{error}</div> : <p className="text-sm text-ink-muted">Loading your history…</p>;
  }

  if (entries.length === 0) {
    return (
      <section className="card card-pad flex flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface-muted text-ink-muted">
          <Icon name="history" size={26} />
        </span>
        <p className="mt-3 font-display text-lg font-semibold text-ink">Nothing here yet</p>
        <p className="mt-1 max-w-md text-sm text-ink-muted">Open any note, paper or project guide and it will show up here.</p>
        <Link href="/#programs" className="btn btn-primary mt-4">
          Find your subject <Icon name="arrow_forward" size={18} />
        </Link>
      </section>
    );
  }

  const days = Array.from(new Set(entries.map((e) => dayLabel(e.openedAt))));

  return (
    <section aria-label="Files you opened">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-muted">
          {entries.length} {entries.length === 1 ? 'file' : 'files'}
        </p>
        <button type="button" onClick={clearAll} disabled={busy !== null} className="btn btn-ghost btn-sm">
          <Icon name="delete" size={16} /> {busy === 'all' ? 'Clearing…' : 'Clear all'}
        </button>
      </div>

      {error && <div className="alert alert-error mb-4">{error}</div>}

      <div className="space-y-6">
        {days.map((day) => (
          <div key={day}>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ink-faint">{day}</p>
            <ul className="space-y-2">
              {entries
                .filter((e) => dayLabel(e.openedAt) === day)
                .map((entry) => (
                  <li key={entry.id} className="card flex items-center gap-3 p-3 sm:p-4">
                    <Link href={entry.path} className="group flex min-w-0 flex-1 items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-ink">
                        <Icon name={entry.kind === 'project' ? 'code_blocks' : 'description'} size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-semibold text-ink group-hover:text-brand">{entry.title}</span>
                        <span className="block truncate text-xs text-ink-muted">
                          {entry.label} · {entry.context} · {timeLabel(entry.openedAt)}
                        </span>
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => remove(entry)}
                      disabled={busy !== null}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink-muted transition hover:bg-surface-muted hover:text-ink disabled:opacity-50"
                      aria-label={`Remove ${entry.title} from history`}
                      title="Remove from history"
                    >
                      <Icon name="close" size={18} />
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
