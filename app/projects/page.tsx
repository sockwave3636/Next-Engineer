import type { Metadata } from 'next';
import PageShell from '../components/PageShell';
import Breadcrumbs from '../components/Breadcrumbs';
import Icon, { IconName } from '../components/Icon';
import ProjectBrowser, { ProjectCardData } from './ProjectBrowser';
import { getBranches, getOpenAccess, getPrograms, getReadWithoutAccount } from '@/lib/catalog/server';
import { formatRupees } from '@/lib/catalog/types';
import { getProjects, getProjectsCharging } from '@/lib/projects/server';
import { DEFAULT_PROJECT_PRICE } from '@/lib/projects/types';

// Cached with the catalog; admin edits expire it through /api/revalidate
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'AKTU mini projects with code, report and viva questions',
  description:
    'Mini projects for AKTU BCC351, BCS554, BCS752 and other branches, MCA, BCA and MBA: tested source code, an editable report in AKTU format, slides and viva questions with answers.',
  alternates: { canonical: '/projects' },
};

const INCLUDED: { icon: IconName; title: string; text: string }[] = [
  { icon: 'code_blocks', title: 'Source code that runs', text: 'Built and run before it goes up, with setup steps.' },
  { icon: 'description', title: 'Report in AKTU format', text: 'An editable file with your name, roll number and college left blank.' },
  { icon: 'layers', title: 'Slides and synopsis', text: 'The proposal you submit first, and slides for the presentation.' },
  { icon: 'quiz', title: 'Viva questions', text: 'What examiners ask about this project, with answers.' },
];

export default async function ProjectsPage() {
  const [projects, programs, projectsCharging, freeAccess, readWithoutAccount] = await Promise.all([
    getProjects(),
    getPrograms(),
    getProjectsCharging(),
    getOpenAccess(),
    getReadWithoutAccount(),
  ]);
  const charging = projectsCharging && !freeAccess;

  // Filters offer only the programs and branches that have projects
  const programIds = new Set(projects.flatMap((p) => p.programIds));
  const filterPrograms = programs.filter((p) => programIds.has(p.id)).map((p) => ({ id: p.id, name: p.name, hasBranches: p.hasBranches }));
  const branchIds = new Set(projects.flatMap((p) => p.branchIds));
  const filterBranches = (
    await Promise.all(filterPrograms.filter((p) => p.hasBranches).map((p) => getBranches(p.id)))
  )
    .flat()
    .filter((b) => branchIds.has(b.id))
    .map((b) => ({ id: b.id, programId: b.programId, shortName: b.shortName }));

  const cards: ProjectCardData[] = projects.map((p) => ({
    id: p.id,
    title: p.title,
    summary: p.summary,
    tech: p.tech,
    level: p.level,
    programIds: p.programIds,
    branchIds: p.branchIds,
    semesters: p.semesters,
    subjectCodes: p.subjectCodes,
    buildTime: p.buildTime,
    price: p.price,
    cover: p.screenshots[0]?.file ?? null,
  }));
  const price = projects[0]?.price ?? DEFAULT_PROJECT_PRICE;

  return (
    <PageShell>
      <div className="container-page py-10">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Mini projects' }]} />

        <section className="ruled-paper overflow-hidden rounded-2xl border border-line px-4 py-10 sm:px-10 sm:py-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
            B.Tech semester 3, 5 and 7 · MCA · BCA · MBA
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl sm:leading-[1.1]">
            Mini projects you can build, <span className="marker">explain</span> and submit
          </h1>
          <p className="mt-4 max-w-2xl text-ink-muted sm:text-lg">
            {charging ? (
              <>
                Pick a project, read its synopsis free, and buy only the one you choose: {formatRupees(price)}, paid once and
                yours to keep.
              </>
            ) : (
              `Pick a project, then read the guide and download the code, all free. ${readWithoutAccount ? 'No account needed.' : 'You only need to sign in.'}`
            )}
          </p>
        </section>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-ink">
                <Icon name={item.icon} size={22} />
              </span>
              <div>
                <p className="font-display font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ProjectBrowser projects={cards} programs={filterPrograms} branches={filterBranches} charging={charging} />
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink-muted">
          These projects are written and built with AI, then run and checked before they go up. Use one as a guide: change
          it, add a feature of your own and be ready to explain every part in your viva. Submitting someone else&apos;s work
          as your own can break your college&apos;s rules.
        </p>
      </div>
    </PageShell>
  );
}
