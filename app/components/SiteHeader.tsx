import Link from 'next/link';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';
import NavAuthControls from './NavAuthControls';
import SubjectSearch from './SubjectSearch';
import Icon from './Icon';

const NAV_LINKS = [
  { href: '/#programs', label: 'Programs' },
  { href: '/#passes', label: 'Passes' },
  { href: '/#updates', label: 'Updates' },
  { href: '/#support', label: 'Support via UPI' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-page/90 shadow-[0_1px_8px_rgb(15_23_42/0.05)] backdrop-blur-md">
      <div className="container-page flex h-16 items-center gap-3">
        <BrandLogo />
        <div className="mx-2 hidden max-w-md flex-1 md:block lg:mx-4">
          <SubjectSearch />
        </div>
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-ink-muted transition hover:bg-surface-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <Link
            href="/search"
            className="grid h-9 w-9 place-items-center rounded-lg bg-surface-muted text-ink-muted hover:text-ink md:hidden"
            aria-label="Search subjects"
          >
            <Icon name="search" />
          </Link>
          <ThemeToggle />
          <NavAuthControls />
        </div>
      </div>
      <nav className="border-t border-line xl:hidden" aria-label="Main">
        <div className="container-page no-scrollbar flex gap-1 overflow-x-auto py-1.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-md px-2.5 py-1 text-sm text-ink-muted transition hover:bg-surface-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
