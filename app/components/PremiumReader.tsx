'use client';

import { useEffect, useRef, useState } from 'react';
import type { PDFDocumentLoadingTask, PDFDocumentProxy, RenderTask } from 'pdfjs-dist/legacy/build/pdf.mjs';
import type { PdfByteSource } from '@/lib/premium-client';
import Icon from './Icon';

// PDF.js asks for bytes in chunks of this size; must stay below the API's 2 MB cap
const CHUNK_BYTES = 512 * 1024;
const MAX_PAGE_WIDTH = 900;
const ZOOM_STEPS = [0.6, 0.8, 1, 1.25, 1.5, 2];
const FIT_ZOOM = ZOOM_STEPS.indexOf(1);

interface PremiumReaderProps {
  title: string;
  // Subject code shown next to the title, e.g. BCS301
  code?: string;
  // Free notes use the same reader; this only changes the label
  premium?: boolean;
  source: PdfByteSource;
  // Drawn into every page, so a leaked screenshot points back to the account
  watermark: string;
  onClose: () => void;
}

interface OutlineEntry {
  title: string;
  page: number;
  depth: number;
}

// Burned into the canvas pixels rather than layered on top, so it can't be
// removed by deleting an element in dev tools
function drawWatermark(canvas: HTMLCanvasElement, text: string) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const fontSize = Math.max(14, Math.round(canvas.width / 30));
  const label = `${text}  ·  Next Engineer`;
  ctx.save();
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = '#1d4ed8';
  ctx.font = `600 ${fontSize}px sans-serif`;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 6);
  const stepX = ctx.measureText(label).width + fontSize * 3;
  const stepY = fontSize * 6;
  const reach = Math.hypot(canvas.width, canvas.height);
  let row = 0;
  for (let y = -reach; y < reach; y += stepY, row++) {
    const offset = row % 2 ? stepX / 2 : 0;
    for (let x = -reach; x < reach; x += stepX) {
      ctx.fillText(label, x + offset, y);
    }
  }
  ctx.restore();
}

// The PDF's own bookmarks (two levels), resolved to page numbers
async function loadOutline(doc: PDFDocumentProxy): Promise<OutlineEntry[]> {
  const outline = await doc.getOutline();
  if (!outline) return [];
  const entries: OutlineEntry[] = [];
  const resolvePage = async (dest: unknown): Promise<number | null> => {
    const explicit = typeof dest === 'string' ? await doc.getDestination(dest) : dest;
    if (!Array.isArray(explicit) || !explicit[0]) return null;
    const ref = explicit[0];
    const index = typeof ref === 'number' ? ref : await doc.getPageIndex(ref);
    return index + 1;
  };
  const walk = async (items: typeof outline, depth: number) => {
    for (const item of items) {
      const page = await resolvePage(item.dest).catch(() => null);
      if (page) entries.push({ title: item.title, page, depth });
      if (depth === 0 && item.items?.length) await walk(item.items, 1);
    }
  };
  await walk(outline, 0);
  return entries;
}

interface PdfPageProps {
  doc: PDFDocumentProxy;
  pageNumber: number;
  cssWidth: number;
  watermark: string;
  night: boolean;
  // The reader's scroll container; pages are clipped by it, not by the window
  scrollRoot: HTMLElement | null;
  register: (pageNumber: number, element: HTMLDivElement | null) => void;
}

