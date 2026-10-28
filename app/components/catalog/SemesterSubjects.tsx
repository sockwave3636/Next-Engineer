'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon, { IconName } from '../Icon';
import type { SubjectKind } from '@/lib/catalog/types';

export interface SubjectCardData {
  id: string;
  href: string;
  code: string;
  name: string;
  credits: number;
  kind: SubjectKind;
  description?: string;
  unitTitles: string[];
  notes: number;
  pyqs: number;
  important: number;
  premium: number;
}

export interface SubjectSection {
  id: string;
  title: string;
  icon: IconName;
  // Shown next to the title, e.g. "3 subjects · 11 credits"
  summary: string;
  subjects: SubjectCardData[];
}

// Top accent per subject type, as in the Stitch semester design
const ACCENT: Record<SubjectKind, string> = {
  theory: 'bg-brand',
  elective: 'bg-sun',
  practical: 'bg-leaf',
  project: 'bg-berry-ink',
};

function SubjectCard({ subject }: { subject: SubjectCardData }) {
  const hasMaterial = subject.notes + subject.pyqs + subject.important > 0;
  return (
    <Link href={subject.href} className="card card-hover group flex flex-col overflow-hidden">
      <span className={`h-1 ${ACCENT[subject.kind]}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="code">{subject.code}</span>
          {subject.credits > 0 && (
            <span className="badge badge-leaf">
              {subject.credits} {subject.credits === 1 ? 'credit' : 'credits'}
            </span>
          )}
          {subject.premium > 0 && <span className="badge badge-sun">Premium</span>}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink group-hover:text-brand">{subject.name}</h3>
        {subject.description && <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{subject.description}</p>}

        {subject.unitTitles.length > 0 && (
          <div className="mt-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">Units</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {subject.unitTitles.map((title, index) => (
                <span key={index} className="rounded-md bg-surface-strong px-2 py-0.5 text-xs text-ink-muted">
                  {title}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4">
          {hasMaterial ? (
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-surface-muted p-3 text-center">
              {[
                { icon: 'description' as const, value: subject.notes, label: 'Notes' },
                { icon: 'history_edu' as const, value: subject.pyqs, label: 'PYQs' },
                { icon: 'star' as const, value: subject.important, label: 'Key Qs' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-0.5">
                  <Icon name={stat.icon} size={18} className={stat.value > 0 ? 'text-brand' : 'text-ink-faint'} />
                  <span className="font-mono text-sm font-semibold text-ink">{stat.value}</span>
                  <span className="text-[11px] text-ink-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-lg bg-surface-muted px-3 py-2.5 text-xs text-ink-muted">
              Material coming soon. Request it from the subject page.
            </p>
          )}
          <span className="btn btn-primary mt-3 w-full">
            Open subject <Icon name="arrow_forward" size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function SemesterSubjects({ sections }: { sections: SubjectSection[] }) {
  const [filter, setFilter] = useState<string>('all');
  const total = sections.reduce((sum, s) => sum + s.subjects.length, 0);
  const shown = filter === 'all' ? sections : sections.filter((s) => s.id === filter);

  return (
    <>
      <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter subjects">
        <button type="button" className="chip" data-active={filter === 'all'} onClick={() => setFilter('all')}>
          All subjects <span className="font-mono opacity-80">{total}</span>
        </button>
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className="chip"
            data-active={filter === section.id}
            onClick={() => setFilter(section.id)}
          >
            {section.title} <span className="font-mono opacity-80">{section.subjects.length}</span>
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {shown.map((section) => (
          <section key={section.id} aria-labelledby={`section-${section.id}`}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Icon name={section.icon} size={22} className="text-brand" />
              <h2 id={`section-${section.id}`} className="font-display text-xl font-semibold text-ink">
                {section.title}
              </h2>
              <span className="badge badge-muted">{section.summary}</span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
