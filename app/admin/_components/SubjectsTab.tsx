'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { deleteSubject, listPrograms, listSubjects, ProgramWithBranches, saveSubject, SubjectInput } from '@/lib/catalog/admin-client';
import { ALL_BRANCHES, DEFAULT_BRANCH_ID, Offering, RESOURCE_TYPES, Subject, SUBJECT_KINDS } from '@/lib/catalog/types';
import ResourceManager from './ResourceManager';
import { AdminModal, EMPTY_PASS, EmptyState, ErrorNote, FloatingError, PassFields, SectionHeader, errorText, passSummary, validatePass } from './ui';

type SubjectForm = SubjectInput & { existingId?: string; creditsText: string };

const blankUnits = () => ['', '', '', '', ''];

// initialProgramId preselects a program, e.g. from a program card's "Subjects" button
export default function SubjectsTab({ initialProgramId = '' }: { initialProgramId?: string }) {
  const [programs, setPrograms] = useState<ProgramWithBranches[] | null>(null);
  const [programId, setProgramId] = useState(initialProgramId);
  const [branchFilter, setBranchFilter] = useState<string>(''); // '' = all, '*' = shared only
  const [semesterFilter, setSemesterFilter] = useState<number>(0); // 0 = all
  const [subjects, setSubjects] = useState<Subject[] | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState<SubjectForm | null>(null);
  const [formError, setFormError] = useState('');
  const [managing, setManaging] = useState<Subject | null>(null);

  useEffect(() => {
    listPrograms()
      .then((list) => {
        setPrograms(list);
        setProgramId((current) => current || list[0]?.id || '');
      })
      .catch((err) => setError(errorText(err)));
  }, []);

  const loadSubjects = useCallback(async (id: string) => {
    if (!id) return;
    try {
      setSubjects(await listSubjects(id));
    } catch (err) {
      setError(errorText(err));
    }
  }, []);

  useEffect(() => {
    if (!programId) return;
    let cancelled = false;
    listSubjects(programId)
      .then((list) => !cancelled && setSubjects(list))
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, [programId]);

  const program = programs?.find((p) => p.id === programId);
  const branches = useMemo(() => program?.branches.filter((b) => b.id !== DEFAULT_BRANCH_ID) ?? [], [program]);
  const branchLabel = (id: string) =>
    !program?.hasBranches ? '' : id === ALL_BRANCHES ? 'All branches' : (branches.find((b) => b.id === id)?.shortName ?? id);

  const visible = (subjects ?? []).filter((subject) =>
    subject.offerings.some(
      (o) =>
        (!semesterFilter || o.semester === semesterFilter) &&
        (!branchFilter || o.branchId === branchFilter || (branchFilter !== ALL_BRANCHES && o.branchId === ALL_BRANCHES))
    )
  );

  const openNew = () => {
    if (!program) return;
    const branchId = !program.hasBranches ? DEFAULT_BRANCH_ID : branchFilter || branches[0]?.id || ALL_BRANCHES;
    setFormError('');
    setForm({
      code: '',
      name: '',
      credits: 0,
      creditsText: '',
      kind: 'theory',
      group: '',
      unitTitles: blankUnits(),
      description: '',
      programId: program.id,
      offerings: [{ branchId, semester: semesterFilter || 1 }],
      pass: EMPTY_PASS,
    });
  };

  const openEdit = (subject: Subject) => {
    setFormError('');
    setForm({
      existingId: subject.id,
      code: subject.code,
      name: subject.name,
      credits: subject.credits,
      creditsText: subject.credits ? String(subject.credits) : '',
      kind: subject.kind,
      group: subject.group ?? '',
      unitTitles: [...subject.unitTitles, ...blankUnits()].slice(0, Math.max(5, subject.unitTitles.length)),
      description: subject.description ?? '',
      programId: subject.programId,
      offerings: subject.offerings,
      pass: subject.pass ?? EMPTY_PASS,
    });
  };

  const submit = async () => {
    if (!form) return;
    if (!form.code.trim() || !form.name.trim()) return setFormError('Enter the subject code and name.');
    const passError = validatePass(form.pass);
    if (passError) return setFormError(passError);
    setFormError('');
    setBusy(true);
    try {
      const { existingId, creditsText, ...input } = form;
      await saveSubject({ ...input, credits: Number(creditsText) || 0 }, existingId);
      setForm(null);
      await loadSubjects(programId);
    } catch (err) {
      setFormError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const remove = async (subject: Subject) => {
    if (!confirm(`Delete ${subject.code} ${subject.name}? All its notes, papers and files are deleted too.`)) return;
    setBusy(true);
    setError('');
    try {
      await deleteSubject(subject.id);
      await loadSubjects(programId);
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const updateOffering = (index: number, change: Partial<Offering>) =>
    form && setForm({ ...form, offerings: form.offerings.map((o, i) => (i === index ? { ...o, ...change } : o)) });

  if (programs === null) {
    return error ? <ErrorNote message={error} /> : <p className="text-ink-muted">Loading…</p>;
  }
  if (programs.length === 0) {
    return <EmptyState icon="🎓" title="Add programs first" text="Open the Programs tab and add the default programs, then come back to add subjects." />;
  }

  return (
    <section>
      <SectionHeader
        title="Subjects and study material"
        description="Add each subject once, mark which branches and semesters it's taught in, then add its notes, PYQs and links."
        action={
          <button onClick={openNew} className="btn btn-primary">
            + Add subject
          </button>
        }
      />
      <FloatingError message={error} onDismiss={() => setError('')} />

      <div className="card mb-5 grid gap-3 p-4 sm:grid-cols-3">
        <div>
          <label htmlFor="filter-program" className="label">Program</label>
          <select
            id="filter-program"
            value={programId}
            onChange={(e) => {
              setProgramId(e.target.value);
              setBranchFilter('');
              setSemesterFilter(0);
              setSubjects(null);
            }}
            className="input"
          >
            {programs.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
        {program?.hasBranches && (
          <div>
            <label htmlFor="filter-branch" className="label">Branch</label>
            <select id="filter-branch" value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className="input">
              <option value="">All branches</option>
              <option value={ALL_BRANCHES}>Common to all branches</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>{b.shortName}</option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="filter-semester" className="label">Semester</label>
          <select id="filter-semester" value={semesterFilter} onChange={(e) => setSemesterFilter(Number(e.target.value))} className="input">
            <option value={0}>All semesters</option>
            {Array.from({ length: program?.semesters ?? 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>Semester {n}</option>
            ))}
          </select>
        </div>
      </div>

      {subjects === null ? (
        <p className="text-ink-muted">Loading subjects…</p>
      ) : visible.length === 0 ? (
        <EmptyState
          icon="📘"
          title="No subjects here yet"
          text="Add a subject, or change the filters above."
          action={<button onClick={openNew} className="btn btn-primary">+ Add subject</button>}
        />
      ) : (
        <ul className="space-y-3">
          {visible.map((subject) => {
            const counts = RESOURCE_TYPES.filter((t) => (subject.resourceCounts[t.id] ?? 0) > 0)
              .map((t) => `${subject.resourceCounts[t.id]} ${t.label.toLowerCase()}`)
              .join(' · ');
            return (
              <li key={subject.id} className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="badge badge-brand">{subject.code}</span>
                    <span className="font-extrabold text-ink">{subject.name}</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-ink-muted">
                    {subject.offerings.map((o) => [branchLabel(o.branchId), `Sem ${o.semester}`].filter(Boolean).join(' ')).join(', ')}
                    {' · '}
                    {counts || 'No material yet'}
                    {' · '}
                    {passSummary(subject.pass)}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button onClick={() => setManaging(subject)} className="btn btn-soft btn-sm">
                    📂 Material
                  </button>
                  <button onClick={() => openEdit(subject)} className="btn btn-secondary btn-sm">
                    Edit
                  </button>
                  <button onClick={() => remove(subject)} disabled={busy} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {form && program && (
        <AdminModal title={form.existingId ? `Edit ${form.code}` : `Add a ${program.name} subject`} onClose={() => setForm(null)} wide>
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
              <div>
                <label htmlFor="subject-code" className="label">Subject code</label>
                <input
                  id="subject-code"
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
                  disabled={!!form.existingId}
                  className="input disabled:opacity-60"
                  placeholder="BCS301"
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="subject-name" className="label">Subject name</label>
                <input
                  id="subject-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                  placeholder="Data Structure"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <label htmlFor="subject-kind" className="label">Type</label>
                <select
                  id="subject-kind"
                  value={form.kind}
                  onChange={(e) => setForm({ ...form, kind: e.target.value as Subject['kind'] })}
                  className="input"
                >
                  {SUBJECT_KINDS.map((k) => (
                    <option key={k.id} value={k.id}>{k.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="subject-credits" className="label">Credits</label>
                <input
                  id="subject-credits"
                  type="number"
                  min={0}
                  step={0.5}
                  value={form.creditsText}
                  onChange={(e) => setForm({ ...form, creditsText: e.target.value })}
                  className="input"
                  placeholder="4"
                />
              </div>
              <div>
                <label htmlFor="subject-group" className="label">Group (optional)</label>
                <input
                  id="subject-group"
                  value={form.group}
                  onChange={(e) => setForm({ ...form, group: e.target.value })}
                  className="input"
                  placeholder="Departmental Elective I"
                />
              </div>
            </div>

            <div>
              <p className="label">Taught in</p>
              <div className="space-y-2">
                {form.offerings.map((offering, index) => (
                  <div key={index} className="flex flex-wrap items-center gap-2">
                    {program.hasBranches && (
                      <select
                        value={offering.branchId}
                        onChange={(e) => updateOffering(index, { branchId: e.target.value })}
                        className="input w-auto flex-1"
                        aria-label="Branch"
                      >
                        <option value={ALL_BRANCHES}>All branches (common subject)</option>
                        {branches.map((b) => (
                          <option key={b.id} value={b.id}>{b.shortName}</option>
                        ))}
                      </select>
                    )}
                    <select
                      value={offering.semester}
                      onChange={(e) => updateOffering(index, { semester: Number(e.target.value) })}
                      className="input w-auto"
                      aria-label="Semester"
                    >
                      {Array.from({ length: program.semesters }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>Semester {n}</option>
                      ))}
                    </select>
                    {form.offerings.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, offerings: form.offerings.filter((_, i) => i !== index) })}
                        className="btn btn-ghost btn-sm"
                        aria-label="Remove"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {program.hasBranches && (
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      offerings: [...form.offerings, { branchId: branches[0]?.id ?? ALL_BRANCHES, semester: form.offerings[0]?.semester ?? 1 }],
                    })
                  }
                  className="btn btn-ghost btn-sm mt-2"
                >
                  + Another branch or semester
                </button>
              )}
            </div>

            <div>
              <p className="label">Units (optional)</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {form.unitTitles.map((title, index) => (
                  <input
                    key={index}
                    value={title}
                    onChange={(e) =>
                      setForm({ ...form, unitTitles: form.unitTitles.map((t, i) => (i === index ? e.target.value : t)) })
                    }
                    className="input"
                    placeholder={`Unit ${index + 1} title`}
                    aria-label={`Unit ${index + 1} title`}
                  />
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="subject-description" className="label">Description (optional)</label>
              <textarea
                id="subject-description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={2}
                className="input"
              />
            </div>

            <PassFields
              idPrefix="subject-pass"
              label="Sell a subject pass (this subject only)"
              value={form.pass}
              onChange={(pass) => setForm({ ...form, pass })}
            />

            <ErrorNote message={formError} />
            <div className="flex gap-2 pt-1">
              <button onClick={submit} disabled={busy} className="btn btn-primary flex-1">
                {busy ? 'Saving…' : form.existingId ? 'Save subject' : 'Add subject'}
              </button>
              <button onClick={() => setForm(null)} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </AdminModal>
      )}

      {managing && (
        <ResourceManager subject={managing} onClose={() => setManaging(null)} onChanged={() => loadSubjects(programId)} />
      )}
    </section>
  );
}
