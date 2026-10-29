'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { usePasses } from '../context/PassContext';
import type { UserPass } from '@/lib/firebase/firestore';
import { loadSearchIndex } from '@/lib/catalog/search-index-client';
import { semesterPath } from '@/lib/catalog/routes';
import { Program, subjectIdFromCode } from '@/lib/catalog/types';
import Icon from './Icon';

type ProgramLink = Pick<Program, 'id' | 'hasBranches'>;

export interface PassCard {
  key: string;
  kind: 'semester' | 'subject';
  // Written by the server when the pass is granted, e.g. "B.Tech CSE · Semester 3"
  label: string;
  expiresAt: number;
  active: boolean;
  // Semester or subject page; null while a subject's page is being looked up
  href: string | null;
}

const formatDate = (millis: number) =>
  new Date(millis).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

// Pass ids are scope keys: semester:{program}:{branch}:{semester} or subject:{subjectId}
function toCard(
  key: string,
  pass: UserPass,
  active: boolean,
  programs: ProgramLink[],
  subjectUrls: Record<string, string> | null
): PassCard | null {
  const [type, ...parts] = key.split(':');
  const expiresAt = pass.expiresAt?.toMillis?.() ?? 0;
  if (type === 'semester') {
    const [programId, branchId, semesterText] = parts;
    const program = programs.find((p) => p.id === programId);
    const semester = Number(semesterText);
    const href = program && branchId && semester ? semesterPath(program, branchId, semester) : null;
    return { key, kind: 'semester', label: pass.label || `Semester ${semesterText}`, expiresAt, active, href };
  }
  if (type === 'subject' && parts[0]) {
    return { key, kind: 'subject', label: pass.label || parts[0].toUpperCase(), expiresAt, active, href: subjectUrls?.[parts[0]] ?? null };
  }
  return null;
}

// A signed-in student's semester and subject passes at the top of the home page, so they can go
// straight back to what they bought instead of searching for it each time
export default function MyPasses({ programs }: { programs: ProgramLink[] }) {
  const { user } = useAuth();
  const { passes, activeUntil } = usePasses();
  // subjectId → subject page, fetched only when the student has a subject pass
  const [subjectUrls, setSubjectUrls] = useState<Record<string, string> | null>(null);
  const hasSubjectPass = Object.keys(passes).some((key) => key.startsWith('subject:'));

  useEffect(() => {
    if (!hasSubjectPass) return;
    let cancelled = false;
    loadSearchIndex().then((entries) => {
      if (!cancelled) setSubjectUrls(Object.fromEntries(entries.map((entry) => [subjectIdFromCode(entry.code), entry.url])));
    });
    return () => {
      cancelled = true;
    };
  }, [hasSubjectPass]);

  if (!user) return null;
  const cards = Object.entries(passes)
    .map(([key, pass]) => toCard(key, pass, activeUntil(key) !== null, programs, subjectUrls))
    .filter((card): card is PassCard => card !== null)
    // Active passes first, then the most recently expired
    .sort((a, b) => Number(b.active) - Number(a.active) || b.expiresAt - a.expiresAt);
  if (cards.length === 0) return null;

  return <PassList name={user.name} cards={cards} />;
}

export function PassList({ name, cards }: { name: string; cards: PassCard[] }) {
  return (
    <section id="my-passes" className="scroll-mt-28" aria-labelledby="my-passes-title">
      <div className="mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
        <div>
          <span className="kicker">Welcome back, {name}</span>
          <h2 id="my-passes-title" className="section-title">Your passes</h2>
        </div>
        <p className="text-sm text-ink-muted">Everything you&apos;ve unlocked, one tap away.</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <li key={card.key} className={`card flex flex-col p-5 ${card.active ? '' : 'opacity-80'}`}>
            <div className="flex items-start gap-3">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
                  card.active ? 'bg-sun-soft text-sun-ink' : 'bg-surface-strong text-ink-faint'
                }`}
              >
                <Icon name={card.kind === 'semester' ? 'layers' : 'menu_book'} size={22} />
              </span>
              <div className="min-w-0">
                <span className={`badge ${card.active ? 'badge-sun' : 'badge-muted'}`}>
                  {card.kind === 'semester' ? 'Semester pass' : 'Subject pass'}
                </span>
                <p className="mt-1 font-display font-semibold leading-snug text-ink">{card.label}</p>
              </div>
            </div>
            <p className={`mt-3 flex flex-1 items-start gap-1.5 text-xs ${card.active ? 'text-ink-muted' : 'text-danger'}`}>
              <Icon name="event" size={16} />
              {card.active ? `Valid until ${formatDate(card.expiresAt)}` : `Expired on ${formatDate(card.expiresAt)}`}
            </p>
            {card.href ? (
              <Link href={card.href} className={`btn mt-4 w-full ${card.active ? 'btn-primary' : 'btn-secondary'}`}>
                {card.active ? (
                  <>
                    Open <Icon name="arrow_forward" size={18} />
                  </>
                ) : (
                  'Renew'
                )}
              </Link>
            ) : card.kind === 'subject' ? (
              <span className="btn btn-secondary mt-4 w-full opacity-60">Loading…</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
