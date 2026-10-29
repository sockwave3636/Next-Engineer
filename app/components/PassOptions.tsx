'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PassScope, PassSettings, Subject, formatRupees, passOnSale, scopeKey } from '@/lib/catalog/types';
import { buyPass, CheckoutDismissedError } from '@/lib/premium-client';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';
import { usePasses } from '../context/PassContext';
import Icon from './Icon';

export interface PassOption {
  scope: PassScope;
  title: string; // "This subject" / "All of B.Tech CSE"
  description: string;
  pass: PassSettings;
}

interface PassOptionsProps {
  options: PassOption[];
  // On a subject page, access also counts passes that cover the subject indirectly
  subject?: Pick<Subject, 'id' | 'programId' | 'offerings'>;
}

const formatDate = (date: Date) => date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function PassOptions({ options, subject }: PassOptionsProps) {
  const { user } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const { hasAccess, activeUntil } = usePasses();
  const [buyingKey, setBuyingKey] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [justBought, setJustBought] = useState(false);

  const available = options.filter((o) => passOnSale(o.pass));
  if (available.length === 0) return null;

  const activeOption = available.find((o) => activeUntil(scopeKey(o.scope)));
  const unlocked = user?.isOwner || (subject ? hasAccess(subject) : !!activeOption);

  if (unlocked) {
    const until = activeOption ? activeUntil(scopeKey(activeOption.scope)) : null;
    return (
      <div id="premium-pass" className="flex items-center gap-4 rounded-2xl border border-leaf/30 bg-leaf-soft p-5">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface text-leaf">
          <Icon name={justBought ? 'workspace_premium' : 'check_circle'} size={28} filled />
        </span>
        <div>
          <p className="font-display font-semibold text-leaf-ink">
            {justBought ? 'Payment received. Premium is unlocked!' : 'Premium is unlocked'}
          </p>
          <p className="text-sm text-leaf-ink/80">
            {user?.isOwner
              ? 'Owner account: every premium resource is open.'
              : until
                ? `${activeOption?.title} · valid until ${formatDate(until)}`
                : 'Your semester pass covers this subject.'}
          </p>
        </div>
      </div>
    );
  }

  const handleBuy = async (option: PassOption) => {
    if (!user) {
      openAuthPrompt({ reason: 'Sign in to unlock premium' });
      return;
    }
    setError('');
    setBuyingKey(scopeKey(option.scope));
    try {
      await buyPass(option.scope, { name: user.name, email: user.email });
      setJustBought(true);
    } catch (err) {
      if (!(err instanceof CheckoutDismissedError)) {
        setError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
      }
    } finally {
      setBuyingKey(null);
    }
  };

  // Highlight the wider pass when both are on sale
  const bestValue = available.length > 1 ? available.reduce((a, b) => (b.pass.price > a.pass.price ? b : a)) : null;

  return (
    <div id="premium-pass" className="card p-5 sm:p-6">
      <span className="badge badge-sun">★ Premium</span>
      <h2 className="mt-2 font-display text-xl font-semibold text-ink">Unlock premium notes and books</h2>
      <p className="mt-1 text-sm text-ink-muted">Read every premium PDF online on any device. Pay once with UPI or card.</p>

      <div className={`mt-6 grid gap-4 ${available.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {available.map((option) => {
          const key = scopeKey(option.scope);
          const highlighted = option === bestValue;
          return (
            <div
              key={key}
              className={`relative flex flex-col rounded-2xl p-5 ${highlighted ? 'border-2 border-brand bg-surface shadow-lift' : 'border border-line bg-surface'}`}
            >
              {highlighted && (
                <span className="absolute -top-3 left-5 rounded-full bg-sun px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-on-sun">
                  ★ Best value
                </span>
              )}
              <p className="font-display font-semibold text-ink">{option.title}</p>
              <p className="mt-1 flex-1 text-sm text-ink-muted">{option.description}</p>
              <p className="mt-4 font-display text-[1.75rem] font-extrabold leading-8 tracking-tight text-ink">
                {formatRupees(option.pass.price)}
                <span className="ml-1 font-sans text-sm font-medium text-ink-muted">/ {option.pass.durationDays} days</span>
              </p>
              <button
                onClick={() => handleBuy(option)}
                disabled={buyingKey !== null}
                className={`btn mt-4 w-full ${highlighted || available.length === 1 ? 'btn-amber' : 'btn-secondary'}`}
              >
                <Icon name="lock_open" size={18} />
                {buyingKey === key ? 'Processing…' : 'Unlock'}
              </button>
            </div>
          );
        })}
      </div>
      {error && <div className="alert alert-error mt-4">{error}</div>}
      <p className="mt-4 text-xs text-ink-muted">
        One-time payment, no auto-renewal. By unlocking you agree to the{' '}
        <Link href="/terms" className="link">Terms</Link> and{' '}
        <Link href="/refund-policy" className="link">Refund and Cancellation Policy</Link>.
      </p>
    </div>
  );
}
