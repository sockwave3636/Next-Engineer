'use client';

import { useCallback, useMemo, useState } from 'react';
import { Resource, RESOURCE_TYPES, ResourceType, Subject, formatBytes } from '@/lib/catalog/types';
import { resourceSource } from '@/lib/premium-client';
import { useAuth } from '@/app/context/AuthContext';
import { useAuthPrompt } from '@/app/context/AuthPromptContext';
import { usePasses } from '@/app/context/PassContext';
import PremiumReader from '../PremiumReader';
import Icon, { IconName } from '../Icon';
import RequestResource from './RequestResource';

interface ResourceBrowserProps {
  resources: Resource[];
  subject: Pick<Subject, 'id' | 'code' | 'name' | 'programId' | 'offerings' | 'unitTitles'>;
  // The admin's master lock is on: show a notice instead of the material
  locked?: boolean;
}

const TYPE_ICON: Record<ResourceType, IconName> = {
  notes: 'description',
  pyq: 'history_edu',
  important: 'star',
  syllabus: 'list_alt',
  lab: 'science',
  video: 'smart_display',
  book: 'menu_book',
};

export default function ResourceBrowser({ resources, subject, locked = false }: ResourceBrowserProps) {
  const { user } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const { hasAccess } = usePasses();

  const tabs = RESOURCE_TYPES.filter((t) => resources.some((r) => r.type === t.id));
  const [activeType, setActiveType] = useState<ResourceType | null>(tabs[0]?.id ?? null);
  const [unit, setUnit] = useState<number | 'all'>('all');
  const [reading, setReading] = useState<Resource | null>(null);

  const activeTab = RESOURCE_TYPES.find((t) => t.id === activeType);
  const ofType = resources.filter((r) => r.type === activeType);
  const units = Array.from(new Set(ofType.map((r) => r.unit).filter((u): u is number => u !== null))).sort((a, b) => a - b);
  const visible = activeTab?.usesUnit && unit !== 'all' ? ofType.filter((r) => r.unit === unit) : ofType;
  const unlocked = hasAccess(subject);

  // PYQs read best grouped by academic year, newest first
  const groups =
    activeType !== 'pyq'
      ? [{ title: '', items: visible }]
      : Array.from(new Set(visible.map((r) => r.year || 'Other')))
          .sort((a, b) => b.localeCompare(a))
          .map((year) => ({ title: year, items: visible.filter((r) => (r.year || 'Other') === year) }));

  const readerSource = useMemo(() => (reading ? resourceSource(reading.id) : null), [reading]);
  const closeReader = useCallback(() => setReading(null), []);

  // Every file opens in the read-only reader. Signing in is required so each page can carry
  // the reader's email; premium files also need a pass.
  const openFile = (resource: Resource) => {
    if (!user) {
      openAuthPrompt({ reason: resource.premium ? 'Sign in to read premium notes' : 'Sign in to read notes, free' });
      return;
    }
    if (resource.premium && !unlocked) {
      document.getElementById('premium-pass')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setReading(resource);
  };

  const unitLabel = (n: number) => {
    const title = subject.unitTitles[n - 1];
    return title ? `Unit ${n}: ${title}` : `Unit ${n}`;
  };

  return (
    <section aria-labelledby="resources-heading">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 id="resources-heading" className="font-display text-xl font-semibold text-ink">Study material</h2>
        {!locked && <RequestResource subjectId={subject.id} subjectCode={subject.code} subjectName={subject.name} />}
      </div>

      {locked ? (
        <div className="card card-pad flex flex-col items-center text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sun-soft text-sun-ink">
            <Icon name="lock" size={30} />
          </span>
          <p className="mt-3 font-display text-lg font-semibold text-ink">Study material is locked for now</p>
          <p className="mt-1 max-w-md text-ink-muted">
            Notes, papers and premium files are temporarily unavailable. Please check back later.
          </p>
        </div>
      ) : tabs.length === 0 ? (
        <div className="card card-pad flex flex-col items-center text-center">
          <Icon name="layers" size={40} className="text-ink-faint" />
          <p className="mt-3 font-display text-lg font-semibold text-ink">Material for this subject is on its way</p>
          <p className="mt-1 text-ink-muted">Need something specific? Use “Request a resource” above.</p>
        </div>
      ) : (
        <>
          <div role="tablist" aria-label="Resource types" className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => {
              const count = resources.filter((r) => r.type === tab.id).length;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={activeType === tab.id}
                  data-active={activeType === tab.id}
                  onClick={() => {
                    setActiveType(tab.id);
                    setUnit('all');
                  }}
                  className="chip py-2 text-sm"
                >
                  <Icon name={TYPE_ICON[tab.id]} size={18} /> {tab.label}
                  <span className="font-mono text-xs opacity-80">{count}</span>
                </button>
              );
            })}
          </div>

          {activeTab?.usesUnit && units.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-1.5" role="group" aria-label="Filter by unit">
              <button type="button" onClick={() => setUnit('all')} className={`btn btn-sm ${unit === 'all' ? 'btn-soft' : 'btn-ghost'}`}>
                All units
              </button>
              {units.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setUnit(n)}
                  title={subject.unitTitles[n - 1]}
                  className={`btn btn-sm font-mono ${unit === n ? 'btn-soft' : 'btn-ghost'}`}
                >
                  Unit {n}
                </button>
              ))}
            </div>
          )}

          <div className="space-y-6">
            {groups.map((group) => (
              <div key={group.title || 'all'}>
                {group.title && (
                  <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                    Academic session <span className="code code-brand normal-case">{group.title}</span>
                  </p>
                )}
                <ul className="space-y-3">
                  {group.items.map((resource) => {
                    const locked = resource.premium && !unlocked;
                    const size = formatBytes(resource.sizeBytes);
                    return (
                      <li key={resource.id} className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <span
                            className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
                              resource.premium ? 'bg-sun-soft text-sun-ink' : 'bg-brand-soft text-brand-ink'
                            }`}
                          >
                            <Icon name={TYPE_ICON[resource.type]} size={22} />
                          </span>
                          <div className="min-w-0">
                            <p className="font-semibold text-ink">{resource.title}</p>
                            <div className="mt-1 flex flex-wrap items-center gap-1.5">
                              {resource.premium && (
                                <span className="badge badge-sun">
                                  <Icon name={locked ? 'lock' : 'lock_open'} size={12} /> Premium · read online
                                </span>
                              )}
                              {resource.unit && <span className="code text-[11px]">{unitLabel(resource.unit)}</span>}
                              {resource.session && (
                                <span className="code text-[11px]">{resource.session === 'odd' ? 'Odd' : 'Even'} sem</span>
                              )}
                              {size && <span className="font-mono text-[11px] text-ink-faint">{size}</span>}
                            </div>
                          </div>
                        </div>
                        {resource.url ? (
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full sm:w-auto">
                            Open <Icon name="open_in_new" size={16} />
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => openFile(resource)}
                            className={`btn w-full sm:w-auto ${locked ? 'btn-amber' : 'btn-primary'}`}
                          >
                            <Icon name={locked ? 'lock' : 'auto_stories'} size={18} /> {locked ? 'Unlock' : 'Read'}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}

      {reading && readerSource && (
        <PremiumReader
          title={reading.title}
          code={subject.code}
          premium={reading.premium}
          source={readerSource}
          watermark={user?.email || 'Next Engineer'}
          onClose={closeReader}
        />
      )}
    </section>
  );
}
