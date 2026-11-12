import type { Metadata } from 'next';
import PageShell from '../components/PageShell';
import PageIntro from '../components/PageIntro';
import HistoryList from './HistoryList';

export const metadata: Metadata = {
  title: 'Reading history',
  description: 'The notes, papers and projects you have opened on Next Engineer.',
  robots: { index: false },
};

export default function HistoryPage() {
  return (
    <PageShell>
      <div className="container-page max-w-3xl py-12">
        <PageIntro
          eyebrow="Your account"
          title="Reading history"
          description="Everything you open is saved here so you can find it again. Only you can see this list, and you can remove anything from it."
        />
        <HistoryList />
      </div>
    </PageShell>
  );
}
