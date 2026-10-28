export default function LoadingState({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center" role="status">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-soft border-t-brand" aria-hidden="true" />
      <span className="text-sm font-bold text-ink-muted">{label}</span>
    </div>
  );
}
