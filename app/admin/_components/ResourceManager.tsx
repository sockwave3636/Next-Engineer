'use client';

import { useCallback, useEffect, useState } from 'react';
import { addResource, deleteResource, listResources, updateResource } from '@/lib/catalog/admin-client';
import { Resource, RESOURCE_TYPES, ResourceType, Subject, formatBytes } from '@/lib/catalog/types';
import { AdminModal, ErrorNote, errorText } from './ui';

interface ResourceManagerProps {
  subject: Subject;
  onClose: () => void;
  // Lets the subject list refresh its counts
  onChanged: () => void;
}

interface DraftResource {
  type: ResourceType;
  title: string;
  unit: string; // '' = none
  year: string;
  session: '' | 'odd' | 'even';
  premium: boolean;
  source: 'file' | 'link';
  file: File | null;
  url: string;
}

const emptyDraft = (type: ResourceType = 'notes'): DraftResource => ({
  type,
  title: '',
  unit: '',
  year: '',
  session: '',
  premium: false,
  source: type === 'video' ? 'link' : 'file',
  file: null,
  url: '',
});

const isPdf = (file: File | null) => !!file && (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf'));

export default function ResourceManager({ subject, onClose, onChanged }: ResourceManagerProps) {
  const [resources, setResources] = useState<Resource[] | null>(null);
  const [draft, setDraft] = useState<DraftResource>(emptyDraft());
  const [fileInputKey, setFileInputKey] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState<Resource | null>(null);

  const load = useCallback(async () => {
    try {
      setResources(await listResources(subject.id));
    } catch (err) {
      setError(errorText(err));
    }
  }, [subject.id]);

  useEffect(() => {
    let cancelled = false;
    listResources(subject.id)
      .then((list) => !cancelled && setResources(list))
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, [subject.id]);

  const typeInfo = RESOURCE_TYPES.find((t) => t.id === draft.type);
  const unitCount = Math.max(subject.unitTitles.length, 5);

  const submit = async () => {
    setBusy(true);
    setError('');
    try {
      await addResource({
        subjectId: subject.id,
        type: draft.type,
        title: draft.title,
        unit: draft.unit ? Number(draft.unit) : null,
        year: draft.type === 'pyq' ? draft.year || null : null,
        session: draft.type === 'pyq' && draft.session ? draft.session : null,
        premium: draft.source === 'file' && draft.premium,
        file: draft.source === 'file' ? draft.file : null,
        url: draft.source === 'link' ? draft.url : null,
      });
      // Keep the type and unit so several files for the same unit are quick to add
      setDraft({ ...emptyDraft(draft.type), unit: draft.unit, year: draft.year, session: draft.session });
      setFileInputKey((key) => key + 1);
      await load();
      onChanged();
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const remove = async (resource: Resource) => {
    if (!confirm(`Delete "${resource.title}"? Its file is deleted too.`)) return;
    setBusy(true);
    setError('');
    try {
      await deleteResource(resource);
      await load();
      onChanged();
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const saveEdit = async () => {
    if (!editing) return;
    setBusy(true);
    setError('');
    try {
      await updateResource(editing.id, {
        title: editing.title.trim(),
        unit: editing.unit,
        year: editing.year,
        session: editing.session,
      });
      setEditing(null);
      await load();
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AdminModal title={`${subject.code} · ${subject.name}`} onClose={onClose} wide>
      <div className="space-y-6">
        {/* Add form */}
        <div className="space-y-4 rounded-2xl bg-surface-muted p-4">
          <p className="font-extrabold text-ink">Add study material</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label htmlFor="res-type" className="label">Type</label>
              <select
                id="res-type"
                value={draft.type}
                onChange={(e) => setDraft({ ...emptyDraft(e.target.value as ResourceType), title: draft.title })}
                className="input"
              >
                {RESOURCE_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>{t.icon} {t.label}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="res-title" className="label">Title</label>
              <input
                id="res-title"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                className="input"
                placeholder={draft.type === 'pyq' ? 'End semester paper' : 'Unit 1 handwritten notes'}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {typeInfo?.usesUnit && (
              <div>
                <label htmlFor="res-unit" className="label">Unit</label>
                <select id="res-unit" value={draft.unit} onChange={(e) => setDraft({ ...draft, unit: e.target.value })} className="input">
                  <option value="">Whole subject</option>
                  {Array.from({ length: unitCount }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      Unit {n}{subject.unitTitles[n - 1] ? `: ${subject.unitTitles[n - 1]}` : ''}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {draft.type === 'pyq' && (
              <>
                <div>
                  <label htmlFor="res-year" className="label">Academic year</label>
                  <input
                    id="res-year"
                    value={draft.year}
                    onChange={(e) => setDraft({ ...draft, year: e.target.value })}
                    className="input"
                    placeholder="2023-24"
                  />
                </div>
                <div>
                  <label htmlFor="res-session" className="label">Session</label>
                  <select
                    id="res-session"
                    value={draft.session}
                    onChange={(e) => setDraft({ ...draft, session: e.target.value as DraftResource['session'] })}
                    className="input"
                  >
                    <option value="">Not specified</option>
                    <option value="odd">Odd semester</option>
                    <option value="even">Even semester</option>
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Source">
            <button
              type="button"
              onClick={() => setDraft({ ...draft, source: 'file' })}
              className={`btn btn-sm ${draft.source === 'file' ? 'btn-soft' : 'btn-ghost'}`}
            >
              Upload a PDF
            </button>
            <button
              type="button"
              onClick={() => setDraft({ ...draft, source: 'link', premium: false })}
              className={`btn btn-sm ${draft.source === 'link' ? 'btn-soft' : 'btn-ghost'}`}
            >
              Add a link
            </button>
          </div>

          {draft.source === 'file' ? (
            <div className="space-y-3">
              <input
                key={fileInputKey}
                type="file"
                accept=".pdf,application/pdf"
                onChange={(e) => setDraft({ ...draft, file: e.target.files?.[0] ?? null })}
                className="input file:mr-3 file:rounded-lg file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:font-semibold file:text-brand-ink"
                aria-label="PDF file"
              />
              <p className="text-xs text-ink-muted">
                PDF only. Students read every file in the on-site reader with their email watermarked on each page; nothing
                can be downloaded.
              </p>
              <label className="flex items-center gap-2 text-sm font-bold text-ink">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-brand"
                  checked={draft.premium}
                  onChange={(e) => setDraft({ ...draft, premium: e.target.checked })}
                />
                ⭐ Premium: only pass holders can read it
              </label>
              {draft.file && !isPdf(draft.file) && (
                <p className="alert alert-error text-xs">Choose a PDF. Other file types can&apos;t open in the reader.</p>
              )}
              {draft.premium && !subject.pass?.enabled && (
                <p className="alert border-sun-ink/20 bg-sun-soft text-xs text-sun-ink">
                  This subject has no subject pass on sale. Students can still unlock it with a semester pass, if one is set.
                </p>
              )}
            </div>
          ) : (
            <div>
              <label htmlFor="res-url" className="label">Link</label>
              <input
                id="res-url"
                type="url"
                value={draft.url}
                onChange={(e) => setDraft({ ...draft, url: e.target.value })}
                className="input"
                placeholder="https://youtube.com/playlist?list=…"
              />
            </div>
          )}

          <ErrorNote message={error} />
          <button onClick={submit} disabled={busy} className="btn btn-primary">
            {busy ? 'Saving…' : 'Add to subject'}
          </button>
        </div>

        {/* Existing resources */}
        {resources === null ? (
          <p className="text-sm text-ink-muted">Loading…</p>
        ) : resources.length === 0 ? (
          <p className="text-center text-sm text-ink-muted">Nothing added to this subject yet.</p>
        ) : (
          <div className="space-y-5">
            {RESOURCE_TYPES.filter((t) => resources.some((r) => r.type === t.id)).map((type) => (
              <div key={type.id}>
                <p className="mb-2 text-sm font-extrabold text-ink">
                  {type.icon} {type.label}
                </p>
                <ul className="divide-y divide-line rounded-2xl border border-line">
                  {resources
                    .filter((r) => r.type === type.id)
                    .map((resource) => (
                      <li key={resource.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                        <span className="min-w-0 flex-1">
                          <span className="block font-bold text-ink">{resource.title}</span>
                          <span className="text-xs text-ink-muted">
                            {[
                              resource.unit ? `Unit ${resource.unit}` : null,
                              resource.year,
                              resource.session ? `${resource.session} sem` : null,
                              resource.url ? 'Link' : formatBytes(resource.sizeBytes),
                            ]
                              .filter(Boolean)
                              .join(' · ')}
                          </span>
                        </span>
                        {resource.premium && <span className="badge badge-leaf">⭐ Premium</span>}
                        <button onClick={() => setEditing(resource)} disabled={busy} className="btn btn-ghost btn-sm">
                          Edit
                        </button>
                        <button onClick={() => remove(resource)} disabled={busy} className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {editing && (
          <div className="space-y-3 rounded-2xl border-2 border-brand/30 p-4">
            <p className="font-extrabold text-ink">Edit “{editing.title}”</p>
            <input
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="input"
              aria-label="Title"
            />
            <div className="grid gap-3 sm:grid-cols-3">
              <select
                value={editing.unit ?? ''}
                onChange={(e) => setEditing({ ...editing, unit: e.target.value ? Number(e.target.value) : null })}
                className="input"
                aria-label="Unit"
              >
                <option value="">Whole subject</option>
                {Array.from({ length: unitCount }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>Unit {n}</option>
                ))}
              </select>
              {editing.type === 'pyq' && (
                <>
                  <input
                    value={editing.year ?? ''}
                    onChange={(e) => setEditing({ ...editing, year: e.target.value || null })}
                    className="input"
                    placeholder="2023-24"
                    aria-label="Academic year"
                  />
                  <select
                    value={editing.session ?? ''}
                    onChange={(e) => setEditing({ ...editing, session: (e.target.value || null) as Resource['session'] })}
                    className="input"
                    aria-label="Session"
                  >
                    <option value="">Not specified</option>
                    <option value="odd">Odd semester</option>
                    <option value="even">Even semester</option>
                  </select>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <button onClick={saveEdit} disabled={busy} className="btn btn-primary btn-sm">Save</button>
              <button onClick={() => setEditing(null)} className="btn btn-ghost btn-sm">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </AdminModal>
  );
}
