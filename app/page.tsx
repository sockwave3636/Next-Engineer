import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageShell from './components/PageShell';
import SubjectSearch from './components/SubjectSearch';
import BlogSlider from './components/BlogSlider';
import MyPasses from './components/MyPasses';
import Icon, { IconName } from './components/Icon';
import { getPrograms, getSiteStats } from '@/lib/catalog/server';
import { programStyle, SYLLABUS_SESSION } from '@/lib/catalog/defaults';
import { programPath } from '@/lib/catalog/routes';
import type { Program } from '@/lib/catalog/types';

// Cached; admin edits expire it through /api/revalidate
export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const POPULAR_SEARCHES = [
  { query: 'BCS301', label: 'BCS301 (DS)' },
  { query: 'BCS401', label: 'BCS401 (OS)' },
  { query: 'BCS501', label: 'BCS501 (DBMS)' },
  { query: 'ACS101', label: 'ACS101 (1st year)' },
  { query: 'BMB101', label: 'BMB101 (MBA)' },
];

const FEATURES: { icon: IconName; color: string; title: string; text: string; tag: string }[] = [
  {
    icon: 'menu_book',
    color: 'text-brand',
    title: 'Unit-wise notes',
    text: 'Notes split by unit, so sessional prep for units 1–2 or 3–4 takes minutes, not a whole evening.',
    tag: 'Units 1 to 5',
  },
  {
    icon: 'history_edu',
    color: 'text-leaf',
    title: 'PYQs by year and session',
    text: 'Previous year papers grouped by academic year and odd or even semester, newest first.',
    tag: 'Practise the latest first',
  },
  {
    icon: 'star',
    color: 'text-sun-ink',
    title: 'Important questions',
    text: 'Exam-focused questions for each unit, for the night before the paper.',
    tag: 'Unit by unit',
  },
  {
    icon: 'visibility',
    color: 'text-brand',
    title: 'Premium, read online',
    text: 'Unlock one subject or a whole semester and read premium PDFs on your phone or laptop.',
    tag: 'Watermarked reader',
  },
  {
    icon: 'schedule_send',
    color: 'text-leaf',
    title: "Ask for what's missing",
    text: "Can't find an elective or a paper? Request it from the subject page and we'll add it.",
    tag: 'From any subject page',
  },
  {
    icon: 'tag',
    color: 'text-ink',
    title: 'Search by subject code',
    text: 'Type BCS301 or a subject name and jump straight to its page, from any page on the site.',
    tag: 'Ctrl K anywhere',
  },
];

const PASS_POINTS = [
  'Subject pass: one subject’s premium material',
  'Semester pass: every subject in one semester of your branch',
  'Read online on any phone or laptop',
  'Pay with UPI, cards or netbanking through Razorpay',
];

function ProgramCard({ program, subjects }: { program: Program; subjects: number }) {
  const style = programStyle(program.id);
  return (
    <div className="card card-hover flex flex-col p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${style.tint}`}>
          {program.durationYears} years · {program.semesters} semesters
        </span>
        <Icon name={style.icon} size={22} className="text-brand" />
      </div>
      <h4 className="font-display text-2xl font-semibold text-ink">{program.name}</h4>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-ink-muted">{style.blurb || program.fullName}</p>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-surface-muted px-3 py-2 font-mono text-[13px] text-ink-muted">
        <span>Subjects:</span>
        <span className="font-bold text-brand">{subjects > 0 ? subjects : 'Coming soon'}</span>
      </div>
      <Link
        href={programPath(program)}
        className="mt-3 flex items-center justify-center gap-1 rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-ink transition hover:bg-brand hover:text-on-brand"
      >
        {program.hasBranches ? 'Browse branches & semesters' : 'Browse semesters'}
        <Icon name="chevron_right" size={18} />
      </Link>
    </div>
  );
}

