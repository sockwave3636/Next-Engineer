'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { rememberOpened, takeReadParam } from '@/lib/history/client';
import { useAuth } from '@/app/context/AuthContext';
import { useAuthPrompt } from '@/app/context/AuthPromptContext';
import { useReadWithoutAccount } from '@/app/context/ReadWithoutAccountContext';
import { usePasses } from '@/app/context/PassContext';
import Icon from '@/app/components/Icon';
import PremiumReader from '@/app/components/PremiumReader';
import { formatBytes, formatRupees, scopeKey } from '@/lib/catalog/types';
import { buyPass, CheckoutDismissedError, downloadProjectFiles, projectDocumentSource } from '@/lib/premium-client';
import type { Project, ProjectDocument } from '@/lib/projects/types';

interface ProjectAccessProps {
  project: Pick<Project, 'id' | 'title' | 'price' | 'documents' | 'download' | 'aiGenerated'> & {
    // Shown next to the title in the reader
    code: string;
  };
  // The admin panel's master lock: nothing can be bought or opened
  locked: boolean;
  // Whether students pay for projects; while false, signing in opens everything
  charging: boolean;
}

const errorText = (error: unknown) => (error instanceof Error ? error.message : 'Something went wrong. Please try again.');

function LockedMark() {
  return (
    <span title="Opens after you buy the project">
      <Icon name="lock" size={18} className="text-ink-faint" />
      <span className="sr-only">Locked</span>
    </span>
  );
}

