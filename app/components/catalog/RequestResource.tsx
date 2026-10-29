'use client';

import { useState } from 'react';
import { saveContactMessage } from '@/lib/firebase/firestore';
import { RESOURCE_TYPES, ResourceType } from '@/lib/catalog/types';
import { useAuth } from '@/app/context/AuthContext';
import Icon from '../Icon';

interface RequestResourceProps {
  subjectId: string;
  subjectCode: string;
  subjectName: string;
}

// "Request a resource": lands in Admin → Messages as a request
export default function RequestResource({ subjectId, subjectCode, subjectName }: RequestResourceProps) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ResourceType>('notes');
  const [detail, setDetail] = useState('');
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const openForm = () => {
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setSent(false);
    setError('');
    setOpen(true);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    setError('');
    const typeLabel = RESOURCE_TYPES.find((t) => t.id === type)?.label ?? type;
    try {
      await saveContactMessage({
        kind: 'request',
        name: name.trim() || 'Student',
        email: email.trim(),
        subject: `Request: ${typeLabel} for ${subjectCode} ${subjectName}`,
        message: [detail.trim() && `Which: ${detail.trim()}`, note.trim()].filter(Boolean).join('\n\n') || '(no details)',
        subjectId,
        subjectCode,
        pageUrl: window.location.pathname,
      });
      setSent(true);
      setDetail('');
      setNote('');
    } catch (err) {
      console.error('Error sending request:', err);
      setError("Your request didn't go through. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <button type="button" onClick={openForm} className="btn btn-secondary btn-sm">
        <Icon name="schedule_send" size={16} /> Request a resource
      </button>

      {open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="request-title">
          <div className="modal relative">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn btn-ghost absolute right-4 top-4 h-9 w-9 rounded-full p-0"
              aria-label="Close"
            >
              <Icon name="close" />
            </button>
            <h2 id="request-title" className="font-display text-xl font-bold text-ink">Request a resource</h2>
            <p className="mb-5 mt-1 text-sm text-ink-muted">
              Missing something for <span className="font-bold text-ink">{subjectCode}</span>? Tell us and we&apos;ll try to add it.
            </p>

            {sent ? (
              <div className="space-y-4">
                <div className="alert alert-success">Thanks! Your request was sent.</div>
                <button type="button" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="request-type" className="label">What do you need?</label>
                    <select id="request-type" value={type} onChange={(e) => setType(e.target.value as ResourceType)} className="input">
                      {RESOURCE_TYPES.map((t) => (
                        <option key={t.id} value={t.id}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="request-detail" className="label">Which one</label>
                    <input
                      id="request-detail"
                      value={detail}
                      onChange={(e) => setDetail(e.target.value)}
                      className="input"
                      placeholder="Unit 3, or 2023-24 paper"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="request-note" className="label">Anything else (optional)</label>
                  <textarea id="request-note" value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="input" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="request-name" className="label">Your name</label>
                    <input id="request-name" value={name} onChange={(e) => setName(e.target.value)} className="input" autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="request-email" className="label">Email (for a reply)</label>
                    <input
                      id="request-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input"
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                {error && <div className="alert alert-error">{error}</div>}
                <button type="submit" disabled={sending} className="btn btn-primary w-full">
                  {sending ? 'Sending…' : 'Send request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
