import type { Metadata } from 'next';
import PageShell from '../components/PageShell';
import PageIntro from '../components/PageIntro';
import BoardsList from './BoardsList';

export const metadata: Metadata = {
  title: 'Study boards: a shared whiteboard for group study',
  description:
    'Draw, add sticky notes and work through problems together on a shared whiteboard. Share a board with classmates by link and see everyone’s cursor live.',
  alternates: { canonical: '/boards' },
};

const STEPS = [
  { title: 'Make a board', text: 'Name it after a subject, a unit or a problem set.' },
  { title: 'Share the link', text: 'Turn on sharing and send the link to your classmates. They sign in and join.' },
  { title: 'Work it out together', text: 'Draw, write and add sticky notes. Everyone sees changes and cursors live.' },
];

export default function BoardsPage() {
  return (
    <PageShell>
      <div className="container-page max-w-5xl py-12">
        <PageIntro
          eyebrow="Study together"
          title="Study boards"
          description="A shared whiteboard for group study. Sketch diagrams, solve numericals step by step and leave sticky notes, live with your classmates."
        />

        <BoardsList />

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-4">
              <span className="font-mono text-sm font-semibold text-brand">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
