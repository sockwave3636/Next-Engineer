import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs';
import Icon, { IconName } from '../Icon';
import PassOptions, { PassOption } from '../PassOptions';
import SemesterSubjects, { SubjectCardData, SubjectSection } from './SemesterSubjects';
import type { Branch, Program, Subject, SubjectKind } from '@/lib/catalog/types';
import { branchPath, programPath, semesterLabel, semesterPath, subjectPath, yearOfSemester } from '@/lib/catalog/routes';
import { SYLLABUS_SESSION } from '@/lib/catalog/defaults';

interface SemesterViewProps {
  program: Program;
  branch: Branch;
  semester: number;
  subjects: Subject[];
  // The semester pass for this branch and semester, if it's on sale
  passOptions: PassOption[];
}

// No credit totals here: AKTU pairs some subjects as either/or (e.g. Technical Communication
// or Universal Human Values), which the catalog doesn't record, so sums would overcount
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

export default function SemesterView({ program, branch, semester, subjects, passOptions }: SemesterViewProps) {
  const programLabel = program.hasBranches ? `${program.name} ${branch.shortName}` : program.name;
  const ofKind = (kind: SubjectKind) => subjects.filter((s) => s.kind === kind);
  const electiveGroups = Array.from(new Set(ofKind('elective').map((s) => s.group || 'Electives')));

  const toCard = (subject: Subject): SubjectCardData => ({
    id: subject.id,
    href: subjectPath(program, branch.id, semester, subject),
    code: subject.code,
    name: subject.name,
    credits: subject.credits,
    kind: subject.kind,
    description: subject.description,
    unitTitles: subject.unitTitles,
    notes: subject.resourceCounts.notes ?? 0,
    pyqs: subject.resourceCounts.pyq ?? 0,
    important: subject.resourceCounts.important ?? 0,
    premium: subject.resourceCounts.premium ?? 0,
  });

  const fixedSection = (id: string, title: string, icon: IconName, list: Subject[]): SubjectSection => ({
    id,
    title,
    icon,
    summary: plural(list.length, 'subject'),
    subjects: list.map(toCard),
  });

  // Theory first, then electives by group, then labs and projects
  const sections: SubjectSection[] = [
    fixedSection('theory', 'Theory subjects', 'menu_book', ofKind('theory')),
    ...electiveGroups.map((group, index) => {
      const list = ofKind('elective').filter((s) => (s.group || 'Electives') === group);
      return {
        id: `elective-${index}`,
        title: group,
        icon: 'layers' as const,
        summary: `${plural(list.length, 'option')} · pick as per your scheme`,
        subjects: list.map(toCard),
      };
    }),
    fixedSection('labs', 'Practicals and labs', 'science', ofKind('practical')),
    fixedSection('projects', 'Projects and seminars', 'workspace_premium', ofKind('project')),
  ].filter((section) => section.subjects.length > 0);

  const total = (key: 'notes' | 'pyq' | 'important') => subjects.reduce((sum, s) => sum + (s.resourceCounts[key] ?? 0), 0);
  const stats: { icon: IconName; tint: string; label: string; value: string; note: string }[] = [
    {
      icon: 'menu_book',
      tint: 'bg-brand-soft text-brand-ink',
      label: 'Subjects',
      value: String(subjects.length),
      note: `${ofKind('theory').length} theory · ${ofKind('practical').length} labs`,
    },
    { icon: 'description', tint: 'bg-sky-soft text-sky-ink', label: 'Notes', value: String(total('notes')), note: 'unit-wise' },
    { icon: 'history_edu', tint: 'bg-sun-soft text-sun-ink', label: 'PYQ papers', value: String(total('pyq')), note: 'previous years' },
    { icon: 'star', tint: 'bg-leaf-soft text-leaf-ink', label: 'Important Qs', value: String(total('important')), note: 'exam-focused' },
  ];

  const hasPrev = semester > 1;
  const hasNext = semester < program.semesters;

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: program.name, href: programPath(program) },
          ...(program.hasBranches ? [{ label: branch.shortName, href: branchPath(program, branch.id) }] : []),
          { label: semesterLabel(semester) },
        ]}
      />

      {/* Hero */}
      <section className="relative mb-6 overflow-hidden rounded-2xl bg-surface-muted p-6 shadow-soft sm:p-8">
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-sun">Year {yearOfSemester(semester)}</span>
              <span className="badge badge-muted">AKTU scheme {SYLLABUS_SESSION}</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {semesterLabel(semester)} · {programLabel}{' '}
              <span className="text-brand">({semester % 2 === 1 ? 'Odd' : 'Even'} semester)</span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Every subject, lab and elective in this semester, from AKTU&apos;s current scheme. Open a subject for notes,
              previous year papers and important questions.
            </p>
          </div>
          <nav className="flex shrink-0 items-center gap-1 rounded-xl bg-surface p-1 shadow-soft" aria-label="Other semesters">
            {hasPrev && (
              <Link href={semesterPath(program, branch.id, semester - 1)} className="btn btn-ghost btn-sm">
                <Icon name="arrow_back" size={16} /> Sem {semester - 1}
              </Link>
            )}
            <span className="rounded-md bg-brand px-3 py-1.5 font-mono text-xs font-semibold text-on-brand" aria-current="page">
              Sem {String(semester).padStart(2, '0')}
            </span>
            {hasNext && (
              <Link href={semesterPath(program, branch.id, semester + 1)} className="btn btn-ghost btn-sm">
                Sem {semester + 1} <Icon name="arrow_forward" size={16} />
              </Link>
            )}
          </nav>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card flex items-center justify-between gap-3 p-4">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">{stat.label}</p>
              <p className="font-display text-xl font-bold text-ink">{stat.value}</p>
              <p className="truncate text-xs text-ink-muted">{stat.note}</p>
            </div>
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${stat.tint}`}>
              <Icon name={stat.icon} size={22} />
            </span>
          </div>
        ))}
      </section>

      {/* Only worth offering once the semester has premium material */}
      {passOptions.length > 0 && subjects.some((s) => (s.resourceCounts.premium ?? 0) > 0) && (
        <div className="mb-8">
          <PassOptions options={passOptions} />
        </div>
      )}

      {sections.length === 0 ? (
        <div className="card card-pad flex flex-col items-center text-center">
          <Icon name="layers" size={40} className="text-ink-faint" />
          <p className="mt-3 font-display text-lg font-semibold text-ink">No subjects here yet</p>
          <p className="mt-1 text-ink-muted">We&apos;re adding this semester&apos;s subjects. Check back soon.</p>
        </div>
      ) : (
        <SemesterSubjects sections={sections} />
      )}

      <nav className="mt-12 flex justify-between gap-3" aria-label="Previous and next semester">
        {hasPrev ? (
          <Link href={semesterPath(program, branch.id, semester - 1)} className="btn btn-secondary">
            <Icon name="arrow_back" size={18} /> {semesterLabel(semester - 1)}
          </Link>
        ) : (
          <span />
        )}
        {hasNext && (
          <Link href={semesterPath(program, branch.id, semester + 1)} className="btn btn-secondary">
            {semesterLabel(semester + 1)} <Icon name="arrow_forward" size={18} />
          </Link>
        )}
      </nav>
    </div>
  );
}
