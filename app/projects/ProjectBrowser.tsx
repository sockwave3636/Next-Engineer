'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Icon from '../components/Icon';
import { formatRupees } from '@/lib/catalog/types';
import { PROJECT_LEVELS, Project, ProjectLevel, projectImagePath, projectLevel, projectPath } from '@/lib/projects/types';

// What a list card needs; the rest of a project loads on its own page
export type ProjectCardData = Pick<
  Project,
  'id' | 'title' | 'summary' | 'tech' | 'level' | 'programIds' | 'branchIds' | 'semesters' | 'subjectCodes' | 'buildTime' | 'price'
> & { cover: string | null };

interface ProjectBrowserProps {
  projects: ProjectCardData[];
  programs: { id: string; name: string; hasBranches: boolean }[];
  branches: { id: string; programId: string; shortName: string }[];
}


export default function ProjectBrowser({ projects, programs, branches }: ProjectBrowserProps) {
  const [query, setQuery] = useState('');
  const [programId, setProgramId] = useState<string | null>(null);
  const [branchId, setBranchId] = useState<string | null>(null);
  const [semester, setSemester] = useState<number | null>(null);
  const [level, setLevel] = useState<ProjectLevel | null>(null);
  // Set from ?subject=BCC351 when a mini-project subject page links here
  const [subjectCode, setSubjectCode] = useState<string | null>(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('subject');
    if (code) setSubjectCode(code.toUpperCase()); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const program = programs.find((p) => p.id === programId);
  const programBranches = branches.filter((b) => b.programId === programId);
  const inProgram = programId ? projects.filter((p) => p.programIds.includes(programId)) : projects;
  const semesters = Array.from(new Set(inProgram.flatMap((p) => p.semesters))).sort((a, b) => a - b);

  const visible = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return projects.filter((p) => {
      if (programId && !p.programIds.includes(programId)) return false;
      // No branch list means the project suits every branch
      if (branchId && p.branchIds.length > 0 && !p.branchIds.includes(branchId)) return false;
      if (semester && !p.semesters.includes(semester)) return false;
      if (level && p.level !== level) return false;
      if (subjectCode && !p.subjectCodes.includes(subjectCode)) return false;
      const text = `${p.title} ${p.summary} ${p.tech.join(' ')} ${p.subjectCodes.join(' ')}`.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }, [projects, query, programId, branchId, semester, level, subjectCode]);

  const pickProgram = (id: string | null) => {
    setProgramId(id);
    setBranchId(null);
    setSemester(null);
  };

  const clearAll = () => {
    setQuery('');
    pickProgram(null);
    setLevel(null);
    setSubjectCode(null);
  };

  if (projects.length === 0) {
    return (
      <div className="card card-pad text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name="engineering" size={26} />
        </span>
        <p className="mt-3 font-display text-lg font-semibold text-ink">The first projects are on their way</p>
        <p className="mx-auto mt-1 max-w-md text-sm text-ink-muted">
          Each one is built and run before it goes up here. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <section aria-labelledby="project-list-title">
      <h2 id="project-list-title" className="section-title">
        Find a project
      </h2>

      <div className="mt-5 space-y-3">
        <label className="relative block max-w-xl">
          <span className="sr-only">Search projects</span>
          <Icon name="search" size={20} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or technology, e.g. Python, React, Arduino"
            className="input pl-10"
          />
        </label>

        {programs.length > 1 && (
          <FilterRow label="Course">
            <Chip active={!programId} onClick={() => pickProgram(null)}>
              All
            </Chip>
            {programs.map((p) => (
              <Chip key={p.id} active={programId === p.id} onClick={() => pickProgram(p.id)}>
                {p.name}
              </Chip>
            ))}
          </FilterRow>
        )}

        {program?.hasBranches && programBranches.length > 1 && (
          <FilterRow label="Branch">
            <Chip active={!branchId} onClick={() => setBranchId(null)}>
              All
            </Chip>
            {programBranches.map((b) => (
              <Chip key={b.id} active={branchId === b.id} onClick={() => setBranchId(b.id)}>
                {b.shortName}
              </Chip>
            ))}
          </FilterRow>
        )}

        {semesters.length > 1 && (
          <FilterRow label="Semester">
            <Chip active={!semester} onClick={() => setSemester(null)}>
              All
            </Chip>
            {semesters.map((s) => (
              <Chip key={s} active={semester === s} onClick={() => setSemester(s)}>
                Sem {s}
              </Chip>
            ))}
          </FilterRow>
        )}

        <FilterRow label="Level">
          <Chip active={!level} onClick={() => setLevel(null)}>
            All
          </Chip>
          {PROJECT_LEVELS.map((l) => (
            <Chip key={l.id} active={level === l.id} onClick={() => setLevel(l.id)} title={l.hint}>
              {l.label}
            </Chip>
          ))}
        </FilterRow>

        {subjectCode && (
          <FilterRow label="Subject">
            <button type="button" className="chip" data-active="true" onClick={() => setSubjectCode(null)}>
              {subjectCode} <Icon name="close" size={14} />
              <span className="sr-only">Show all subjects</span>
            </button>
          </FilterRow>
        )}
      </div>

      <p className="mt-6 text-sm text-ink-muted" aria-live="polite">
        {visible.length === projects.length
          ? `${projects.length} ${projects.length === 1 ? 'project' : 'projects'}`
          : `${visible.length} of ${projects.length} projects`}
      </p>

      {visible.length === 0 ? (
        <div className="card card-pad mt-4 text-center">
          <p className="font-display font-semibold text-ink">No project matches these filters</p>
          <button type="button" onClick={clearAll} className="btn btn-secondary btn-sm mt-3">
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li key={p.id}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <Link href={projectPath(project)} className="card card-hover group flex h-full flex-col overflow-hidden">
      {project.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={projectImagePath(project.id, project.cover)}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full border-b border-line bg-surface-muted object-cover object-top"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`badge ${projectLevel(project.level).badge}`}>{projectLevel(project.level).label}</span>
          {project.subjectCodes.slice(0, 2).map((code) => (
            <span key={code} className="code text-[11px]">
              {code}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink group-hover:text-brand">{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{project.summary}</p>
        <p className="mt-3 flex-1 font-mono text-xs text-ink-muted">{project.tech.slice(0, 4).join(' · ')}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-sm">
          <span className="font-display font-bold text-ink">{formatRupees(project.price)}</span>
          {project.buildTime && (
            <span className="flex items-center gap-1 text-xs text-ink-muted">
              <Icon name="schedule" size={16} /> {project.buildTime}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 text-xs font-semibold text-ink-muted">{label}</span>
      <div className="no-scrollbar flex gap-1.5 overflow-x-auto py-0.5">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, title, children }: { active: boolean; onClick: () => void; title?: string; children: React.ReactNode }) {
  return (
    <button type="button" className="chip" data-active={active} onClick={onClick} title={title} aria-pressed={active}>
      {children}
    </button>
  );
}
