import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/app/components/PageShell';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Icon from '@/app/components/Icon';
import ProjectAccess from './ProjectAccess';
import { getBranches, getMaterialLocked, getOpenAccess, getPrograms } from '@/lib/catalog/server';
import { getProject, getProjectsCharging } from '@/lib/projects/server';
import { Project, projectImagePath, projectLevel, projectPath } from '@/lib/projects/types';

// Cached with the catalog; admin edits expire it through /api/revalidate
export const revalidate = 86400;

// Each page is rendered on its first visit and then served from the cache until the daily
// refresh or an edit in Admin, instead of running on every visit
export async function generateStaticParams() {
  return [];
}

type Params = Promise<{ id: string }>;

// "B.Tech CSE, IT · Semester 3", one line per program the project suits
async function fitsLines(project: Project): Promise<string[]> {
  const programs = await getPrograms();
  const semesters = project.semesters.length ? ` · Semester ${project.semesters.join(', ')}` : '';
  return Promise.all(
    project.programIds.map(async (programId) => {
      const program = programs.find((p) => p.id === programId);
      if (!program) return '';
      if (!program.hasBranches) return `${program.name}${semesters}`;
      const branches = (await getBranches(programId)).filter((b) => project.branchIds.includes(b.id));
      const branchText = branches.length ? branches.map((b) => b.shortName).join(', ') : 'all branches';
      return `${program.name} ${branchText}${semesters}`;
    })
  ).then((lines) => lines.filter(Boolean));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = await getProject((await params).id);
  if (!project) return {};
  const codes = project.subjectCodes.length ? ` for AKTU ${project.subjectCodes.join(', ')}` : '';
  return {
    title: `${project.title}: mini project with code, report and viva`,
    description: `${project.summary} Built with ${project.tech.join(', ')}${codes}. Source code, an editable report in AKTU format, slides and viva questions.`,
    alternates: { canonical: projectPath(project) },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const [project, locked, charging, freeAccess] = await Promise.all([getProject(id), getMaterialLocked(), getProjectsCharging(), getOpenAccess()]);
  if (!project) notFound();
  const fits = await fitsLines(project);
  const level = projectLevel(project.level);

  return (
    <PageShell>
      <div className="container-page py-10">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Mini projects', href: '/projects' }, { label: project.title }]} />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <header className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className={`badge ${level.badge}`} title={level.hint}>
                {level.label}
              </span>
              {project.subjectCodes.map((code) => (
                <span key={code} className="code code-brand">
                  {code}
                </span>
              ))}
              {project.aiGenerated && (
                <span className="badge badge-muted">
                  <Icon name="auto_awesome" size={13} /> AI-generated
                </span>
              )}
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{project.title}</h1>
            {project.summary && <p className="mt-2 max-w-2xl text-lg text-ink-muted">{project.summary}</p>}

            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
              {fits.length > 0 && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Suits</dt>
                  {fits.map((line) => (
                    <dd key={line} className="mt-0.5 text-ink">
                      {line}
                    </dd>
                  ))}
                </div>
              )}
              {project.tech.length > 0 && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Built with</dt>
                  <dd className="mt-0.5 font-mono text-[13px] text-ink">{project.tech.join(' · ')}</dd>
                </div>
              )}
              {project.buildTime && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Time to build</dt>
                  <dd className="mt-0.5 text-ink">{project.buildTime}</dd>
                </div>
              )}
            </dl>
          </header>

          {/* Right column on wide screens; straight under the title on phones, so the price isn't
              below everything else */}
          <aside className="lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <ProjectAccess
              project={{
                id: project.id,
                title: project.title,
                price: project.price,
                documents: project.documents,
                download: project.download,
                aiGenerated: project.aiGenerated,
                code: project.subjectCodes[0] ?? '',
              }}
              locked={locked}
              charging={charging && !freeAccess}
            />
          </aside>

          <div className="min-w-0 space-y-10">
            {project.screenshots.length > 0 && (
              <section aria-label="Screenshots" className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((shot, index) => (
                  <figure key={shot.file} className={index === 0 ? 'sm:col-span-2' : ''}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={projectImagePath(project.id, shot.file)}
                      alt={shot.caption || `${project.title} screenshot ${index + 1}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="w-full rounded-xl border border-line bg-surface-muted"
                    />
                    {shot.caption && <figcaption className="mt-2 text-xs text-ink-muted">{shot.caption}</figcaption>}
                  </figure>
                ))}
              </section>
            )}

            {project.overview.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">About this project</h2>
                <div className="mt-3 max-w-3xl space-y-3 leading-relaxed text-ink-muted">
                  {project.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {project.features.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">What it does</h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink">
                      <Icon name="check_circle" size={18} className="mt-px shrink-0 text-leaf" filled />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.sampleViva.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Viva questions: a sample</h2>
                <p className="mt-1 text-sm text-ink-muted">The full set, with answers, comes with the project.</p>
                <div className="mt-4 divide-y divide-line rounded-xl border border-line bg-surface">
                  {project.sampleViva.map((item) => (
                    <details key={item.question} className="group px-4 py-3">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold text-ink">
                        {item.question}
                        <Icon name="chevron_right" size={20} className="shrink-0 text-ink-faint transition group-open:rotate-90" />
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
