'use client';

import type { PassSettings } from '@/lib/catalog/types';
import { formatRupees } from '@/lib/catalog/types';

export function SectionHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-black text-ink">{title}</h2>
        {description && <p className="mt-1 text-sm text-ink-muted">{description}</p>}
      </div>
      {action && <div className="flex shrink-0 flex-wrap gap-2 whitespace-nowrap">{action}</div>}
    </div>
  );
}

export function EmptyState({ icon, title, text, action }: { icon: string; title: string; text: string; action?: React.ReactNode }) {
  return (
    <div className="card card-pad text-center">
      <p className="text-4xl" aria-hidden="true">{icon}</p>
      <p className="mt-3 text-lg font-extrabold text-ink">{title}</p>
      <p className="mt-1 text-ink-muted">{text}</p>
      {action && <div className="mt-5 flex justify-center gap-2">{action}</div>}
    </div>
  );
}

// Forms close only through their buttons, so a stray click outside doesn't discard typing
export function AdminModal({
  title,
  onClose,
  wide = false,
  children,
}: {
  title: string;
  onClose: () => void;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="modal-backdrop">
      <div className={`modal ${wide ? 'max-w-3xl' : ''}`} role="dialog" aria-modal="true" aria-label={title}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-ink">{title}</h3>
          <button type="button" onClick={onClose} className="btn btn-ghost h-9 w-9 shrink-0 rounded-full p-0" aria-label="Close">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ErrorNote({ message }: { message: string }) {
  return message ? <div className="alert alert-error">{message}</div> : null;
}

// Errors from list actions (delete, restore…) float at the top of the screen, so they're seen
// even when the button that failed is far down the page
export function FloatingError({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  if (!message) return null;
  return (
    <div className="fixed inset-x-0 top-20 z-50 flex justify-center px-4" role="alert">
      <div className="alert alert-error flex w-full max-w-xl items-start gap-3 shadow-float">
        <span className="flex-1">{message}</span>
        <button type="button" onClick={onDismiss} className="shrink-0 font-bold" aria-label="Dismiss">
          ✕
        </button>
      </div>
    </div>
  );
}

export const errorText = (error: unknown) => (error instanceof Error ? error.message : 'Something went wrong. Please try again.');

export function passSummary(pass: PassSettings | undefined): string {
  return pass?.enabled ? `⭐ ${formatRupees(pass.price)} / ${pass.durationDays} days` : 'No pass';
}

// "3 of 8 semesters on sale, from ₹99" for a branch's semester passes
export function semesterPassSummary(passes: Record<string, PassSettings> | undefined, semesters: number): string {
  const onSale = Object.entries(passes ?? {}).filter(([semester, pass]) => pass.enabled && Number(semester) <= semesters);
  if (onSale.length === 0) return 'No semester passes';
  const cheapest = Math.min(...onSale.map(([, pass]) => pass.price));
  return `⭐ ${onSale.length} of ${semesters} semesters on sale, from ${formatRupees(cheapest)}`;
}

// Price + duration editor for a subject or semester pass
export function PassFields({
  value,
  onChange,
  label,
  idPrefix,
}: {
  value: PassSettings;
  onChange: (pass: PassSettings) => void;
  label: string;
  idPrefix: string;
}) {
  return (
    <div className="space-y-3 rounded-2xl bg-surface-muted p-4">
      <label className="flex items-center gap-2 text-sm font-bold text-ink">
        <input
          type="checkbox"
          className="h-4 w-4 accent-brand"
          checked={value.enabled}
          onChange={(e) => onChange({ ...value, enabled: e.target.checked })}
        />
        {label}
      </label>
      {value.enabled && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${idPrefix}-price`} className="label">Price (₹)</label>
            <input
              id={`${idPrefix}-price`}
              type="number"
              min={1}
              step={1}
              value={value.price || ''}
              onChange={(e) => onChange({ ...value, price: Number(e.target.value) })}
              className="input"
              placeholder="49"
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-days`} className="label">Valid for (days)</label>
            <input
              id={`${idPrefix}-days`}
              type="number"
              min={1}
              step={1}
              value={value.durationDays || ''}
              onChange={(e) => onChange({ ...value, durationDays: Number(e.target.value) })}
              className="input"
              placeholder="180"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function validatePass(pass: PassSettings): string | null {
  if (!pass.enabled) return null;
  if (!Number.isInteger(pass.price) || pass.price < 1) return 'Enter the pass price in whole rupees (at least ₹1).';
  if (!Number.isInteger(pass.durationDays) || pass.durationDays < 1) return 'Enter how many days the pass lasts.';
  return null;
}

export const EMPTY_PASS: PassSettings = { enabled: false, price: 0, durationDays: 180 };
