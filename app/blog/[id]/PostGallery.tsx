'use client';

import { useState } from 'react';

// Image gallery for a post; images that fail to load are dropped so no broken frame shows
export default function PostGallery({ images, title }: { images: string[]; title: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [failed, setFailed] = useState<string[]>([]);

  const usable = images.filter((url) => !failed.includes(url));
  const active = selected && usable.includes(selected) ? selected : usable[0];
  const markFailed = (url: string) => setFailed((prev) => (prev.includes(url) ? prev : [...prev, url]));

  if (!active) return null;

  return (
    <div className="bg-surface-muted">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={active} alt={title} onError={() => markFailed(active)} className="max-h-[420px] w-full object-contain" />
      {usable.length > 1 && (
        <div className="flex gap-2 overflow-x-auto border-t border-line p-3">
          {usable.map((url, index) => (
            <button
              key={url}
              type="button"
              onClick={() => setSelected(url)}
              aria-label={`Show image ${index + 1}`}
              className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                active === url ? 'border-brand' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" onError={() => markFailed(url)} className="h-16 w-24 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
