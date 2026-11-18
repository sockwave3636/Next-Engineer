'use client';

import { useCallback, useEffect, useState } from 'react';

// A short walkthrough of the board, pointing at the real buttons (marked with data-tour). It opens
// by itself the first time a student opens any board, and again from the "?" button.
const DONE_KEY = 'board-tour-done';

interface Step {
  target: string;
  title: string;
  text: string;
}

const STEPS: Step[] = [
  {
    target: 'tools',
    title: 'Pick a tool',
    text: 'Text, sticky note, rectangle, circle or pen. Choose one, then click on the board to place it, or drag to draw with the pen.',
  },
  {
    target: 'select',
    title: 'Move and edit',
    text: 'With Select, drag things to move them, pull the corners to resize, and click a note to type in it. Pick a colour from the bar that appears above it. The Delete key removes it.',
  },
  {
    target: 'hand',
    title: 'Move around the board',
    text: 'The board goes on in every direction. Drag with the hand to move around. On a computer you can scroll too.',
  },
  {
    target: 'undo',
    title: 'Undo anything',
    text: 'Made a mistake? Undo and redo here, or press Ctrl+Z and Ctrl+Shift+Z.',
  },
  {
    target: 'share',
    title: 'Study together',
    text: 'Turn on sharing and send the link to classmates. They sign in and draw with you live.',
  },
  {
    target: 'people',
    title: 'See who’s here',
    text: 'Everyone on the board shows here, and you see their cursors with their names as they move.',
  },
];

type Box = { top: number; left: number; width: number; height: number };

const CARD_WIDTH = 300;
const GAP = 14;

// Opens the walkthrough on a student's first board; `open` and `setOpen` let the "?" button replay it
// (The board only renders in the browser, so localStorage is there on first render.)
export function useBoardTour() {
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem(DONE_KEY) !== '1';
    } catch {
      // Storage blocked: don't keep showing it
      return false;
    }
  });
  const finish = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(DONE_KEY, '1');
    } catch {
      // ignore
    }
  }, []);
  return { open, start: () => setOpen(true), finish };
}

// Where a marked button is on screen, or null if it isn't there
const boxOf = (target: string): Box | null => {
  const r = document.querySelector(`[data-tour="${target}"]`)?.getBoundingClientRect();
  return r ? { top: r.top, left: r.left, width: r.width, height: r.height } : null;
};

export default function BoardTour({ onFinish }: { onFinish: () => void }) {
  const [steps, setSteps] = useState<Step[]>([]);
  const [index, setIndex] = useState(0);
  const [box, setBox] = useState<Box | null>(null);
  const step = steps[index];

  // Looked up just after the board first draws, once its buttons are on screen. Steps whose button
  // isn't there (no Share button on someone else's private board) are skipped.
  useEffect(() => {
    const timer = setTimeout(() => {
      const found = STEPS.filter((s) => boxOf(s.target));
      setSteps(found);
      setBox(found[0] ? boxOf(found[0].target) : null);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (!steps[i]) return;
      setIndex(i);
      setBox(boxOf(steps[i].target));
    },
    [steps]
  );

  // Follow the button if the window changes size
  useEffect(() => {
    const onResize = () => step && setBox(boxOf(step.target));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFinish();
      if (e.key === 'ArrowRight') goTo(index + 1);
      if (e.key === 'ArrowLeft') goTo(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onFinish, goTo, index]);

  if (!step || !box) return null;

  const last = index === steps.length - 1;
  // Beside the button if there's room on the right, otherwise below it; always inside the window
  const width = Math.min(CARD_WIDTH, window.innerWidth - 32);
  const right = box.left + box.width + GAP;
  const besideFits = right + width <= window.innerWidth - 16;
  const cardLeft = besideFits ? right : Math.min(Math.max(16, box.left + box.width - width), window.innerWidth - width - 16);
  const cardTop = besideFits
    ? Math.min(Math.max(16, box.top + box.height / 2 - 90), window.innerHeight - 220)
    : Math.min(box.top + box.height + GAP, window.innerHeight - 220);

  return (
    <div className="fixed inset-0 z-40" onPointerDown={(e) => e.stopPropagation()}>
      {/* Dims everything except the button being explained */}
      <div
        className="pointer-events-none absolute rounded-xl ring-2 ring-white transition-all duration-200"
        style={{
          top: box.top - 6,
          left: box.left - 6,
          width: box.width + 12,
          height: box.height + 12,
          boxShadow: '0 0 0 9999px rgb(15 23 42 / 0.55)',
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="board-tour-title"
        className="absolute rounded-2xl border border-line bg-surface p-5 shadow-float"
        style={{ top: cardTop, left: cardLeft, width }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Step {index + 1} of {steps.length}
        </p>
        <h2 id="board-tour-title" className="mt-1 font-display text-lg font-semibold text-ink">
          {step.title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.text}</p>
        <div className="mt-4 flex items-center gap-2">
          <button type="button" onClick={onFinish} className="btn btn-ghost btn-sm">
            Skip
          </button>
          <span className="flex-1" />
          {index > 0 && (
            <button type="button" onClick={() => goTo(index - 1)} className="btn btn-secondary btn-sm">
              Back
            </button>
          )}
          <button type="button" onClick={() => (last ? onFinish() : goTo(index + 1))} className="btn btn-primary btn-sm" autoFocus>
            {last ? 'Start drawing' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
