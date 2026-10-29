import Icon from './Icon';

const WATERMARK_ROWS = 7;

// A still of the on-site reader (see PremiumReader.tsx): the header it shows, and a page with the
// reader's email watermark across it. Pages stay white in both themes, as they do in the reader.
export default function ReaderPreview() {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface shadow-lift" aria-label="What a note looks like in the reader">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <Icon name="arrow_back" size={18} className="text-ink-muted" />
        <span className="code code-brand">BCS301</span>
        <span className="min-w-0 truncate text-sm font-semibold text-ink">Data Structure · Unit 1</span>
        <span className="ml-auto hidden items-center gap-1 text-[11px] font-semibold text-sun-ink sm:flex">
          <Icon name="workspace_premium" size={14} /> Premium · read-only
        </span>
      </div>

      <div className="bg-surface-muted p-4 sm:p-5">
        {/* Extra room at the foot of the page for the photo stuck on the corner (app/page.tsx) */}
        <div className="relative overflow-hidden rounded-md bg-white px-5 pb-20 pt-5 text-[#1f2937] shadow-soft">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex -rotate-[24deg] scale-150 flex-col justify-around">
            {Array.from({ length: WATERMARK_ROWS }, (_, row) => (
              <p key={row} className={`whitespace-nowrap text-xs font-semibold text-[#1d4ed8]/10 ${row % 2 ? 'pl-16' : ''}`}>
                you@gmail.com · Next Engineer &nbsp;&nbsp; you@gmail.com · Next Engineer &nbsp;&nbsp; you@gmail.com · Next Engineer
              </p>
            ))}
          </div>

          <div className="relative">
            <p className="font-mono text-[10px] font-semibold tracking-wider text-[#6b7280]">UNIT 1 · ARRAYS AND LINKED LISTS</p>
            <p className="mt-1 font-display text-base font-bold">1.1 Arrays</p>
            <p className="mt-1.5 text-xs leading-relaxed">
              An array keeps elements of one type in consecutive memory, so any element is reached by its index in O(1).
              Inserting in the middle shifts everything after it, which costs O(n).
            </p>
            <p className="mt-2 rounded bg-[#f3f4f6] px-2 py-1.5 font-mono text-[11px]">address(A[i]) = base + i × size</p>
            <p className="mt-3 font-display text-base font-bold">1.2 Singly linked list</p>
            <p className="mt-1.5 text-xs leading-relaxed">
              Each node holds its data and a pointer to the next node. Inserting after a known node is O(1), but reaching
              the k-th node means walking the list.
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
