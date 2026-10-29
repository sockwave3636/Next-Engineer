import Breadcrumbs from '../Breadcrumbs';
import PassOptions, { PassOption } from '../PassOptions';
import ResourceBrowser from './ResourceBrowser';
import { Branch, Program, Resource, SUBJECT_KINDS, Subject } from '@/lib/catalog/types';
import { branchPath, programPath, semesterLabel, semesterPath } from '@/lib/catalog/routes';

interface SubjectViewProps {
  program: Program;
  branch: Branch;
  semester: number;
  subject: Subject;
  resources: Resource[];
  // The admin's master lock: resources arrive empty and the page says material is locked
  materialLocked?: boolean;
  passOptions: PassOption[];
}

export default function SubjectView({ program, branch, semester, subject, resources, materialLocked = false, passOptions }: SubjectViewProps) {
  const kindLabel = SUBJECT_KINDS.find((k) => k.id === subject.kind)?.label;
  const hasPremium = resources.some((r) => r.premium);

  return (
    <div className="container-page py-10">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: program.name, href: programPath(program) },
          ...(program.hasBranches ? [{ label: branch.shortName, href: branchPath(program, branch.id) }] : []),
          { label: semesterLabel(semester), href: semesterPath(program, branch.id, semester) },
          { label: `${subject.code}: ${subject.name}`, code: true },
        ]}
      />

      <section className="relative mb-8 overflow-hidden rounded-2xl bg-surface-muted p-6 shadow-soft sm:p-8">
        <div className="relative">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="code code-brand">{subject.code}</span>
            {subject.credits > 0 && (
              <span className="badge badge-leaf">
                {subject.credits} {subject.credits === 1 ? 'credit' : 'credits'}
              </span>
            )}
            {kindLabel && <span className="badge badge-muted">{kindLabel}</span>}
            {subject.group && <span className="badge badge-sun">{subject.group}</span>}
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{subject.name}</h1>
          <p className="mt-2 text-sm text-ink-muted">
            {program.hasBranches ? `${program.name} ${branch.shortName}` : program.name} · {semesterLabel(semester)}
          </p>
          {subject.description && <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">{subject.description}</p>}

          {subject.unitTitles.length > 0 && (
            <ol className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {subject.unitTitles.map((title, index) => (
                <li key={index} className="flex items-baseline gap-3 rounded-lg bg-surface px-4 py-3 text-sm shadow-soft">
                  <span className="font-mono text-xs font-bold text-brand">UNIT {index + 1}</span>
                  <span className="text-ink">{title}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {hasPremium && passOptions.length > 0 && (
        <div className="mb-8">
          <PassOptions options={passOptions} subject={subject} />
        </div>
      )}

      <ResourceBrowser
        resources={resources}
        locked={materialLocked}
        subject={{
          id: subject.id,
          code: subject.code,
          name: subject.name,
          programId: subject.programId,
          offerings: subject.offerings,
          unitTitles: subject.unitTitles,
        }}
      />
    </div>
  );
}
