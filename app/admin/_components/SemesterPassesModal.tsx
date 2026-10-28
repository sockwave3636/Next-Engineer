'use client';

import { useState } from 'react';
import { saveSemesterPasses } from '@/lib/catalog/admin-client';
import type { Branch, PassSettings, Program } from '@/lib/catalog/types';
import { AdminModal, EMPTY_PASS, ErrorNote, errorText, validatePass } from './ui';

interface SemesterPassesModalProps {
  program: Program;
  branch: Branch;
  // e.g. "B.Tech CSE" or "MBA"
  label: string;
  onClose: () => void;
  onSaved: () => void;
}

// Price and validity for each semester's pass in one branch (or a branchless program)
export default function SemesterPassesModal({ program, branch, label, onClose, onSaved }: SemesterPassesModalProps) {
  const semesters = Array.from({ length: program.semesters }, (_, i) => String(i + 1));
  const [passes, setPasses] = useState<Record<string, PassSettings>>(() =>
    Object.fromEntries(semesters.map((s) => [s, { ...EMPTY_PASS, ...branch.semesterPasses?.[s] }]))
  );
  const [bulk, setBulk] = useState({ price: '', days: '180' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const update = (semester: string, changes: Partial<PassSettings>) =>
    setPasses((current) => ({ ...current, [semester]: { ...current[semester], ...changes } }));

  const applyToAll = () => {
    const price = Number(bulk.price);
    const durationDays = Number(bulk.days);
    if (!Number.isInteger(price) || price < 1 || !Number.isInteger(durationDays) || durationDays < 1) {
      setError('Enter a whole-rupee price and a number of days to apply.');
      return;
    }
    setError('');
    setPasses(Object.fromEntries(semesters.map((s) => [s, { enabled: true, price, durationDays }])));
  };

  const save = async () => {
    for (const semester of semesters) {
      const problem = validatePass(passes[semester]);
      if (problem) {
        setError(`Semester ${semester}: ${problem}`);
        return;
      }
    }
    setBusy(true);
    setError('');
    try {
      await saveSemesterPasses(program.id, branch.id, passes);
      onSaved();
      onClose();
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AdminModal title={`Semester passes · ${label}`} onClose={onClose} wide>
      <div className="space-y-5">
        <p className="text-sm text-ink-muted">
          A semester pass unlocks every premium file in that semester&apos;s subjects for {label}, including subjects
          shared with other branches. Students can also buy single-subject passes, set on each subject.
        </p>

        <div className="flex flex-wrap items-end gap-3 rounded-2xl bg-surface-muted p-4">
          <div>
            <label htmlFor="bulk-price" className="label">Same price for all (₹)</label>
            <input
              id="bulk-price"
              type="number"
              min={1}
              value={bulk.price}
              onChange={(e) => setBulk({ ...bulk, price: e.target.value })}
              className="input w-32"
              placeholder="199"
            />
          </div>
          <div>
            <label htmlFor="bulk-days" className="label">Valid for (days)</label>
            <input
              id="bulk-days"
              type="number"
              min={1}
              value={bulk.days}
              onChange={(e) => setBulk({ ...bulk, days: e.target.value })}
              className="input w-32"
            />
          </div>
          <button type="button" onClick={applyToAll} className="btn btn-soft">
            Apply to every semester
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-line bg-surface-muted px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
            <span>Semester</span>
            <span className="w-28">Price (₹)</span>
            <span className="w-28">Days</span>
          </div>
          <ul className="divide-y divide-line">
            {semesters.map((semester) => {
              const pass = passes[semester];
              return (
                <li key={semester} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-2.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-brand"
                      checked={pass.enabled}
                      onChange={(e) => update(semester, { enabled: e.target.checked })}
                    />
                    Semester {semester}
                    {!pass.enabled && <span className="text-xs font-normal text-ink-faint">not on sale</span>}
                  </label>
                  <input
                    type="number"
                    min={1}
                    aria-label={`Semester ${semester} price`}
                    value={pass.price || ''}
                    disabled={!pass.enabled}
                    onChange={(e) => update(semester, { price: Number(e.target.value) })}
                    className="input w-28 py-1.5 disabled:opacity-50"
                    placeholder="199"
                  />
                  <input
                    type="number"
                    min={1}
                    aria-label={`Semester ${semester} validity in days`}
                    value={pass.durationDays || ''}
                    disabled={!pass.enabled}
                    onChange={(e) => update(semester, { durationDays: Number(e.target.value) })}
                    className="input w-28 py-1.5 disabled:opacity-50"
                    placeholder="180"
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <ErrorNote message={error} />
        <div className="flex gap-2">
          <button type="button" onClick={save} disabled={busy} className="btn btn-primary flex-1">
            {busy ? 'Saving…' : 'Save semester passes'}
          </button>
          <button type="button" onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </AdminModal>
  );
}