// Price, Buy button and the project's files. Documents open in the read-only reader; the zip
// downloads through a short-lived link. The server re-checks access on every request.
export default function ProjectAccess({ project, locked, charging }: ProjectAccessProps) {
  const { user, loading } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const { activeUntil } = usePasses();
  const readWithoutAccount = useReadWithoutAccount();
  const [buying, setBuying] = useState(false);
  const [justBought, setJustBought] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const [reading, setReading] = useState<ProjectDocument | null>(null);

  const owned = !!user?.isOwner || activeUntil(scopeKey({ type: 'project', projectId: project.id })) !== null;
  const unlocked = owned || !charging;
  const canOpen = (doc: Pick<ProjectDocument, 'free'>) => !locked && (doc.free || unlocked);

  const readerSource = useMemo(() => (reading ? projectDocumentSource(project.id, reading.id) : null), [project.id, reading]);
  const closeReader = useCallback(() => setReading(null), []);

  const buy = async () => {
    if (!user) {
      openAuthPrompt({ reason: 'Sign in to buy this project' });
      return;
    }
    setError('');
    setBuying(true);
    try {
      await buyPass({ type: 'project', projectId: project.id }, { name: user.name, email: user.email });
      setJustBought(true);
    } catch (err) {
      if (!(err instanceof CheckoutDismissedError)) setError(errorText(err));
    } finally {
      setBuying(false);
    }
  };

  const open = (doc: ProjectDocument) => {
    if (!user && !readWithoutAccount) {
      openAuthPrompt({ reason: doc.free || !charging ? `Sign in to read the ${doc.title.toLowerCase()}, free` : 'Sign in to open this project' });
      return;
    }
    setReading(doc);
    // Adds it to the student's reading history (skipped for visitors without an account)
    rememberOpened({
      kind: 'project',
      itemId: `${project.id}-${doc.id}`,
      title: doc.title,
      context: project.title,
      label: 'Mini project',
      page: window.location.pathname,
      readId: doc.id,
    });
  };

  // A link from the History page (?read=<document id>) opens that document once sign-in has
  // loaded. The id is taken off the address as it's used, so it opens once.
  useEffect(() => {
    if (loading) return;
    const id = takeReadParam();
    const doc = id ? project.documents.find((d) => d.id === id) : undefined;
    if (doc && canOpen(doc)) open(doc);
    // open and canOpen read the signed-in user, which is settled once loading is false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const download = async () => {
    if (!user && !readWithoutAccount) {
      openAuthPrompt({ reason: 'Sign in to download the project files' });
      return;
    }
    setError('');
    setDownloading(true);
    try {
      await downloadProjectFiles(project.id);
    } catch (err) {
      setError(errorText(err));
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div id="project-buy" className="card p-5 sm:p-6">
      {owned ? (
        <div className="flex items-start gap-3 rounded-xl bg-leaf-soft p-4">
          <Icon name="check_circle" size={26} className="shrink-0 text-leaf" filled />
          <div>
            <p className="font-display font-semibold text-leaf-ink">
              {justBought ? 'Payment received. This project is yours.' : user?.isOwner ? 'Owner account: everything is open' : 'You own this project'}
            </p>
            <p className="mt-0.5 text-sm text-leaf-ink/80">Read the guide here and download the files below. It never expires.</p>
          </div>
        </div>
      ) : locked ? (
        <div className="flex items-start gap-3 rounded-xl bg-surface-muted p-4">
          <Icon name="lock" size={24} className="shrink-0 text-ink-muted" />
          <div>
            <p className="font-display font-semibold text-ink">Projects are locked for now</p>
            <p className="mt-0.5 text-sm text-ink-muted">Please check back later.</p>
          </div>
        </div>
      ) : !charging ? (
        <div className="flex items-start gap-3 rounded-xl bg-leaf-soft p-4">
          <Icon name="lock_open" size={26} className="shrink-0 text-leaf" />
          <div>
            <p className="font-display font-semibold text-leaf-ink">This project is free</p>
            <p className="mt-0.5 text-sm text-leaf-ink/80">
              {user || readWithoutAccount ? 'Read the guide here and download the files below.' : 'Sign in to read the guide and download the files.'}
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className="font-display text-[2rem] font-extrabold leading-9 tracking-tight text-ink">
            {formatRupees(project.price)}
            <span className="ml-1.5 font-sans text-sm font-medium text-ink-muted">once, yours to keep</span>
          </p>
          <button type="button" onClick={buy} disabled={buying} className="btn btn-amber btn-lg mt-4 w-full">
            <Icon name="lock_open" size={20} />
            {buying ? 'Processing…' : 'Buy this project'}
          </button>
          <p className="mt-2 text-center text-[11px] font-semibold text-ink-faint">Secure checkout by Razorpay · UPI accepted</p>
        </>
      )}

      {error && <div className="alert alert-error mt-4">{error}</div>}

      {(project.documents.length > 0 || project.download) && (
        <h2 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-faint">What&apos;s included</h2>
      )}
      <ul className="mt-2 divide-y divide-line">
        {project.documents.map((doc) => (
          <li key={doc.id} className="flex items-center gap-3 py-3">
            <Icon name="description" size={22} className="shrink-0 text-brand" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{doc.title}</p>
              <p className="text-xs text-ink-muted">
                PDF{doc.sizeBytes ? ` · ${formatBytes(doc.sizeBytes)}` : ''}
                {doc.free && !unlocked ? ' · free to read' : ''}
              </p>
            </div>
            {canOpen(doc) ? (
              <button type="button" onClick={() => open(doc)} className="btn btn-soft btn-sm">
                Read
              </button>
            ) : (
              <LockedMark />
            )}
          </li>
        ))}
        {project.download && (
          <li className="py-3">
            <div className="flex items-center gap-3">
              <Icon name="folder_zip" size={22} className="shrink-0 text-brand" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">Project files</p>
                <p className="text-xs text-ink-muted">
                  ZIP{project.download.sizeBytes ? ` · ${formatBytes(project.download.sizeBytes)}` : ''}
                </p>
              </div>
              {unlocked && !locked ? (
                <button type="button" onClick={download} disabled={downloading} className="btn btn-primary btn-sm">
                  <Icon name="download" size={16} />
                  {downloading ? 'Starting…' : 'Download'}
                </button>
              ) : (
                <LockedMark />
              )}
            </div>
            {project.download.contents.length > 0 && (
              <ul className="ml-9 mt-2 space-y-1 text-xs text-ink-muted">
                {project.download.contents.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span aria-hidden="true">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}
      </ul>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        {charging && 'One-time payment, no renewals. '}
        {project.aiGenerated && 'Written and built with AI, then run and checked. '}
        {charging ? (
          <>
            By buying you agree to the <Link href="/terms" className="link">Terms</Link> and{' '}
            <Link href="/refund-policy" className="link">Refund Policy</Link>.
          </>
        ) : (
          <>
            By using it you agree to the <Link href="/terms" className="link">Terms</Link>.
          </>
        )}
      </p>

      {reading && readerSource && (
        <PremiumReader
          title={reading.title}
          code={project.code || undefined}
          premium={charging && !reading.free}
          aiGenerated={project.aiGenerated}
          source={readerSource}
          watermark={user?.email || 'Next Engineer'}
          onClose={closeReader}
        />
      )}
    </div>
  );
}
