'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useOthers, useSelf, useStatus } from '@liveblocks/react/suspense';
import Icon from '@/app/components/Icon';
import { boardLink, updateBoard } from '@/lib/boards/client';
import { connectionIdToColor } from '@/lib/boards/geometry';
import { BOARD_TITLE_MAX, BoardSummary } from '@/lib/boards/types';

const MAX_FACES = 4;

// Top of the board: back to the list, the board's name, sharing, who's here and the connection
export default function TopBar({ board, onBoardChange }: { board: BoardSummary; onBoardChange: (board: BoardSummary) => void }) {
  const [renaming, setRenaming] = useState(false);
  const [name, setName] = useState(board.title);
  const [sharingOpen, setSharingOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const status = useStatus();

  const save = async (change: { title?: string; shared?: boolean }) => {
    setBusy(true);
    setError('');
    try {
      onBoardChange(await updateBoard(board.id, change));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save. Please try again.');
      return false;
    } finally {
      setBusy(false);
    }
  };

  const rename = async (event: FormEvent) => {
    event.preventDefault();
    if (await save({ title: name })) setRenaming(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(boardLink(board.id));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Could not copy. Copy the address from your browser instead.');
    }
  };

  return (
    <div className="pointer-events-none absolute inset-x-2 top-2 z-20 flex items-start justify-between gap-2" onPointerDown={(e) => e.stopPropagation()}>
      <div className="pointer-events-auto flex min-w-0 items-center gap-1 rounded-xl border border-line bg-surface p-1.5 shadow-lift">
        <Link href="/boards" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink hover:bg-surface-muted" aria-label="All boards" title="All boards">
          <Icon name="arrow_back" size={20} />
        </Link>
        {renaming ? (
          <form onSubmit={rename} className="flex items-center gap-1">
            <input
              className="input w-44 py-1 text-sm sm:w-64"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={BOARD_TITLE_MAX}
              aria-label="Board name"
              autoFocus
            />
            <button type="submit" disabled={busy || !name.trim()} className="grid h-9 w-9 place-items-center rounded-lg text-ink hover:bg-surface-muted" aria-label="Save name">
              <Icon name="check" size={18} />
            </button>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => board.isOwner && setRenaming(true)}
            className={`max-w-[38vw] truncate rounded-lg px-2 py-1.5 text-left font-display text-sm font-semibold text-ink sm:max-w-xs ${board.isOwner ? 'hover:bg-surface-muted' : 'cursor-default'}`}
            title={board.isOwner ? 'Rename' : board.title}
          >
            {board.title}
          </button>
        )}
        {status !== 'connected' && status !== 'initial' && (
          <span className="badge badge-sun shrink-0">
            <Icon name="wifi_off" size={12} /> {status === 'connecting' ? 'Connecting' : 'Reconnecting'}
          </span>
        )}
      </div>

      <div className="pointer-events-auto relative flex items-center gap-1.5 rounded-xl border border-line bg-surface p-1.5 shadow-lift">
        <Faces />
        {(board.isOwner || board.shared) && (
          <button type="button" onClick={() => setSharingOpen((open) => !open)} className="btn btn-primary btn-sm" aria-expanded={sharingOpen}>
            <Icon name="share" size={16} /> <span className="hidden sm:inline">Share</span>
          </button>
        )}

        {sharingOpen && (
          <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-line bg-surface p-4 shadow-float">
            <p className="font-display font-semibold text-ink">{board.shared ? 'Anyone with the link can join' : 'Only you can open this board'}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {board.shared
                ? 'Classmates sign in, then draw with you live.'
                : 'Turn on sharing, then send the link to your classmates.'}
            </p>
            {board.shared && (
              <button type="button" onClick={copyLink} className="btn btn-soft btn-sm mt-3 w-full">
                <Icon name={copied ? 'check' : 'content_copy'} size={16} /> {copied ? 'Link copied' : 'Copy link'}
              </button>
            )}
            {board.isOwner && (
              <button type="button" onClick={() => save({ shared: !board.shared })} disabled={busy} className={`btn btn-sm mt-2 w-full ${board.shared ? 'btn-ghost' : 'btn-primary'}`}>
                <Icon name={board.shared ? 'lock' : 'link'} size={16} /> {board.shared ? 'Stop sharing' : 'Turn on sharing'}
              </button>
            )}
          </div>
        )}
      </div>

      {error && (
        <div className="pointer-events-auto absolute left-0 top-full mt-2 max-w-sm rounded-lg bg-danger-soft px-3 py-2 text-sm font-semibold text-danger-ink shadow-lift" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

// Who's on the board right now, me last
function Faces() {
  const others = useOthers();
  const me = useSelf();
  const shown = others.slice(0, MAX_FACES - 1);
  const more = others.length - shown.length;

  return (
    <div className="flex -space-x-2 pr-1" aria-label={`${others.length + 1} on this board`}>
      {shown.map(({ connectionId, info }) => (
        <Face key={connectionId} name={info?.name || 'Student'} color={connectionIdToColor(connectionId)} />
      ))}
      {more > 0 && <Face name={`${more} more`} label={`+${more}`} color="#64748b" />}
      {me && <Face name={`${me.info?.name || 'You'} (you)`} color={connectionIdToColor(me.connectionId)} />}
    </div>
  );
}

function Face({ name, color, label }: { name: string; color: string; label?: string }) {
  return (
    <span
      className="grid h-8 w-8 place-items-center rounded-full border-2 border-surface text-xs font-bold text-white"
      style={{ backgroundColor: color }}
      title={name}
    >
      {label ?? name.trim().charAt(0).toUpperCase()}
    </span>
  );
}
