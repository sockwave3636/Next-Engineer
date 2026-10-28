import Link from 'next/link';

export default function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`group flex shrink-0 items-center gap-2.5 ${className}`} aria-label="Next Engineer home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand font-display text-sm font-extrabold text-on-brand shadow-soft transition group-hover:bg-brand-hover">
        NE
      </span>
      <span className="hidden flex-col min-[400px]:flex">
        <span className="font-display text-[17px] font-bold leading-tight text-brand">Next Engineer</span>
        <span className="text-[10px] font-semibold uppercase leading-tight tracking-wider text-ink-muted">AKTU study companion</span>
      </span>
    </Link>
  );
}
