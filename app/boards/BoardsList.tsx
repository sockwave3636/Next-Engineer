'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';
import Icon from '../components/Icon';
import { boardLink, createBoard, deleteOrLeaveBoard, listBoards, updateBoard } from '@/lib/boards/client';
import { BOARD_TITLE_MAX, BoardSummary, MAX_BOARDS_PER_OWNER } from '@/lib/boards/types';

const errorText = (error: unknown) => (error instanceof Error ? error.message : 'Something went wrong. Please try again.');

function openedLabel(ms: number): string {
  if (!ms) return '';
  const days = Math.floor((Date.now() - ms) / 86400000);
  if (days <= 0) return 'Opened today';
  if (days === 1) return 'Opened yesterday';
  if (days < 30) return `Opened ${days} days ago`;
  return `Opened ${new Date(ms).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}`;
}

// The signed-in student's boards: make one, open, rename, share by link, delete or leave
export default function BoardsList() {
  const { user, loading } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const router = useRouter();
  const [boards, setBoards] = useState<BoardSummary[] | null>(null);
  const [live, setLive] = useState(true);
  const [title, setTitle] = useState('');
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');
  const uid = user?.uid;

  useEffect(() => {
    if (!uid) return;
    let cancelled = false;
    listBoards().then(
      (result) => {
        if (cancelled) return;
        setBoards(result.boards);
        setLive(result.live);
      },
      (err) => !cancelled && setError(errorText(err))
    );
    return () => {
      cancelled = true;
    };
  }, [uid]);

  const create = async (event: FormEvent) => {
    event.preventDefault();
    setCreating(true);
    setError('');
    try {
      const board = await createBoard(title);
      router.push(`/boards/${board.id}`);
    } catch (err) {
      setError(errorText(err));
      setCreating(false);
    }
  };

  const replace = (board: BoardSummary) => setBoards((list) => list?.map((b) => (b.id === board.id ? board : b)) ?? null);
  const drop = (id: string) => setBoards((list) => list?.filter((b) => b.id !== id) ?? null);

  if (loading) return null;

  if (!user) {
    return (
      <section className="card card-pad flex flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name="draw" size={26} />
        </span>
        <p className="mt-3 font-display text-lg font-semibold text-ink">Sign in to make a study board</p>
        <p className="mt-1 max-w-md text-sm text-ink-muted">Boards are free. Sign in with Google or email, then share your board with classmates.</p>
        <button type="button" onClick={() => openAuthPrompt({ reason: 'Sign in to use study boards' })} className="btn btn-primary mt-4">
          Sign in
        </button>
      </section>
    );
  }

  const mine = boards?.filter((b) => b.isOwner) ?? [];
  const shared = boards?.filter((b) => !b.isOwner) ?? [];

  return (
    <div className="space-y-8">
      {!live && (
        <div className="alert border-sun/40 bg-sun-soft font-normal text-sun-ink">
          Study boards are being switched on. You can make boards now; drawing on them opens shortly.
        </div>
      )}

      <form onSubmit={create} className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-end sm:p-5">
        <div className="min-w-0 flex-1">
          <label htmlFor="board-title" className="label">
            New board
          </label>
          <input
            id="board-title"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={BOARD_TITLE_MAX}
            placeholder="For example: BCS301 Unit 2 trees"
            required
          />
        </div>
        <button type="submit" disabled={creating || !title.trim()} className="btn btn-primary">
          <Icon name="add" size={18} /> {creating ? 'Creating…' : 'Create board'}
        </button>
      </form>

      {error && <div className="alert alert-error">{error}</div>}

      {!boards ? (
        !error && <p className="text-sm text-ink-muted">Loading your boards…</p>
      ) : (
        <>
          <BoardGroup
            title="Your boards"
            note={`${mine.length} of ${MAX_BOARDS_PER_OWNER}`}
            empty="You haven’t made a board yet. Give one a name above."
            boards={mine}
            onChange={replace}
            onRemove={drop}
            onError={setError}
          />
          {shared.length > 0 && (
            <BoardGroup title="Shared with you" boards={shared} onChange={replace} onRemove={drop} onError={setError} />
          )}
        </>
      )}
    </div>
  );
}

interface GroupProps {
  title: string;
  note?: string;
  empty?: string;
  boards: BoardSummary[];
  onChange: (board: BoardSummary) => void;
  onRemove: (id: string) => void;
  onError: (message: string) => void;
}

