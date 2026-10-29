'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { describeEntry, SearchEntry, searchSubjects } from '@/lib/catalog/search';
import { loadSearchIndex } from '@/lib/catalog/search-index-client';
import Icon from './Icon';

interface SubjectSearchProps {
  variant?: 'header' | 'hero';
  initialQuery?: string;
}

export default function SubjectSearch({ variant = 'header', initialQuery = '' }: SubjectSearchProps) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState(initialQuery);
  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isHero = variant === 'hero';

  const results = entries && query.trim() ? searchSubjects(entries, query, 8) : [];

  useEffect(() => {
    const onClickAway = (event: MouseEvent) => {
      if (!boxRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickAway);
    return () => document.removeEventListener('mousedown', onClickAway);
  }, []);

  // Ctrl+K / ⌘K jumps to the header search from anywhere
  useEffect(() => {
    if (isHero) return;
    const onShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onShortcut);
    return () => window.removeEventListener('keydown', onShortcut);
  }, [isHero]);

  const goTo = (url: string) => {
    setOpen(false);
    router.push(url);
  };

  const submit = () => {
    if (active >= 0 && results[active]) goTo(results[active].url);
    else if (query.trim()) goTo(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(results.length - 1, i + 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((i) => Math.max(-1, i - 1));
    } else if (event.key === 'Escape') {
      setOpen(false);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      submit();
    }
  };

  const input = (
    <input
      ref={inputRef}
      type="search"
      value={query}
      onChange={(event) => {
        setQuery(event.target.value);
        setActive(-1);
        setOpen(true);
      }}
      onFocus={() => {
        setOpen(true);
        // Loaded once per page view, on first focus
        if (!entries) loadSearchIndex().then(setEntries);
      }}
      onKeyDown={onKeyDown}
      placeholder={isHero ? "Try 'BCS301', 'Data Structure' or 'Operating System'" : 'Search subject by code or name'}
      aria-label="Search subjects by code or name"
      role="combobox"
      aria-expanded={open && results.length > 0}
      aria-controls={listId}
      aria-autocomplete="list"
      className={
        isHero
          ? 'min-w-0 flex-1 bg-transparent px-2 py-3 text-base text-ink outline-none placeholder:text-ink-faint'
          : 'w-full rounded-lg border border-transparent bg-surface-muted py-2 pl-10 pr-16 font-mono text-[13px] text-ink outline-none transition placeholder:text-ink-faint focus:border-brand/40 focus:bg-surface focus:ring-2 focus:ring-brand/30'
      }
    />
  );

  return (
    <div ref={boxRef} className={`relative ${isHero ? 'w-full max-w-2xl' : 'w-full'}`}>
      {isHero ? (
        <div className="flex items-center gap-1 rounded-xl border border-line bg-surface p-1.5 shadow-lift focus-within:border-brand/50 focus-within:ring-2 focus-within:ring-brand/20">
          <Icon name="search" size={24} className="ml-2 text-ink-faint" />
          {input}
          <button type="button" onClick={submit} className="btn btn-primary shrink-0">
            Find <Icon name="arrow_forward" size={18} />
          </button>
        </div>
      ) : (
        <>
          <Icon name="search" size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
          {input}
          <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded bg-surface-strong px-1.5 py-0.5 font-mono text-[11px] text-ink-muted lg:block">
            Ctrl K
          </kbd>
        </>
      )}

      {open && query.trim() && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-line bg-surface text-left shadow-float">
          {entries === null ? (
            <p className="px-4 py-3 text-sm text-ink-muted">Loading…</p>
          ) : results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-ink-muted">No subject matches “{query.trim()}”.</p>
          ) : (
            <ul id={listId} role="listbox" className="max-h-80 overflow-y-auto py-1">
              {results.map((entry, index) => (
                <li key={entry.url} role="option" aria-selected={index === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onClick={() => goTo(entry.url)}
                    className={`flex w-full items-start gap-3 px-4 py-2.5 text-left transition ${index === active ? 'bg-surface-muted' : ''}`}
                  >
                    <span className="code code-brand mt-0.5 shrink-0">{entry.code}</span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-ink">{entry.name}</span>
                      <span className="block text-xs text-ink-muted">{describeEntry(entry)}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
