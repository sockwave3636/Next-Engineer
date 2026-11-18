'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LiveList, LiveMap } from '@liveblocks/client';
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from '@liveblocks/react/suspense';
import { useErrorListener } from '@liveblocks/react';
import { useAuth } from '@/app/context/AuthContext';
import { useAuthPrompt } from '@/app/context/AuthPromptContext';
import Icon from '@/app/components/Icon';
import { authorizeRoom, BoardError, openBoard } from '@/lib/boards/client';
import '@/lib/boards/liveblocks';
import { BoardSummary, roomIdFor } from '@/lib/boards/types';
import Canvas from './_canvas/Canvas';

// Signs the student in, checks they may open the board (joining it if it's shared by link),
// then connects to the board's live room
export default function BoardRoom({ id }: { id: string }) {
  const { user, loading } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const [board, setBoard] = useState<BoardSummary | null>(null);
  const [live, setLive] = useState(true);
  const [problem, setProblem] = useState<{ title: string; text: string } | null>(null);
  const uid = user?.uid;

  // Liveblocks adds its "Powered by Liveblocks" badge to the page once a board connects and never
  // takes it away, so without this it follows the student onto every page they open next
  useEffect(() => () => document.getElementById('liveblocks-badge')?.remove(), []);

  useEffect(() => {
    if (!uid) return;
    let cancelled = false;
    openBoard(id).then(
      (result) => {
        if (cancelled) return;
        setBoard(result.board);
        setLive(result.live);
      },
      (err) => {
        if (cancelled) return;
        const status = err instanceof BoardError ? err.status : 0;
        setProblem({
          title: status === 404 ? 'Board not found' : status === 403 ? 'You can’t open this board' : 'Could not open the board',
          text: err instanceof Error ? err.message : 'Please try again.',
        });
      }
    );
    return () => {
      cancelled = true;
    };
  }, [id, uid]);

  if (loading) return <BoardLoading />;

  if (!user) {
    return (
      <Notice icon="draw" title="Sign in to open this board" text="Study boards are free. Sign in with Google or email to draw with your classmates.">
        <button type="button" onClick={() => openAuthPrompt({ reason: 'Sign in to open this study board' })} className="btn btn-primary mt-4">
          Sign in
        </button>
      </Notice>
    );
  }

  if (problem) return <Notice icon="lock" title={problem.title} text={problem.text} />;
  if (!board) return <BoardLoading />;
  if (!live) {
    return <Notice icon="schedule" title="Drawing opens shortly" text="Study boards are being switched on. Your board is saved; come back in a little while." />;
  }

  return (
    <LiveblocksProvider authEndpoint={authorizeRoom} throttle={16}>
      <RoomProvider
        id={roomIdFor(board.id)}
        initialPresence={{ cursor: null, selection: [], pencilDraft: null, penColor: null }}
        initialStorage={{ layers: new LiveMap(), layerIds: new LiveList([]) }}
      >
        <RoomErrors />
        <ClientSideSuspense fallback={<BoardLoading />}>
          <Canvas board={board} onBoardChange={setBoard} />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

// If the live room refuses us (for example the owner just made the board private), say so
function RoomErrors() {
  const [message, setMessage] = useState('');
  useErrorListener((error) => {
    if (error.context.type === 'ROOM_CONNECTION_ERROR') setMessage(error.message || 'Lost access to this board.');
  });
  if (!message) return null;
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 mx-auto w-fit max-w-[90vw] rounded-lg bg-danger-soft px-4 py-2 text-sm font-semibold text-danger-ink shadow-lift" role="alert">
      {message}
    </div>
  );
}

function BoardLoading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-[#f8fafc]">
      <p className="flex items-center gap-2 text-sm text-slate-500">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-600" aria-hidden="true" /> Opening the board…
      </p>
    </div>
  );
}

function Notice({ icon, title, text, children }: { icon: 'draw' | 'lock' | 'schedule'; title: string; text: string; children?: React.ReactNode }) {
  return (
    <div className="grid min-h-screen place-items-center bg-page px-4">
      <section className="card card-pad flex max-w-md flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name={icon} size={26} />
        </span>
        <h1 className="mt-3 font-display text-lg font-semibold text-ink">{title}</h1>
        <p className="mt-1 text-sm text-ink-muted">{text}</p>
        {children}
        <Link href="/boards" className="btn btn-ghost btn-sm mt-4">
          <Icon name="arrow_back" size={16} /> All boards
        </Link>
      </section>
    </div>
  );
}