function BoardGroup({ title, note, empty, boards, onChange, onRemove, onError }: GroupProps) {
  return (
    <section aria-label={title}>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
        {note && <span className="text-xs text-ink-faint">{note}</span>}
      </div>
      {boards.length === 0 ? (
        <p className="text-sm text-ink-muted">{empty}</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {boards.map((board) => (
            <BoardCard key={board.id} board={board} onChange={onChange} onRemove={onRemove} onError={onError} />
          ))}
        </ul>
      )}
    </section>
  );
}

interface CardProps {
  board: BoardSummary;
  onChange: (board: BoardSummary) => void;
  onRemove: (id: string) => void;
  onError: (message: string) => void;
}

function BoardCard({ board, onChange, onRemove, onError }: CardProps) {
  const [renaming, setRenaming] = useState(false);
  const [name, setName] = useState(board.title);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    onError('');
    try {
      await action();
    } catch (err) {
      onError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const rename = (event: FormEvent) => {
    event.preventDefault();
    run(async () => {
      onChange(await updateBoard(board.id, { title: name }));
      setRenaming(false);
    });
  };

  const toggleSharing = () =>
    run(async () => {
      if (board.shared && !confirm('Stop sharing? Classmates who opened the link lose access until you share it again.')) return;
      onChange(await updateBoard(board.id, { shared: !board.shared }));
    });

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(boardLink(board.id));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      onError('Could not copy the link. Open the board and copy the address from your browser.');
    }
  };

  const remove = () =>
    run(async () => {
      const question = board.isOwner
        ? `Delete “${board.title}”? Everything drawn on it is deleted for everyone, and this can’t be undone.`
        : `Leave “${board.title}”? It disappears from your list. You can join again from the link while it’s shared.`;
      if (!confirm(question)) return;
      await deleteOrLeaveBoard(board.id);
      onRemove(board.id);
    });

  return (
    <li className="card flex flex-col p-4">
      {renaming ? (
        <form onSubmit={rename} className="flex gap-2">
          <input
            className="input min-w-0 flex-1 py-1.5 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={BOARD_TITLE_MAX}
            aria-label="Board name"
            autoFocus
          />
          <button type="submit" disabled={busy || !name.trim()} className="btn btn-primary btn-sm" aria-label="Save name">
            <Icon name="check" size={16} />
          </button>
          <button
            type="button"
            onClick={() => {
              setRenaming(false);
              setName(board.title);
            }}
            className="btn btn-ghost btn-sm"
            aria-label="Cancel renaming"
          >
            <Icon name="close" size={16} />
          </button>
        </form>
      ) : (
        <Link href={`/boards/${board.id}`} className="group flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-ink">
            <Icon name="draw" size={20} />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-semibold text-ink group-hover:text-brand">{board.title}</span>
            <span className="block text-xs text-ink-muted">
              {board.isOwner ? openedLabel(board.lastOpenedAt) : `By ${board.ownerName} · ${openedLabel(board.lastOpenedAt)}`}
            </span>
          </span>
        </Link>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className={`badge ${board.shared ? 'badge-leaf' : 'badge-muted'}`}>
          <Icon name={board.shared ? 'link' : 'lock'} size={12} /> {board.shared ? 'Shared by link' : 'Private'}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line pt-3">
        {board.shared && (
          <button type="button" onClick={copyLink} className="btn btn-soft btn-sm">
            <Icon name={copied ? 'check' : 'content_copy'} size={14} /> {copied ? 'Copied' : 'Copy link'}
          </button>
        )}
        {board.isOwner && (
          <>
            <button type="button" onClick={toggleSharing} disabled={busy} className="btn btn-ghost btn-sm">
              <Icon name={board.shared ? 'lock' : 'share'} size={14} /> {board.shared ? 'Stop sharing' : 'Share'}
            </button>
            <button type="button" onClick={() => setRenaming(true)} disabled={busy} className="btn btn-ghost btn-sm">
              <Icon name="edit" size={14} /> Rename
            </button>
          </>
        )}
        <button type="button" onClick={remove} disabled={busy} className="btn btn-ghost btn-sm text-danger-ink">
          <Icon name={board.isOwner ? 'delete' : 'logout'} size={14} /> {board.isOwner ? 'Delete' : 'Leave'}
        </button>
      </div>
    </li>
  );
}
