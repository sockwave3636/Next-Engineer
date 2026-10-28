import Link from 'next/link';
import BrandLogo from './BrandLogo';
import Icon from './Icon';

const LINK_GROUPS = [
  {
    title: 'Explore',
    links: [
      { href: '/#programs', label: 'All programs' },
      { href: '/search', label: 'Search subjects' },
      { href: '/#passes', label: 'Premium passes' },
      { href: '/#updates', label: 'Latest updates' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { href: '/btech', label: 'B.Tech' },
      { href: '/mba', label: 'MBA' },
      { href: '/mca', label: 'MCA' },
      { href: '/bpharm', label: 'B.Pharm' },
      { href: '/bca', label: 'BCA' },
      { href: '/bba', label: 'BBA' },
    ],
  },
  {
    title: 'Official AKTU',
    links: [
      { href: 'https://aktu.ac.in', label: 'AKTU website', external: true },
      { href: 'https://aktu.ac.in/syllabus.html', label: 'Syllabus and schemes', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <BrandLogo />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            Notes, PYQs and important questions for AKTU students, organised by program, branch and semester.
          </p>
          <Link href="/#support" className="btn btn-soft btn-sm">
            <Icon name="volunteer_activism" size={16} /> Support via UPI
          </Link>
        </div>
        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="mb-3 font-display text-sm font-semibold text-ink">{group.title}</p>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  {'external' in link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-ink-muted transition hover:text-brand"
                    >
                      {link.label} <Icon name="open_in_new" size={14} />
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-ink-muted transition hover:text-brand">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-ink-muted lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl leading-relaxed">
            Next Engineer is an independent study portal. It is not affiliated with or endorsed by Dr. A.P.J. Abdul Kalam
            Technical University (AKTU), Lucknow. This site uses cookies and may show ads through Google AdSense.
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:text-brand">Privacy</Link>
            <Link href="/terms" className="hover:text-brand">Terms</Link>
            <Link href="/refund-policy" className="hover:text-brand">Refunds</Link>
            <Link href="/about" className="hover:text-brand">About</Link>
            <Link href="/contact" className="hover:text-brand">Contact</Link>
            <span>© {new Date().getFullYear()} Next Engineer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