function PdfPage({ doc, pageNumber, cssWidth, watermark, night, scrollRoot, register }: PdfPageProps) {
  const holderRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const [aspect, setAspect] = useState(1.414);

  useEffect(() => {
    register(pageNumber, holderRef.current);
    return () => register(pageNumber, null);
  }, [pageNumber, register]);

  // Only render pages near the viewport, so long books stay fast
  useEffect(() => {
    const holder = holderRef.current;
    if (!holder || !scrollRoot) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root: scrollRoot, rootMargin: '800px 0px' }
    );
    observer.observe(holder);
    return () => observer.disconnect();
  }, [scrollRoot]);

  useEffect(() => {
    if (!visible || !cssWidth) return;
    let cancelled = false;
    let renderTask: RenderTask | null = null;

    doc
      .getPage(pageNumber)
      .then((page) => {
        if (cancelled) return;
        const base = page.getViewport({ scale: 1 });
        setAspect(base.height / base.width);
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        const viewport = page.getViewport({ scale: (cssWidth / base.width) * pixelRatio });
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        renderTask = page.render({ canvas, viewport });
        return renderTask.promise.then(() => {
          if (!cancelled) drawWatermark(canvas, watermark);
        });
      })
      .catch((error) => {
        if (error?.name !== 'RenderingCancelledException') {
          console.error(`Error rendering page ${pageNumber}:`, error);
        }
      });

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [doc, pageNumber, cssWidth, visible, watermark]);

  return (
    <div
      ref={holderRef}
      data-page={pageNumber}
      className={`relative mx-auto overflow-hidden rounded-md shadow-lift ${night ? 'bg-[#1b1f27]' : 'bg-white'}`}
      style={{ width: cssWidth, height: cssWidth * aspect }}
    >
      <canvas
        ref={canvasRef}
        className={`block h-full w-full ${night ? '[filter:invert(0.9)_hue-rotate(180deg)]' : ''}`}
        draggable={false}
        aria-label={`Page ${pageNumber}`}
      />
      {!visible && <span className="absolute inset-0 grid place-items-center text-sm text-gray-400">Page {pageNumber}</span>}
    </div>
  );
}

