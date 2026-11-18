import Link from 'next/link';
import { SITE_URL } from '@/lib/site-url';
import Icon from './Icon';
import JsonLd from './JsonLd';

interface Crumb {
  label: string;
  href?: string;
  // Subject codes render in the monospace code style
  code?: boolean;
}

// The same trail for search engines, which can show it under the page's result instead of the
// bare address. In-page links (like "/#updates") aren't pages of their own, so they're left out.
function breadcrumbData(items: Crumb[]) {
  const trail = items.filter((item) => !item.href?.includes('#'));
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: item.href === '/' ? SITE_URL : `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="no-scrollbar mb-5 flex items-center gap-1 overflow-x-auto whitespace-nowrap text-sm text-ink-muted">
      <JsonLd data={breadcrumbData(items)} />
      <Icon name="account_balance" size={16} className="mr-0.5 text-leaf" />
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-1">
          {index > 0 && <Icon name="chevron_right" size={16} className="text-line-strong" />}
          {item.href ? (
            <Link href={item.href} className={`transition hover:text-brand ${index === 0 ? 'font-semibold text-ink' : ''}`}>
              {item.label}
            </Link>
          ) : (
            <span className={item.code ? 'code' : 'font-medium text-ink'} aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
