'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { useAuthPrompt } from '@/app/context/AuthPromptContext';
import { shareFile } from '@/lib/contributions/client';
import { CONTRIBUTION_TYPES, CREDITS_PER_FILE, ContributionType } from '@/lib/contributions/rules';
import type { Subject } from '@/lib/catalog/types';
import Icon from '../Icon';

// "Share a file" on a subject page: goes to a private queue for an owner to check by hand
export default function ShareResource({ subject }: { subject: Pick<Subject, 'id' | 'code' | 'name' | 'unitTitles'> }) {
  const { user, sendVerificationEmail } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ContributionType>('pyq');
  const [year, setYear] = useState('');
  const [session, setSession] = useState<'odd' | 'even'>('odd');
  const [unit, setUnit] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [declared, setDeclared] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const openForm = () => {
    if (!user) {
      openAuthPrompt({ reason: 'Sign in to share a file and earn credits' });
      return;
    }
    setSent(false);
    setError('');
    setFile(null);
    setDeclared(false);
    setOpen(true);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setError('Choose a PDF file.');
      return;
    }
    setError('');
    setProgress(0);
    try {
      await shareFile(
        {
          subjectId: subject.id,
          type,
          title: '',
          unit: type === 'notes' && unit ? Number(unit) : null,
          year: type === 'pyq' ? year.trim() : null,
          session: type === 'pyq' ? session : null,
        },
        file,
        setProgress
      );
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'The upload failed. Please try again.');
    } finally {
      setProgress(null);
    }
  };

  const sendLink = async () => {
    setError('');
    try {
      await sendVerificationEmail();
      setLinkSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send the email.');
    }
  };

  return (
    <>
      <button type="button" onClick={openForm} className="btn btn-soft btn-sm">
        <Icon name="upload_file" size={16} /> Share a file
      </button>

      {open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="share-title">
          <div className="modal relative">
            <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost absolute right-4 top-4 h-9 w-9 rounded-full p-0" aria-label="Close">
              <Icon name="close" />
            </button>
            <h2 id="share-title" className="font-display text-xl font-bold text-ink">Share a file, earn credits</h2>
            <p className="mb-5 mt-1 text-sm text-ink-muted">
              For <span className="font-bold text-ink">{subject.code}</span>. Every accepted file earns about {CREDITS_PER_FILE} credits.{' '}
              <Link href="/contribute" className="link">How it works</Link>
            </p>

            {user && !user.emailVerified ? (
              <div className="space-y-4">
                <div className="alert border-line bg-surface-muted font-normal text-ink-muted">
                  Confirm your email address first, so each student has one account. Use the link we emailed you, then sign out and back in.
                </div>
                {error && <div className="alert alert-error">{error}</div>}
                <button type="button" onClick={sendLink} disabled={linkSent} className="btn btn-secondary w-full">
                  {linkSent ? 'Sent. Check your inbox and spam folder' : 'Send the link again'}
                </button>
              </div>
            ) : sent ? (
              <div className="space-y-4">
                <div className="alert alert-success">Thanks! We&apos;ll check it by hand. Your credits appear if it&apos;s accepted.</div>
                <Link href="/contribute" className="btn btn-primary w-full">See your credits</Link>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label htmlFor="share-type" className="label">What is it?</label>
                  <select id="share-type" value={type} onChange={(e) => setType(e.target.value as ContributionType)} className="input">
                    {CONTRIBUTION_TYPES.map((t) => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </div>

                {type === 'pyq' ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="share-year" className="label">Academic year</label>
                      <input id="share-year" value={year} onChange={(e) => setYear(e.target.value)} className="input" placeholder="2024-25" pattern="\d{4}-\d{2}" title="Like 2024-25" required />
                    </div>
                    <div>
                      <label htmlFor="share-session" className="label">Semester</label>
                      <select id="share-session" value={session} onChange={(e) => setSession(e.target.value as 'odd' | 'even')} className="input">
                        <option value="odd">Odd</option>
                        <option value="even">Even</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="share-unit" className="label">Unit</label>
                    <select id="share-unit" value={unit} onChange={(e) => setUnit(e.target.value)} className="input">
                      <option value="">Several units</option>
                      {subject.unitTitles.map((title, index) => (
                        <option key={index} value={index + 1}>Unit {index + 1}: {title}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="share-file" className="label">PDF file, up to 20 MB</label>
                  <input id="share-file" type="file" accept="application/pdf,.pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="input" required />
                </div>

                <label className="flex items-start gap-2 text-sm text-ink">
                  <input type="checkbox" className="mt-1" checked={declared} onChange={(e) => setDeclared(e.target.checked)} required />
                  <span>
                    This is an AKTU question paper or my own handwritten notes, not a textbook, coaching material, another website&apos;s file or someone else&apos;s notes. I accept the{' '}
                    <Link href="/terms#sharing" className="link" target="_blank">sharing rules</Link>. Fake or copied files can get me banned from sharing.
                  </span>
                </label>

                {error && <div className="alert alert-error">{error}</div>}
                <button type="submit" disabled={progress !== null} className="btn btn-primary w-full">
                  {progress === null ? 'Send for checking' : `Uploading… ${Math.round(progress * 100)}%`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
