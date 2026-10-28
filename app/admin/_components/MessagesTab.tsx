'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ContactMessage, deleteContactMessage, getContactMessages, markMessageAsRead } from '@/lib/firebase/firestore';
import { EmptyState, FloatingError, SectionHeader, errorText } from './ui';

export default function MessagesTab({ onUnreadChange }: { onUnreadChange: (count: number) => void }) {
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);
  const [filter, setFilter] = useState<'all' | 'request' | 'contact'>('all');
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    try {
      const list = await getContactMessages();
      setMessages(list);
      onUnreadChange(list.filter((m) => !m.read).length);
    } catch (err) {
      setError(errorText(err));
    }
  }, [onUnreadChange]);

  useEffect(() => {
    let cancelled = false;
    getContactMessages()
      .then((list) => {
        if (cancelled) return;
        setMessages(list);
        onUnreadChange(list.filter((m) => !m.read).length);
      })
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, [onUnreadChange]);

  const act = async (action: () => Promise<void>) => {
    try {
      await action();
      await load();
    } catch (err) {
      setError(errorText(err));
    }
  };

  const kindOf = (m: ContactMessage) => (m.kind === 'request' ? 'request' : 'contact');
  const visible = (messages ?? []).filter((m) => filter === 'all' || kindOf(m) === filter);
  const requestCount = (messages ?? []).filter((m) => kindOf(m) === 'request').length;

  return (
    <section>
      <SectionHeader
        title="Messages"
        description="Contact form messages and resource requests from subject pages."
        action={<button onClick={load} className="btn btn-secondary">Refresh</button>}
      />
      <FloatingError message={error} onDismiss={() => setError('')} />

      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Filter messages">
        {(
          [
            ['all', 'All'],
            ['request', `Resource requests (${requestCount})`],
            ['contact', 'Contact form'],
          ] as const
        ).map(([id, label]) => (
          <button key={id} onClick={() => setFilter(id)} className={`btn btn-sm ${filter === id ? 'btn-soft' : 'btn-ghost'}`}>
            {label}
          </button>
        ))}
      </div>

      {messages === null ? (
        <p className="text-ink-muted">Loading messages…</p>
      ) : visible.length === 0 ? (
        <EmptyState icon="✉️" title="No messages" text="New messages and resource requests show up here." />
      ) : (
        <div className="space-y-3">
          {visible.map((message) => (
            <div key={message.id} className={`card p-5 ${!message.read ? 'border-brand/40' : ''}`}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {kindOf(message) === 'request' && <span className="badge badge-sun">🙋 Request</span>}
                    <h3 className="font-extrabold text-ink">{message.subject}</h3>
                    {!message.read && <span className="badge badge-brand">New</span>}
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">
                    {message.name}
                    {message.email && (
                      <>
                        {' · '}
                        <a href={`mailto:${message.email}`} className="link">{message.email}</a>
                      </>
                    )}
                    {' · '}
                    {message.createdAt?.toMillis ? new Date(message.createdAt.toMillis()).toLocaleString('en-IN') : ''}
                  </p>
                  {message.pageUrl && (
                    <Link href={message.pageUrl} className="link text-sm" target="_blank">
                      Open {message.subjectCode || 'subject'} page →
                    </Link>
                  )}
                </div>
                <div className="flex shrink-0 gap-2">
                  {!message.read && (
                    <button onClick={() => act(() => markMessageAsRead(message.id))} className="btn btn-soft btn-sm">
                      Mark as read
                    </button>
                  )}
                  <button
                    onClick={() => confirm('Delete this message?') && act(() => deleteContactMessage(message.id))}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-4 whitespace-pre-wrap border-t border-line pt-4 text-ink">{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
