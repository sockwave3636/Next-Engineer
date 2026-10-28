interface PageIntroProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
}

// Title block at the top of simple content pages
export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="mb-8">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 max-w-2xl text-ink-muted">{description}</p>}
    </div>
  );
}
