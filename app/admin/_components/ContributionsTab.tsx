'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import Icon from '@/app/components/Icon';
import PremiumReader from '@/app/components/PremiumReader';
import { formatBytes } from '@/lib/catalog/types';
import { approveFile, listForReview, rejectFile, removeFile, reviewSource } from '@/lib/contributions/client';
import { CREDITS_PER_FILE, ContributionForReview, MAX_CREDITS_PER_FILE } from '@/lib/contributions/rules';
import { AdminModal, EmptyState, ErrorNote, FloatingError, SectionHeader, errorText } from './ui';

const FILTERS = [
  { id: 'pending', label: 'Waiting' },
  { id: 'approved', label: 'Live' },
  { id: 'rejected', label: 'Rejected' },
  { id: 'removed', label: 'Removed' },
];

const REJECT_REASONS = [
  { text: 'Blurry or unreadable.', deliberate: false },
  { text: 'Wrong subject.', deliberate: false },
  { text: 'We already have this.', deliberate: false },
  { text: 'Blank or fake file.', deliberate: true },
  { text: 'Copied from a book, website or someone else.', deliberate: true },
];

const formatDate = (millis: number) => new Date(millis).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

// Students' uploads, checked by hand. There is deliberately no download anywhere in this tab:
// files open only in the on-site reader, so nothing a student sent ever reaches this computer's disk.
export default function ContributionsTab() {
  const { user } = useAuth();
  const [status, setStatus] = useState('pending');
  // Bumped after each decision, to fetch the list again
  const [version, setVersion] = useState(0);
  const [loaded, setLoaded] = useState<{ status: string; version: number; files: ContributionForReview[] } | null>(null);
  const [error, setError] = useState('');
  const [reading, setReading] = useState<ContributionForReview | null>(null);
  const [approving, setApproving] = useState<ContributionForReview | null>(null);
  const [turningDown, setTurningDown] = useState<ContributionForReview | null>(null);
  const files = loaded?.status === status && loaded.version === version ? loaded.files : null;

  useEffect(() => {
    let cancelled = false;
    listForReview(status).then(
      (list) => !cancelled && setLoaded({ status, version, files: list }),
      (err) => !cancelled && setError(errorText(err))
    );
    return () => {
      cancelled = true;
    };
  }, [status, version]);

  const readerSource = useMemo(() => (reading ? reviewSource(reading.id) : null), [reading]);
  const closeReader = useCallback(() => setReading(null), []);
  const done = () => {
    setApproving(null);
    setTurningDown(null);
    setVersion((current) => current + 1);
  };

  return (
    <section>
      <FloatingError message={error} onDismiss={() => setError('')} />
      <SectionHeader title="Student uploads" description="Check each file here before it goes live. Credits are only paid when you approve." />

      <p className="alert mb-5 flex items-start gap-2 border-line bg-surface-muted font-normal text-ink-muted">
        <Icon name="shield" size={20} className="mt-px text-brand" />
        <span>
          These files come from strangers, so they can only be read here, in the on-site reader. There is no download on purpose.
          If you ever see one in the Firebase console, don&apos;t download it or open it in Adobe or Word.
        </span>
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {FILTERS.map((filter) => (
          <button key={filter.id} type="button" className="chip" data-active={status === filter.id} onClick={() => setStatus(filter.id)}>
            {filter.label}
          </button>
        ))}
      </div>

      {files === null && <p className="text-sm text-ink-muted">Loading…</p>}
      {files?.length === 0 && (
        <EmptyState icon="📭" title="Nothing here" text={status === 'pending' ? 'No student files are waiting to be checked.' : 'No files in this list yet.'} />
      )}

      {files && files.length > 0 && (
        <ul className="space-y-3">
          {files.map((file) => (
            <li key={file.id} className="card flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="code code-brand">{file.subjectCode}</span>
                  <span className="badge badge-muted">{file.type === 'pyq' ? 'Question paper' : 'Handwritten notes'}</span>
                  {file.duplicate && <span className="badge badge-sun">Already on the site</span>}
                  {file.uploaderStrikes > 0 && (
                    <span className="badge badge-sun">
                      <Icon name="warning" size={12} /> {file.uploaderStrikes} {file.uploaderStrikes === 1 ? 'strike' : 'strikes'}
                    </span>
                  )}
                  {file.status === 'approved' && <span className="badge badge-leaf">{file.creditsAwarded} credits paid</span>}
                </div>
                <p className="mt-1.5 font-semibold text-ink">{file.title}</p>
                <p className="text-xs text-ink-muted">
                  {file.subjectName} · {file.uploaderName || 'Student'} ({file.uploaderEmail}) · {formatBytes(file.sizeBytes)} · {formatDate(file.createdAt)}
                </p>
                {file.reason && <p className="mt-1 text-sm text-ink-muted">Reason: {file.reason}</p>}
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                {file.status === 'pending' && (
                  <>
                    <button type="button" onClick={() => setReading(file)} className="btn btn-secondary btn-sm">
                      <Icon name="auto_stories" size={16} /> Read
                    </button>
                    <button type="button" onClick={() => setApproving(file)} className="btn btn-primary btn-sm">
                      Approve
                    </button>
                    <button type="button" onClick={() => setTurningDown(file)} className="btn btn-danger btn-sm">
                      Reject
                    </button>
                  </>
                )}
                {file.status === 'approved' && (
                  <button type="button" onClick={() => setTurningDown(file)} className="btn btn-danger btn-sm">
                    Remove
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {reading && readerSource && (
        <PremiumReader
          title={reading.title}
          code={reading.subjectCode}
          premium={false}
          sharedByStudent
          source={readerSource}
          watermark={user?.email || 'Next Engineer'}
          onClose={closeReader}
        />
      )}
      {approving && <ApproveModal file={approving} onClose={() => setApproving(null)} onDone={done} />}
      {turningDown && <TurnDownModal file={turningDown} onClose={() => setTurningDown(null)} onDone={done} />}
    </section>
  );
}

function ApproveModal({ file, onClose, onDone }: { file: ContributionForReview; onClose: () => void; onDone: () => void }) {
  const [title, setTitle] = useState(file.title);
  const [year, setYear] = useState(file.year ?? '');
  const [session, setSession] = useState<'odd' | 'even'>(file.session ?? 'odd');
  const [unit, setUnit] = useState(file.unit ? String(file.unit) : '');
  const [premium, setPremium] = useState(false);
  const [credits, setCredits] = useState(String(file.duplicate ? 0 : CREDITS_PER_FILE));
  const [progress, setProgress] = useState('');
  const [error, setError] = useState('');

  const approve = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setProgress('Starting…');
    try {
      await approveFile(
        file.id,
        {
          title,
          year: file.type === 'pyq' ? year : null,
          session: file.type === 'pyq' ? session : null,
          unit: file.type === 'notes' && unit ? Number(unit) : null,
          premium,
          credits: Number(credits),
        },
        setProgress
      );
      onDone();
    } catch (err) {
      setError(errorText(err));
      setProgress('');
    }
  };

  return (
    <AdminModal title="Approve this file" onClose={onClose}>
      <form onSubmit={approve} className="space-y-4">
        <div>
          <label className="label" htmlFor="approve-title">Title students will see</label>
          <input id="approve-title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} required />
        </div>
        {file.type === 'pyq' ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="approve-year">Academic year</label>
              <input id="approve-year" className="input" value={year} onChange={(e) => setYear(e.target.value)} placeholder="2024-25" required />
            </div>
            <div>
              <label className="label" htmlFor="approve-session">Semester</label>
              <select id="approve-session" className="input" value={session} onChange={(e) => setSession(e.target.value as 'odd' | 'even')}>
                <option value="odd">Odd</option>
                <option value="even">Even</option>
              </select>
            </div>
          </div>
        ) : (
          <div>
            <label className="label" htmlFor="approve-unit">Unit (leave empty for several units)</label>
            <input id="approve-unit" className="input" type="number" min={1} max={20} value={unit} onChange={(e) => setUnit(e.target.value)} />
          </div>
        )}
        <div>
          <label className="label" htmlFor="approve-credits">Credits to pay</label>
          <input id="approve-credits" className="input" type="number" min={0} max={MAX_CREDITS_PER_FILE} value={credits} onChange={(e) => setCredits(e.target.value)} required />
          {file.duplicate && <p className="mt-1 text-xs text-ink-muted">This paper is already on the site, so credits are set to 0.</p>}
        </div>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" checked={premium} onChange={(e) => setPremium(e.target.checked)} /> Premium (needs a pass)
        </label>
        <p className="text-xs leading-relaxed text-ink-muted">
          Approving makes a clean copy holding only pictures of each page, removing anything hidden in the file. The student&apos;s original is then deleted.
        </p>
        <ErrorNote message={error} />
        {progress && <p className="text-sm font-semibold text-brand">{progress}</p>}
        <button type="submit" disabled={!!progress} className="btn btn-primary w-full">
          Approve and publish
        </button>
      </form>
    </AdminModal>
  );
}

// Rejecting a waiting file, or removing one that was already approved
function TurnDownModal({ file, onClose, onDone }: { file: ContributionForReview; onClose: () => void; onDone: () => void }) {
  const removing = file.status === 'approved';
  const [reason, setReason] = useState('');
  const [deliberate, setDeliberate] = useState(removing);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setBusy(true);
    try {
      await (removing ? removeFile : rejectFile)(file.id, reason, deliberate);
      onDone();
    } catch (err) {
      setError(errorText(err));
      setBusy(false);
    }
  };

  return (
    <AdminModal title={removing ? 'Remove this file from the site' : 'Reject this file'} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        {removing && <p className="text-sm text-ink-muted">The file comes off the site and its {file.creditsAwarded} credits are taken back.</p>}
        <div className="flex flex-wrap gap-1.5">
          {REJECT_REASONS.map((preset) => (
            <button
              key={preset.text}
              type="button"
              className="chip"
              data-active={reason === preset.text}
              onClick={() => {
                setReason(preset.text);
                setDeliberate(preset.deliberate);
              }}
            >
              {preset.text}
            </button>
          ))}
        </div>
        <div>
          <label className="label" htmlFor="turn-down-reason">Reason (the student sees this)</label>
          <textarea id="turn-down-reason" className="input" rows={2} maxLength={300} value={reason} onChange={(e) => setReason(e.target.value)} required />
        </div>
        <label className="flex items-start gap-2 text-sm text-ink">
          <input type="checkbox" className="mt-1" checked={deliberate} onChange={(e) => setDeliberate(e.target.checked)} />
          <span>
            Deliberately fake or copied: give a strike
            <span className="block text-xs text-ink-muted">1st: warning. 2nd: no uploads for 30 days. 3rd: no more uploads. Leave unticked for honest mistakes.</span>
          </span>
        </label>
        <ErrorNote message={error} />
        <button type="submit" disabled={busy} className="btn btn-danger w-full">
          {busy ? 'Saving…' : removing ? 'Remove from the site' : 'Reject'}
        </button>
      </form>
    </AdminModal>
  );
}
