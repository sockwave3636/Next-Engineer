import Link from 'next/link';
import Icon from './Icon';

interface Crumb {
  label: string;
  href?: string;
  // Subject codes render in the monospace code style
  code?: boolean;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="no-scrollbar mb-5 flex items-center gap-1 overflow-x-auto whitespace-nowrap text-sm text-ink-muted">
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