export default function PremiumReader({ title, code, premium = true, source, watermark, onClose }: PremiumReaderProps) {
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [error, setError] = useState('');
  const [zoomIndex, setZoomIndex] = useState(FIT_ZOOM);
  const [containerWidth, setContainerWidth] = useState(0);
  // State rather than a ref so pages re-render once the container exists
  const [scroller, setScroller] = useState<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const [night, setNight] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
  const [navTab, setNavTab] = useState<'contents' | 'pages'>('contents');
  const [outline, setOutline] = useState<OutlineEntry[] | null>(null);
  // Pages are hidden while the window isn't in front or a screenshot key is down
  const [shielded, setShielded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pageElements = useRef(new Map<number, HTMLDivElement>());
  const [register] = useState(() => (pageNumber: number, element: HTMLDivElement | null) => {
    if (element) pageElements.current.set(pageNumber, element);
    else pageElements.current.delete(pageNumber);
  });

  // Load the document a chunk at a time through the authenticated byte source
  useEffect(() => {
    let cancelled = false;
    let loadingTask: PDFDocumentLoadingTask | null = null;

    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
        pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/legacy/build/pdf.worker.min.mjs', import.meta.url).toString();
        const size = await source.getSize();
        const transport = new pdfjs.PDFDataRangeTransport(size, null);
        transport.requestDataRange = (begin: number, end: number) => {
          source
            .getRange(begin, end)
            .then((chunk) => transport.onDataRange(begin, chunk))
            .catch((err) => {
              if (!cancelled) setError(err instanceof Error ? err.message : 'Could not load this file.');
              loadingTask?.destroy();
            });
        };
        loadingTask = pdfjs.getDocument({
          range: transport,
          rangeChunkSize: CHUNK_BYTES,
          disableAutoFetch: true,
          disableStream: true,
        });
        const pdf = await loadingTask.promise;
        if (cancelled) return;
        setDoc(pdf);
        loadOutline(pdf)
          .then((entries) => !cancelled && setOutline(entries))
          .catch(() => !cancelled && setOutline([]));
      } catch (err) {
        if (!cancelled) {
          console.error('Error opening premium file:', err);
          setError(err instanceof Error && err.message ? err.message : 'Could not open this file.');
        }
      }
    })();

    return () => {
      cancelled = true;
      loadingTask?.destroy();
    };
  }, [source]);

  // Track the available width so pages fit the screen
  useEffect(() => {
    if (!scroller) return;
    const observer = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    observer.observe(scroller);
    return () => observer.disconnect();
  }, [scroller]);

  // Lock page scroll, block save/print shortcuts, and hide everything when printing
  useEffect(() => {
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('reader-open');

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && (key === 's' || key === 'p')) {
        event.preventDefault();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.classList.remove('reader-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  // Screenshot deterrents. A web page can't block OS screenshots or a phone camera, so these
  // only make capture harder: pages go blank when the window loses focus (snipping tools take
  // focus), on PrintScreen, and while the Windows/Cmd key is held for a screenshot shortcut.
  // The email watermark is what makes any copy that still gets out traceable.
  useEffect(() => {
    let releaseTimer: ReturnType<typeof setTimeout> | undefined;
    const shield = () => {
      clearTimeout(releaseTimer);
      setShielded(true);
    };
    const releaseSoon = (delay: number) => {
      clearTimeout(releaseTimer);
      releaseTimer = setTimeout(() => {
        if (document.hasFocus() && document.visibilityState === 'visible') setShielded(false);
      }, delay);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Meta' || event.key === 'OS' || event.key === 'PrintScreen') shield();
      // Firefox's built-in screenshot tool
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 's') event.preventDefault();
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'PrintScreen') {
        shield();
        // Overwrite whatever the screenshot put on the clipboard
        navigator.clipboard?.writeText('Screenshots of Next Engineer notes are not allowed.').catch(() => {});
        releaseSoon(2000);
      } else if (event.key === 'Meta' || event.key === 'OS') {
        releaseSoon(400);
      }
    };
    const onBlur = () => shield();
    const onFocus = () => releaseSoon(150);
    const onVisibility = () => (document.visibilityState === 'visible' ? releaseSoon(150) : shield());
    const block = (event: Event) => event.preventDefault();

    window.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('keyup', onKeyUp, true);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);
    document.addEventListener('copy', block);
    document.addEventListener('dragstart', block);
    return () => {
      clearTimeout(releaseTimer);
      window.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('keyup', onKeyUp, true);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
      document.removeEventListener('copy', block);
      document.removeEventListener('dragstart', block);
    };
  }, []);

  // The current page is the last one whose top has passed a third of the way down
  const onScroll = () => {
    if (!scroller) return;
    const line = scroller.getBoundingClientRect().top + scroller.clientHeight / 3;
    let page = 1;
    for (const [number, element] of pageElements.current) {
      if (element.getBoundingClientRect().top <= line && number > page) page = number;
    }
    if (page !== currentPage) {
      setCurrentPage(page);
      setPageInput(String(page));
    }
  };

  const goToPage = (page: number) => {
    if (!doc) return;
    const target = Math.min(Math.max(1, page), doc.numPages);
    pageElements.current.get(target)?.scrollIntoView({ block: 'start' });
    setCurrentPage(target);
    setPageInput(String(target));
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const zoom = ZOOM_STEPS[zoomIndex];
  const pageWidth = containerWidth ? Math.round(Math.min(containerWidth - 32, MAX_PAGE_WIDTH) * zoom) : 0;
  const pageCount = doc?.numPages ?? 0;
  // The outline entry whose range contains the current page
  const activeEntry = outline ? outline.filter((e) => e.page <= currentPage).at(-1) : undefined;

  const iconButton = 'grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink-muted transition hover:bg-surface-muted hover:text-ink disabled:opacity-40';

  return (
    <div
      className="premium-reader fixed inset-0 z-[60] flex select-none flex-col bg-page [-webkit-touch-callout:none]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onContextMenu={(event) => event.preventDefault()}
    >
      <header className="flex items-center gap-1.5 border-b border-line bg-surface px-2 py-2 sm:gap-2 sm:px-4">
        <button ref={closeButtonRef} type="button" onClick={onClose} className={iconButton} aria-label="Close reader">
          <Icon name="arrow_back" />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            {code && <span className="code code-brand hidden sm:inline-flex">{code}</span>}
            <p className="truncate font-display text-sm font-semibold text-ink sm:text-base">{title}</p>
          </div>
          <p className={`flex items-center gap-1 text-[11px] font-semibold ${premium ? 'text-sun-ink' : 'text-leaf-ink'}`}>
            <Icon name={premium ? 'workspace_premium' : 'lock_open'} size={14} /> {premium ? 'Premium' : 'Free'} · read-only
          </p>
        </div>

        {pageCount > 0 && (
          <form
            className="hidden items-center gap-1 rounded-lg bg-surface-muted px-1 py-0.5 md:flex"
            onSubmit={(event) => {
              event.preventDefault();
              goToPage(Number(pageInput) || currentPage);
            }}
          >
            <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1} className={iconButton} aria-label="Previous page">
              <Icon name="chevron_left" />
            </button>
            <span className="text-xs text-ink-muted">Page</span>
            <input
              value={pageInput}
              onChange={(event) => setPageInput(event.target.value.replace(/\D/g, ''))}
              onBlur={() => setPageInput(String(currentPage))}
              inputMode="numeric"
              aria-label="Page number"
              className="w-10 rounded-md border border-line bg-surface py-1 text-center font-mono text-xs text-ink outline-none focus:border-brand"
            />
            <span className="font-mono text-xs text-ink-muted">of {pageCount}</span>
            <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= pageCount} className={iconButton} aria-label="Next page">
              <Icon name="chevron_right" />
            </button>
          </form>
        )}

        <div className="flex items-center">
          <button type="button" onClick={() => setZoomIndex((i) => Math.max(0, i - 1))} disabled={zoomIndex === 0} className={iconButton} aria-label="Zoom out">
            <Icon name="remove" />
          </button>
          <span className="hidden w-11 text-center font-mono text-xs text-ink-muted sm:inline">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            onClick={() => setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
            disabled={zoomIndex === ZOOM_STEPS.length - 1}
            className={iconButton}
            aria-label="Zoom in"
          >
            <Icon name="add" />
          </button>
          <button type="button" onClick={() => setZoomIndex(FIT_ZOOM)} className={`${iconButton} hidden sm:grid`} aria-label="Fit to width" title="Fit to width">
            <Icon name="fit_screen" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setNight((n) => !n)}
          aria-pressed={night}
          className={`hidden items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition sm:flex ${
            night ? 'bg-sun-soft text-sun-ink' : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
          }`}
          title="Dim the pages for night reading"
        >
          <Icon name="dark_mode" size={18} /> Night
        </button>

        <span className="hidden max-w-56 items-center gap-1 truncate rounded-full bg-sun-soft px-3 py-1 text-[11px] font-semibold text-sun-ink xl:flex">
          <Icon name="shield" size={14} /> Protected · {watermark}
        </span>

        <button
          type="button"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-pressed={sidebarOpen}
          className={`${iconButton} ${sidebarOpen ? 'bg-brand-soft text-brand-ink' : ''}`}
          aria-label="Document navigator"
          title="Document navigator"
        >
          <Icon name="toc" />
        </button>
        <button type="button" onClick={onClose} className="btn btn-secondary btn-sm hidden sm:inline-flex">
          <Icon name="close" size={16} /> Exit reader
        </button>
      </header>

      <div className="relative flex min-h-0 flex-1">
        {shielded && (
          <button
            type="button"
            onClick={() => setShielded(false)}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-page px-6 text-center"
          >
            <Icon name="shield" size={40} className="text-sun-ink" />
            <span className="font-display text-lg font-semibold text-ink">Reading paused</span>
            <span className="max-w-sm text-sm text-ink-muted">
              Pages hide while this window isn&apos;t in front, to protect the notes. Click here to keep reading.
            </span>
          </button>
        )}
        <div
          ref={setScroller}
          onScroll={onScroll}
          className={`flex-1 overflow-auto bg-surface-muted px-4 py-6 ${shielded ? 'invisible' : ''}`}
        >
          {error ? (
            <div className="card mx-auto mt-16 flex max-w-md flex-col items-center p-6 text-center">
              <Icon name="description" size={40} className="text-ink-faint" />
              <p className="mt-3 font-display font-semibold text-ink">This file couldn&apos;t be opened</p>
              <p className="mt-1 text-sm text-ink-muted">{error}</p>
              <button type="button" onClick={onClose} className="btn btn-primary mt-5">
                Close
              </button>
            </div>
          ) : !doc || !pageWidth ? (
            <div className="flex flex-col items-center gap-4 pt-24 text-ink-muted" role="status">
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-brand" aria-hidden="true" />
              <span className="text-sm font-semibold">Opening {title}…</span>
            </div>
          ) : (
            <div className="flex w-max min-w-full flex-col items-center gap-4">
              {Array.from({ length: doc.numPages }, (_, index) => (
                <PdfPage
                  key={index + 1}
                  doc={doc}
                  pageNumber={index + 1}
                  cssWidth={pageWidth}
                  watermark={watermark}
                  night={night}
                  scrollRoot={scroller}
                  register={register}
                />
              ))}
            </div>
          )}
        </div>

        {sidebarOpen && (
          <aside
            className="absolute inset-y-0 right-0 z-10 flex w-72 flex-col border-l border-line bg-surface shadow-float lg:static lg:shadow-none"
            aria-label="Document navigator"
          >
            <div className="flex items-center justify-between gap-2 px-4 pb-2 pt-4">
              <p className="flex items-center gap-1.5 font-display text-sm font-semibold text-ink">
                <Icon name="toc" size={18} className="text-brand" /> Document navigator
              </p>
              {pageCount > 0 && <span className="code">{pageCount} pages</span>}
            </div>
            <div className="mx-4 mb-2 grid grid-cols-2 gap-1 rounded-lg bg-surface-muted p-1 text-xs font-semibold">
              {(['contents', 'pages'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setNavTab(tab)}
                  className={`rounded-md py-1.5 capitalize transition ${navTab === tab ? 'bg-surface text-brand shadow-soft' : 'text-ink-muted hover:text-ink'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
              {navTab === 'contents' ? (
                outline === null ? (
                  <p className="px-2 py-3 text-xs text-ink-muted">Reading the table of contents…</p>
                ) : outline.length === 0 ? (
                  <p className="px-2 py-3 text-xs leading-relaxed text-ink-muted">
                    This PDF has no table of contents. Use <strong>Pages</strong> to jump around.
                  </p>
                ) : (
                  <ul className="space-y-0.5">
                    {outline.map((entry, index) => {
                      const active = entry === activeEntry;
                      return (
                        <li key={`${entry.page}-${index}`}>
                          <button
                            type="button"
                            onClick={() => goToPage(entry.page)}
                            className={`flex w-full items-start justify-between gap-2 rounded-lg px-2 py-2 text-left text-sm transition ${
                              active ? 'bg-brand-soft text-brand-ink' : 'text-ink hover:bg-surface-muted'
                            } ${entry.depth ? 'pl-5 text-xs' : 'font-medium'}`}
                          >
                            <span className="min-w-0">{entry.title}</span>
                            <span className={`shrink-0 font-mono text-[11px] ${active ? 'text-brand-ink' : 'text-ink-faint'}`}>p. {entry.page}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )
              ) : (
                <div className="grid grid-cols-4 gap-1.5 px-2 pt-1">
                  {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      className={`rounded-md py-2 font-mono text-xs transition ${
                        page === currentPage ? 'bg-brand text-on-brand' : 'bg-surface-muted text-ink-muted hover:text-ink'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="flex items-start gap-1.5 border-t border-line px-4 py-3 text-[11px] leading-relaxed text-ink-muted">
              <Icon name="shield" size={14} className="mt-px text-sun-ink" />
              Read-only. Downloading, copying and printing are turned off, and every page carries your email.
            </p>
          </aside>
        )}
      </div>
    </div>
  );
}
