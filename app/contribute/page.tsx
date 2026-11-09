import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '../components/PageShell';
import PageIntro from '../components/PageIntro';
import ContributeDashboard from './ContributeDashboard';
import { BAN_DAYS, CREDITS_PER_FILE, MAX_WAITING_FILES, MONTHLY_CREDIT_CAP, REDEEM_COST, REDEEM_DAYS } from '@/lib/contributions/rules';

export const metadata: Metadata = {
  title: 'Share papers and notes, earn credits',
  description: 'Share AKTU question papers and your own handwritten notes with other students, and earn credits that unlock subjects on Next Engineer.',
  alternates: { canonical: '/contribute' },
};

const STEPS = [
  { title: 'Open your subject', text: 'Find the subject on the site and press “Share a file” above its study material.' },
  { title: 'We check it by hand', text: 'Your file stays private until we have read it. You can have up to ' + MAX_WAITING_FILES + ' files waiting at a time.' },
  { title: 'Earn credits', text: `An accepted file earns about ${CREDITS_PER_FILE} credits, up to ${MONTHLY_CREDIT_CAP} a month. ${REDEEM_COST} credits unlock a subject for ${REDEEM_DAYS} days.` },
];

export default function ContributePage() {
  return (
    <PageShell>
      <div className="container-page max-w-4xl py-12">
        <PageIntro
          eyebrow="Share and earn"
          title="Share papers and notes, earn credits"
          description="Got a recent AKTU paper or good handwritten notes? Share them with other students and unlock subjects without paying."
        />

        <ContributeDashboard />

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-4">
              <span className="font-mono text-sm font-semibold text-brand">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="card card-pad">
            <h2 className="font-display text-lg font-semibold text-ink">What you can share</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-muted">
              <li>AKTU question papers, as a PDF</li>
              <li>Your own handwritten notes, as a PDF</li>
            </ul>
            <h2 className="mt-6 font-display text-lg font-semibold text-ink">What you can&apos;t</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-muted">
              <li>Textbooks, or photos of them</li>
              <li>Coaching material or files from other websites</li>
              <li>Someone else&apos;s notes</li>
              <li>Anything with phone numbers, adverts, links or QR codes</li>
            </ul>
          </section>
          <section className="card card-pad">
            <h2 className="font-display text-lg font-semibold text-ink">If a file is fake or copied</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-muted">
              <li>Honest mistakes, like a blurry scan, are just rejected. No penalty.</li>
              <li>First deliberate fake or copied file: a warning.</li>
              <li>Second: no sharing for {BAN_DAYS} days.</li>
              <li>Third: no more sharing.</li>
              <li>If an accepted file is later found to be copied, it comes down and its credits are taken back.</li>
              <li>Penalties never affect a pass you paid for.</li>
            </ul>
            <p className="mt-4 text-xs text-ink-muted">
              Credits have no cash value. See the <Link href="/terms#sharing" className="link">sharing rules</Link>.
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
