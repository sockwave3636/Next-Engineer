import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs';
import Icon from '../Icon';
import { ProgramHeader } from './ProgramView';
import { Branch, Program, formatRupees, passOnSale, semesterPassOf } from '@/lib/catalog/types';
import { programPath, semesterLabel, semesterPath, yearOfSemester } from '@/lib/catalog/routes';

interface BranchViewProps {
  program: Program;
  branch: Branch;
  // semester number → subject count
  semesterCounts: Record<number, number>;
}

export default function BranchView({ program, branch, semesterCounts }: BranchViewProps) {
  const semesters = Array.from({ length: program.semesters }, (_, i) => i + 1);
  const years = Array.from({ length: Math.ceil(program.semesters / 2) }, (_, i) => i + 1);

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={
          program.hasBranches
            ? [{ label: 'Home', href: '/' }, { label: program.name, href: programPath(program) }, { label: branch.shortName }]
            : [{ label: 'Home', href: '/' }, { label: program.name }]
        }
      />
      <ProgramHeader
        program={program}
        title={program.hasBranches ? `${program.name} ${branch.shortName}` : program.name}
        subtitle={program.hasBranches ? branch.name : program.fullName}
      />

      <h2 className="mb-4 font-display text-xl font-semibold text-ink">Choose your semester</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {years.map((year) => (
          <div key={year}>
            <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" /> Year {year}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {semesters
                .filter((semester) => yearOfSemester(semester) === year)
                .map((semester) => {
                  const count = semesterCounts[semester] ?? 0;
                  const pass = semesterPassOf(branch, semester);
                  return (
                    <Link
                      key={semester}
                      href={semesterPath(program, branch.id, semester)}
                      className="card card-hover group flex items-center justify-between gap-3 p-4"
                    >
                      <span className="min-w-0">
                        <span className="mb-1.5 flex flex-wrap items-center gap-1.5">
                          <span className="code">Sem {String(semester).padStart(2, '0')}</span>
                          {passOnSale(pass) && <span className="badge badge-sun">Pass {formatRupees(pass.price)}</span>}
                        </span>
                        <span className="block font-display font-semibold text-ink group-hover:text-brand">{semesterLabel(semester)}</span>
                        <span className="text-xs text-ink-muted">
                          {count > 0 ? `${count} ${count === 1 ? 'subject' : 'subjects'}` : 'Coming soon'}
                        </span>
                      </span>
                      <Icon name="chevron_right" className="text-ink-faint transition group-hover:text-brand" />
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
