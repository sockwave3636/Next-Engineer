import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs';
import Icon from '../Icon';
import { Branch, Program } from '@/lib/catalog/types';
import { branchPath } from '@/lib/catalog/routes';
import { programStyle } from '@/lib/catalog/defaults';

interface ProgramViewProps {
  program: Program;
  branches: Branch[];
  // branchId → number of subjects offered to it (shared subjects included)
  subjectCounts: Record<string, number>;
}

export function ProgramHeader({ program, title, subtitle }: { program: Program; title?: string; subtitle?: string }) {
  const style = programStyle(program.id);
  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl bg-surface-muted p-6 shadow-soft sm:p-8">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${style.tint}`}>
          <Icon name={style.icon} size={34} />
        </span>
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title ?? program.name}</h1>
          <p className="mt-1 text-ink-muted">{subtitle ?? program.fullName}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="badge badge-brand">{program.level === 'UG' ? 'Undergraduate' : 'Postgraduate'}</span>
            <span className="badge badge-sun">
              {program.durationYears} years · {program.semesters} semesters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProgramView({ program, branches, subjectCounts }: ProgramViewProps) {
  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: program.name }]} />
      <ProgramHeader program={program} />

      <h2 className="mb-4 font-display text-xl font-semibold text-ink">Choose your branch</h2>
      {branches.length === 0 ? (
        <div className="card card-pad text-center text-ink-muted">Branches for {program.name} are coming soon.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => {
            const count = subjectCounts[branch.id] ?? 0;
            return (
              <Link key={branch.id} href={branchPath(program, branch.id)} className="card card-hover group flex flex-col p-5">
                <span className="code code-brand self-start">{branch.shortName}</span>
                <span className="mt-3 font-display text-lg font-semibold leading-snug text-ink group-hover:text-brand">{branch.name}</span>
                <span className="mt-4 flex items-center justify-between rounded-lg bg-surface-muted px-3 py-2 font-mono text-[13px] text-ink-muted">
                  <span>Subjects:</span>
                  <span className="font-bold text-brand">{count > 0 ? count : 'Coming soon'}</span>
                </span>
                <span className="mt-3 flex items-center justify-center gap-1 rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-ink transition group-hover:bg-brand group-hover:text-on-brand">
                  Browse semesters <Icon name="chevron_right" size={18} />
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
