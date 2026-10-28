import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '../components/PageShell';
import PageIntro from '../components/PageIntro';
import SubjectSearch from '../components/SubjectSearch';
import Icon from '../components/Icon';
import { getSearchIndex } from '@/lib/catalog/server';
import { describeEntry, searchSubjects } from '@/lib/catalog/search';

export const metadata: Metadata = {
  title: 'Search subjects',
  description: 'Find any AKTU subject by code or name and jump to its notes, PYQs and important questions.',
  robots: { index: false },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const raw = (await searchParams).q;
  const query = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? '';
  const results = query ? searchSubjects(await getSearchIndex(), query) : [];

  return (
    <PageShell>
      <div className="container-page max-w-3xl py-12">
        <PageIntro eyebrow="Search" title="Find a subject" description="Search by subject code (BCS301) or by name (Data Structure)." />
        <div className="mb-8">
          <SubjectSearch variant="hero" initialQuery={query} key={query} />
        </div>

        {query && (
          <>
            <p className="mb-4 text-sm font-semibold text-ink-muted">
              {results.length === 0
                ? `No subjects match “${query}”.`
                : `${results.length} ${results.length === 1 ? 'subject' : 'subjects'} for “${query}”`}
            </p>
            <ul className="space-y-3">
              {results.map((entry) => (
                <li key={entry.url}>
                  <Link href={entry.url} className="card card-hover group flex items-center gap-4 p-4">
                    <span className="code code-brand shrink-0">{entry.code}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display font-semibold text-ink group-hover:text-brand">{entry.name}</span>
                      <span className="text-sm text-ink-muted">{describeEntry(entry)}</span>
                    </span>
                    <Icon name="chevron_right" className="text-ink-faint group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </PageShell>
  );
}