export default async function Home() {
  const [programs, stats] = await Promise.all([getPrograms(), getSiteStats()]);
  const levels = [
    { title: 'Undergraduate programs (UG)', dot: 'bg-brand', programs: programs.filter((p) => p.level === 'UG') },
    { title: 'Postgraduate programs (PG)', dot: 'bg-sun', programs: programs.filter((p) => p.level === 'PG') },
  ].filter((level) => level.programs.length > 0);

  const statItems = [
    { value: stats.programs.toLocaleString('en-IN'), label: 'Programs', note: 'B.Tech, MBA, MCA, B.Pharm and more', color: 'text-brand' },
    { value: stats.subjects.toLocaleString('en-IN'), label: 'Subjects', note: 'Theory, labs, electives and projects', color: 'text-brand' },
    ...(stats.resources > 0
      ? [{ value: stats.resources.toLocaleString('en-IN'), label: 'Notes and papers', note: 'Unit-wise notes, PYQs and more', color: 'text-leaf' }]
      : []),
    { value: SYLLABUS_SESSION, label: 'AKTU schemes', note: 'Subjects follow the schemes in force', color: 'text-sun-ink' },
  ].filter((item) => item.value !== '0');

  return (
    <PageShell>
      <div className="container-page space-y-14 pt-6">
        {/* A signed-in student's passes come first, so they don't have to search for what they bought.
            Renders nothing for everyone else. */}
        <MyPasses programs={programs.map(({ id, hasBranches }) => ({ id, hasBranches }))} />

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl bg-surface-muted px-4 py-12 shadow-soft sm:px-10 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-soft blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-sun-soft blur-3xl" />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="eyebrow mb-5">
              <Icon name="school" size={16} className="text-brand" />
              Made for the AKTU syllabus
            </span>
            <h1 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.2] tracking-tight text-ink sm:text-5xl sm:leading-[1.15]">
              Stop digging through WhatsApp &amp; Telegram at 2 AM.
              <span className="mt-1 block text-brand">Every AKTU subject, in one place.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Unit-wise notes, previous year papers (PYQs), important questions and the syllabus for every subject at
              Dr. A.P.J. Abdul Kalam Technical University.
            </p>
            <div className="mt-8 flex w-full justify-center">
              <SubjectSearch variant="hero" />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="mr-1 text-[11px] font-bold uppercase tracking-wider text-ink-faint">Popular searches:</span>
              {POPULAR_SEARCHES.map((item) => (
                <Link
                  key={item.query}
                  href={`/search?q=${item.query}`}
                  className="rounded bg-surface-strong px-2.5 py-1 font-mono text-[13px] font-semibold text-brand transition hover:bg-brand-soft"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Live numbers */}
        <section className="card grid grid-cols-2 gap-y-6 px-4 py-6 md:grid-cols-4">
          {statItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center px-2 text-center">
              <span className={`font-display text-[1.75rem] font-extrabold leading-8 tracking-tight ${item.color}`}>{item.value}</span>
              <span className="mt-1 font-display text-base font-semibold text-ink">{item.label}</span>
              <span className="text-xs text-ink-muted">{item.note}</span>
            </div>
          ))}
        </section>

        {/* Highlight banner */}
        <section className="grid items-center overflow-hidden rounded-2xl bg-surface-strong lg:grid-cols-12">
          <div className="p-6 sm:p-10 lg:col-span-7">
            <span className="kicker">Made for exam season</span>
            <h2 className="mt-2 font-display text-2xl font-bold leading-snug tracking-tight text-ink sm:text-[2rem] sm:leading-10">
              Unit-wise notes and year-wise papers, ready when you are.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Pick your semester, open a subject and revise unit by unit. Previous papers are grouped by academic year and
              odd or even semester, so you can practise the latest ones first.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#programs" className="btn btn-primary">
                <Icon name="auto_stories" size={18} /> Browse programs
              </a>
              <a href="#passes" className="btn btn-secondary">
                How passes work
              </a>
            </div>
          </div>
          <div className="relative h-64 lg:col-span-5 lg:h-80">
            <Image
              src="/premium_vector-1722936895524-35f678b166f7.png"
              alt="A student studying at a desk by lamplight"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[50%_40%]"
              priority
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface-strong via-transparent to-transparent lg:bg-gradient-to-r" />
            {/* Small photo card over the illustration's corner, as on the original home page */}
            <div className="absolute bottom-4 left-4 z-10 w-24 -rotate-3 overflow-hidden rounded-xl border-4 border-surface shadow-lift sm:w-28 lg:bottom-6 lg:left-6">
              <Image src="/QWE1.jpeg" alt="From the Next Engineer team" width={861} height={1535} sizes="112px" className="h-auto w-full" />
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="scroll-mt-28">
          <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">Degree programs</span>
              <h2 className="section-title">Explore by program &amp; branch</h2>
            </div>
            <p className="max-w-md text-sm text-ink-muted">
              Pick your degree, then your branch and semester, to see every subject in your current AKTU scheme.
            </p>
          </div>
          {levels.length === 0 ? (
            <div className="card card-pad text-center text-ink-muted">Programs are being set up. Check back soon.</div>
          ) : (
            <div className="space-y-8">
              {levels.map((level) => (
                <div key={level.title}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${level.dot}`} aria-hidden="true" />
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{level.title}</h3>
                  </div>
                  <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${level.programs.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                    {level.programs.map((program) => (
                      <ProgramCard key={program.id} program={program} subjects={stats.programSubjects[program.id] ?? 0} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Features */}
        <section>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="kicker">Built for exam prep</span>
            <h2 className="section-title mt-1">What you&apos;ll find here</h2>
            <p className="mt-2 text-ink-muted">
              Everything you need for the last few days before an AKTU sessional or end-semester paper.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card flex flex-col p-5">
                <span className={`mb-3 grid h-10 w-10 place-items-center rounded-lg bg-surface-strong ${feature.color}`}>
                  <Icon name={feature.icon} size={24} />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-muted">{feature.text}</p>
                <span className={`mt-3 font-mono text-[13px] font-semibold ${feature.color}`}>{feature.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Passes */}
        <section id="passes" className="card scroll-mt-28 p-6 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="badge badge-sun">★ Premium passes</span>
              <h2 className="section-title mt-3">Unlock a subject, or a whole semester</h2>
              <p className="mt-2 text-ink-muted">
                Premium notes and books open in a watermarked reader on any device. Choose the pass that fits how much you
                need: one subject, or every subject in your semester.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {PASS_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink">
                    <Icon name="check_circle" size={18} className="mt-px text-leaf" filled />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-surface-muted p-6 text-center lg:col-span-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sun-soft text-sun-ink">
                <Icon name="workspace_premium" size={28} />
              </span>
              <p className="mt-3 font-display text-lg font-semibold text-ink">Find your pass</p>
              <p className="mt-1 text-sm text-ink-muted">
                Prices are on each subject and semester page. A pass unlocks instantly after payment.
              </p>
              <a href="#programs" className="btn btn-amber mt-5 w-full py-3 text-base">
                Choose your program <Icon name="arrow_forward" size={18} />
              </a>
              <span className="mt-2 text-[11px] font-semibold text-ink-faint">Secure checkout by Razorpay · UPI accepted</span>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section id="updates" className="scroll-mt-28">
          <BlogSlider />
        </section>

      </div>
    </PageShell>
  );
}
