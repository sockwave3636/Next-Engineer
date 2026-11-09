'use client';

import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { saveContactMessage } from '@/lib/firebase/firestore';
import Icon from '../Icon';

const REASONS = ['Copied from a book, website or someone else', 'Fake, blank or the wrong file', 'Adverts, scam links or QR codes', 'Personal details of someone'];

interface ReportResourceProps {
  resourceId: string;
  title: string;
  subjectId: string;
  subjectCode: string;
}

// "Report" on a file shared by a student: lands in Admin → Messages, where an owner can take it down
export default function ReportResource({ resourceId, title, subjectId, subjectCode }: ReportResourceProps) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState(REASONS[0]);
  const [detail, setDetail] = useState('');
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const openForm = () => {
    setEmail(user?.email ?? '');
    setSent(false);
    setError('');
    setOpen(true);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    setError('');
    try {
      await saveContactMessage({
        kind: 'request',
        name: user?.name || 'Student',
        email: email.trim(),
        subject: `Report: ${title} (${subjectCode})`,
        message: [`Reason: ${reason}`, detail.trim(), `File id: ${resourceId}`].filter(Boolean).join('\n\n'),
        subjectId,
        subjectCode,
        pageUrl: window.location.pathname,
      });
      setSent(true);
      setDetail('');
    } catch (err) {
      console.error('Error sending report:', err);
      setError("Your report didn't go through. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <button type="button" onClick={openForm} className="btn btn-ghost btn-sm" title="Report this file">
        <Icon name="flag" size={16} /> Report
      </button>
      {open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="report-title">
          <div className="modal relative">
            <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost absolute right-4 top-4 h-9 w-9 rounded-full p-0" aria-label="Close">
              <Icon name="close" />
            </button>
            <h2 id="report-title" className="font-display text-xl font-bold text-ink">Report this file</h2>
            <p className="mb-5 mt-1 text-sm text-ink-muted">{title}</p>
            {sent ? (
              <div className="space-y-4">
                <div className="alert alert-success">Thanks. We&apos;ll look at it and remove it if needed.</div>
                <button type="button" onClick={() => setOpen(false)} className="btn btn-primary w-full">Done</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label htmlFor="report-reason" className="label">What&apos;s wrong?</label>
                  <select id="report-reason" value={reason} onChange={(e) => setReason(e.target.value)} className="input">
                    {REASONS.map((text) => (
                      <option key={text}>{text}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="report-detail" className="label">Details (optional)</label>
                  <textarea id="report-detail" rows={3} maxLength={1000} value={detail} onChange={(e) => setDetail(e.target.value)} className="input" />
                </div>
                <div>
                  <label htmlFor="report-email" className="label">Your email (for a reply)</label>
                  <input id="report-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
                </div>
                {error && <div className="alert alert-error">{error}</div>}
                <button type="submit" disabled={sending} className="btn btn-danger w-full">
                  {sending ? 'Sending…' : 'Send report'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
