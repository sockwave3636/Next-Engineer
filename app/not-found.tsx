import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from './components/PageShell';
import SubjectSearch from './components/SubjectSearch';
import Icon from './components/Icon';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

// Shown (with a 404 status) for any address that doesn't exist, such as an old or mistyped link
export default function NotFound() {
  return (
    <PageShell>
      <div className="container-page max-w-2xl py-16 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand-ink">
          <Icon name="search" size={28} />
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">This page isn&apos;t here</h1>
        <p className="mt-3 text-ink-muted">
          The link may be old or mistyped. Search for your subject by its code or name, or start from your program.
        </p>
        <div className="mx-auto mt-8 max-w-lg text-left">
          <SubjectSearch />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link href="/#programs" className="btn btn-primary">
            <Icon name="school" size={18} /> Choose your program
          </Link>
          <Link href="/projects" className="btn btn-secondary">
            Mini projects
          </Link>
          <Link href="/boards" className="btn btn-secondary">
            Study boards
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
