"use client";

import { useState } from 'react';
import { saveContactMessage } from '@/lib/firebase/firestore';
import PageShell from '../components/PageShell';
import PageIntro from '../components/PageIntro';
import Icon, { IconName } from '../components/Icon';

const REASONS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'support_agent', title: 'Support', text: 'Questions about the platform or a note that will not open.' },
  { icon: 'lightbulb', title: 'Feedback', text: 'Ideas and suggestions to make Next Engineer better.' },
  { icon: 'handshake', title: 'Partnership', text: 'Mention it in the subject and we will get back to you.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      await saveContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error saving message:', err);
      setError("Your message didn't go through. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageShell>
      <div className="container-page max-w-5xl py-12">
        <PageIntro
          eyebrow="Contact us"
          title="We'd love to hear from you"
          description="Whether you have a question, feedback, or a suggestion, send us a message."
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <form onSubmit={handleSubmit} className="card card-pad space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="label">Subject</label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="input"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="label">Message</label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input resize-y"
                placeholder="Write your message"
              />
            </div>

            {submitted && (
              <div className="alert alert-success" role="status">
                Thanks for your message! We&apos;ll get back to you soon.
              </div>
            )}
            {error && <div className="alert alert-error">{error}</div>}

            <button type="submit" disabled={sending} className="btn btn-primary btn-lg w-full sm:w-auto">
              {sending ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <aside className="space-y-4">
            {REASONS.map((reason) => (
              <div key={reason.title} className="card flex gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-ink">
                  <Icon name={reason.icon} size={22} />
                </span>
                <div>
                  <p className="font-extrabold text-ink">{reason.title}</p>
                  <p className="text-sm text-ink-muted">{reason.text}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
