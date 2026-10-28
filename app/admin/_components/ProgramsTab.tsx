'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  deleteBranch,
  deleteProgram,
  listPrograms,
  ProgramWithBranches,
  saveBranch,
  saveProgram,
  seedDefaultPrograms,
} from '@/lib/catalog/admin-client';
import { programStyle, RESERVED_PROGRAM_IDS } from '@/lib/catalog/defaults';
import { Branch, DEFAULT_BRANCH_ID, Program, slugify } from '@/lib/catalog/types';
import { AdminModal, EmptyState, ErrorNote, FloatingError, SectionHeader, errorText, semesterPassSummary } from './ui';
import SemesterPassesModal from './SemesterPassesModal';
import Icon from '@/app/components/Icon';

type ProgramForm = Program & { isNew: boolean };
type BranchForm = Branch & { isNew: boolean };

const newProgram = (order: number): ProgramForm => ({
  id: '',
  name: '',
  fullName: '',
  level: 'UG',
  durationYears: 4,
  semesters: 8,
  hasBranches: true,
  order,
  active: true,
  isNew: true,
});

// onOpenSubjects switches to the Subjects tab with that program selected
export default function ProgramsTab({ onOpenSubjects }: { onOpenSubjects?: (programId: string) => void }) {
  const [programs, setPrograms] = useState<ProgramWithBranches[] | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [programForm, setProgramForm] = useState<ProgramForm | null>(null);
  const [branchForm, setBranchForm] = useState<BranchForm | null>(null);
  const [semesterPassesFor, setSemesterPassesFor] = useState<{ program: Program; branch: Branch; label: string } | null>(null);
  const [formError, setFormError] = useState('');

  const load = useCallback(async () => {
    try {
      setPrograms(await listPrograms());
    } catch (err) {
      setError(errorText(err));
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    listPrograms()
      .then((list) => !cancelled && setPrograms(list))
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, []);

  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    setError('');
    try {
      await action();
      await load();
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const submitProgram = async () => {
    if (!programForm) return;
    const { isNew, ...program } = programForm;
    const id = isNew ? slugify(program.id || program.name) : program.id;
    if (!program.name.trim() || !id) return setFormError('Enter a program name.');
    if (isNew && RESERVED_PROGRAM_IDS.includes(id)) return setFormError(`"${id}" is used by another page. Choose a different URL name.`);
    if (isNew && programs?.some((p) => p.id === id)) return setFormError(`A program with URL name "${id}" already exists.`);
    if (!(program.semesters >= 1 && program.semesters <= 12)) return setFormError('Semesters must be between 1 and 12.');
    setFormError('');
    setBusy(true);
    try {
      await saveProgram({ ...program, id, name: program.name.trim(), fullName: program.fullName.trim() || program.name.trim() });
      setProgramForm(null);
      await load();
    } catch (err) {
      setFormError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const submitBranch = async () => {
    if (!branchForm) return;
    const { isNew, ...branch } = branchForm;
    const id = isNew ? slugify(branch.id || branch.shortName) : branch.id;
    const program = programs?.find((p) => p.id === branch.programId);
    if (!branch.shortName.trim() || !id) return setFormError('Enter a short name for the branch.');
    if (isNew && program?.branches.some((b) => b.id === id)) return setFormError(`This program already has a branch "${id}".`);
    setFormError('');
    setBusy(true);
    try {
      await saveBranch({ ...branch, id, shortName: branch.shortName.trim(), name: branch.name.trim() || branch.shortName.trim() });
      setBranchForm(null);
      await load();
    } catch (err) {
      setFormError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  if (programs === null) {
    return error ? <ErrorNote message={error} /> : <p className="text-ink-muted">Loading programs…</p>;
  }

  return (
    <section>
      <SectionHeader
        title="Programs and branches"
        description="Students pick a program, then a branch (if it has any), then a semester. Each branch can sell a pass per semester."
        action={
          <>
            {programs.length > 0 && (
              <button onClick={() => run(seedDefaultPrograms)} disabled={busy} className="btn btn-secondary">
                Restore defaults
              </button>
            )}
            <button
              onClick={() => {
                setFormError('');
                setProgramForm(newProgram(programs.length + 1));
              }}
              className="btn btn-primary"
            >
              + Add program
            </button>
          </>
        }
      />
      <FloatingError message={error} onDismiss={() => setError('')} />

      {programs.length === 0 ? (
        <EmptyState
          icon="🎓"
          title="No programs yet"
          text="Load B.Tech, MBA, MCA, B.Pharm, M.Tech, BCA and BBA with common AKTU branches. You can edit everything afterwards."
          action={
            <button onClick={() => run(seedDefaultPrograms)} disabled={busy} className="btn btn-primary">
              {busy ? 'Adding…' : 'Add default programs'}
            </button>
          }
        />
      ) : (
        <div className="mt-4 space-y-4">
          {programs.map((program) => {
            const style = programStyle(program.id);
            const visibleBranches = program.branches.filter((b) => b.id !== DEFAULT_BRANCH_ID);
            const programPassBranch = program.branches.find((b) => b.id === DEFAULT_BRANCH_ID);
            return (
              <div key={program.id} className="card card-pad">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${style.tint}`}>
                      <Icon name={style.icon} size={26} />
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold text-ink">
                        {program.name} <span className="text-sm font-semibold text-ink-muted">/{program.id}</span>
                      </h3>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        <span className="badge badge-muted">{program.fullName}</span>
                        <span className="badge badge-muted">{program.level}</span>
                        <span className="badge badge-muted">{program.durationYears} yrs · {program.semesters} sems</span>
                        {!program.active && <span className="badge badge-sun">Hidden</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {onOpenSubjects && (
                      <button onClick={() => onOpenSubjects(program.id)} className="btn btn-soft btn-sm">
                        <Icon name="menu_book" size={16} /> Subjects
                      </button>
                    )}
                    <button
                      onClick={() => {
                        setFormError('');
                        setProgramForm({ ...program, isNew: false });
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirm(`Delete ${program.name}? Its branches are deleted too.`) && run(() => deleteProgram(program.id))}
                      disabled={busy}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {program.hasBranches ? (
                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-extrabold text-ink">Branches ({visibleBranches.length})</p>
                      <button
                        onClick={() => {
                          setFormError('');
                          setBranchForm({
                            id: '',
                            programId: program.id,
                            name: '',
                            shortName: '',
                            order: visibleBranches.length + 1,
                            active: true,
                            isNew: true,
                          });
                        }}
                        className="btn btn-soft btn-sm"
                      >
                        + Add branch
                      </button>
                    </div>
                    <ul className="divide-y divide-line rounded-2xl border border-line">
                      {visibleBranches.map((branch) => (
                        <li key={branch.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                          <span className="min-w-0 flex-1">
                            <span className="font-bold text-ink">{branch.shortName}</span>
                            <span className="ml-2 text-sm text-ink-muted">{branch.name}</span>
                            {!branch.active && <span className="badge badge-sun ml-2">Hidden</span>}
                          </span>
                          <span className="text-xs font-bold text-ink-muted">
                            {semesterPassSummary(branch.semesterPasses, program.semesters)}
                          </span>
                          <button
                            onClick={() =>
                              setSemesterPassesFor({ program, branch, label: `${program.name} ${branch.shortName}` })
                            }
                            className="btn btn-soft btn-sm"
                          >
                            Semester passes
                          </button>
                          <button
                            onClick={() => {
                              setFormError('');
                              setBranchForm({ ...branch, isNew: false });
                            }}
                            className="btn btn-ghost btn-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => confirm(`Delete ${branch.shortName}?`) && run(() => deleteBranch(program.id, branch.id))}
                            disabled={busy}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                      {visibleBranches.length === 0 && <li className="px-4 py-3 text-sm text-ink-muted">No branches yet.</li>}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-5 space-y-3">
                    <p className="flex items-start gap-2 rounded-2xl border border-dashed border-line-strong px-4 py-3 text-sm text-ink-muted">
                      <Icon name="layers" size={18} className="mt-px text-brand" />
                      <span>
                        <span className="font-semibold text-ink">No branches.</span> AKTU runs {program.name} as one course,
                        so students go straight to Semester 1–{program.semesters}. Its subjects are under{' '}
                        {onOpenSubjects ? (
                          <button type="button" onClick={() => onOpenSubjects(program.id)} className="link">
                            Subjects and material
                          </button>
                        ) : (
                          'Subjects and material'
                        )}
                        .
                      </span>
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-surface-muted px-4 py-3">
                      <span className="text-sm">
                        <span className="font-bold text-ink">Semester passes</span>
                        <span className="ml-2 text-ink-muted">
                          {semesterPassSummary(programPassBranch?.semesterPasses, program.semesters)}
                        </span>
                      </span>
                      <button
                        onClick={() =>
                          setSemesterPassesFor({
                            program,
                            // The hidden 'all' branch holds a branchless program's passes
                            branch: programPassBranch ?? {
                              id: DEFAULT_BRANCH_ID,
                              programId: program.id,
                              name: program.fullName,
                              shortName: program.name,
                              order: 1,
                              active: true,
                            },
                            label: program.name,
                          })
                        }
                        className="btn btn-soft btn-sm"
                      >
                        Set prices
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {programForm && (
        <AdminModal title={programForm.isNew ? 'Add program' : `Edit ${programForm.name}`} onClose={() => setProgramForm(null)}>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="program-name" className="label">Short name</label>
                <input
                  id="program-name"
                  value={programForm.name}
                  onChange={(e) => setProgramForm({ ...programForm, name: e.target.value })}
                  className="input"
                  placeholder="B.Tech"
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="program-id" className="label">URL name</label>
                <input
                  id="program-id"
                  value={programForm.id}
                  onChange={(e) => setProgramForm({ ...programForm, id: e.target.value })}
                  disabled={!programForm.isNew}
                  className="input disabled:opacity-60"
                  placeholder={slugify(programForm.name) || 'btech'}
                />
              </div>
            </div>
            <div>
              <label htmlFor="program-full" className="label">Full name</label>
              <input
                id="program-full"
                value={programForm.fullName}
                onChange={(e) => setProgramForm({ ...programForm, fullName: e.target.value })}
                className="input"
                placeholder="Bachelor of Technology"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="program-level" className="label">Level</label>
                <select
                  id="program-level"
                  value={programForm.level}
                  onChange={(e) => setProgramForm({ ...programForm, level: e.target.value as Program['level'] })}
                  className="input"
                >
                  <option value="UG">UG</option>
                  <option value="PG">PG</option>
                </select>
              </div>
              <div>
                <label htmlFor="program-years" className="label">Years</label>
                <input
                  id="program-years"
                  type="number"
                  min={1}
                  max={6}
                  value={programForm.durationYears}
                  onChange={(e) => setProgramForm({ ...programForm, durationYears: Number(e.target.value) })}
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="program-sems" className="label">Semesters</label>
                <input
                  id="program-sems"
                  type="number"
                  min={1}
                  max={12}
                  value={programForm.semesters}
                  onChange={(e) => setProgramForm({ ...programForm, semesters: Number(e.target.value) })}
                  className="input"
                />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm font-bold text-ink">
              <input
                type="checkbox"
                className="h-4 w-4 accent-brand"
                checked={programForm.hasBranches}
                onChange={(e) => setProgramForm({ ...programForm, hasBranches: e.target.checked })}
              />
              Has branches (like B.Tech CSE, IT…)
            </label>
            {!programForm.isNew && (
              <p className="text-xs text-ink-muted">Changing this changes the program&apos;s page addresses.</p>
            )}
            <label className="flex items-center gap-2 text-sm font-bold text-ink">
              <input
                type="checkbox"
                className="h-4 w-4 accent-brand"
                checked={programForm.active}
                onChange={(e) => setProgramForm({ ...programForm, active: e.target.checked })}
              />
              Show on the site
            </label>
            <ErrorNote message={formError} />
            <div className="flex gap-2 pt-1">
              <button onClick={submitProgram} disabled={busy} className="btn btn-primary flex-1">
                {busy ? 'Saving…' : programForm.isNew ? 'Add program' : 'Save program'}
              </button>
              <button onClick={() => setProgramForm(null)} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </AdminModal>
      )}

      {branchForm && (
        <AdminModal title={branchForm.isNew ? 'Add branch' : `Edit ${branchForm.shortName}`} onClose={() => setBranchForm(null)}>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="branch-short" className="label">Short name</label>
                <input
                  id="branch-short"
                  value={branchForm.shortName}
                  onChange={(e) => setBranchForm({ ...branchForm, shortName: e.target.value })}
                  className="input"
                  placeholder="CSE"
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="branch-id" className="label">URL name</label>
                <input
                  id="branch-id"
                  value={branchForm.id}
                  onChange={(e) => setBranchForm({ ...branchForm, id: e.target.value })}
                  disabled={!branchForm.isNew}
                  className="input disabled:opacity-60"
                  placeholder={slugify(branchForm.shortName) || 'cse'}
                />
              </div>
            </div>
            <div>
              <label htmlFor="branch-name" className="label">Full name</label>
              <input
                id="branch-name"
                value={branchForm.name}
                onChange={(e) => setBranchForm({ ...branchForm, name: e.target.value })}
                className="input"
                placeholder="Computer Science & Engineering"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="branch-order" className="label">Order</label>
                <input
                  id="branch-order"
                  type="number"
                  value={branchForm.order}
                  onChange={(e) => setBranchForm({ ...branchForm, order: Number(e.target.value) })}
                  className="input"
                />
              </div>
              <label className="mt-7 flex items-center gap-2 text-sm font-bold text-ink">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-brand"
                  checked={branchForm.active}
                  onChange={(e) => setBranchForm({ ...branchForm, active: e.target.checked })}
                />
                Show on the site
              </label>
            </div>
            <p className="text-xs text-ink-muted">Semester pass prices are set with the branch&apos;s “Semester passes” button.</p>
            <ErrorNote message={formError} />
            <div className="flex gap-2 pt-1">
              <button onClick={submitBranch} disabled={busy} className="btn btn-primary flex-1">
                {busy ? 'Saving…' : 'Save'}
              </button>
              <button onClick={() => setBranchForm(null)} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </AdminModal>
      )}

      {semesterPassesFor && (
        <SemesterPassesModal
          program={semesterPassesFor.program}
          branch={semesterPassesFor.branch}
          label={semesterPassesFor.label}
          onClose={() => setSemesterPassesFor(null)}
          onSaved={load}
        />
      )}
    </section>
  );
}
