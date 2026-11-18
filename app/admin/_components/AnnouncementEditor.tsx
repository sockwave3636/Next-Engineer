'use client';

import { FormEvent, useEffect, useState } from 'react';
import Icon from '@/app/components/Icon';
import WhatsNewBar from '@/app/components/WhatsNewBar';
import { getAnnouncementForAdmin, saveAnnouncement } from '@/lib/announcement/client';
import { ANNOUNCEMENT_LABEL_MAX, ANNOUNCEMENT_TEXT_MAX, Announcement } from '@/lib/announcement/types';
import { errorText } from './ui';

const EXAMPLE = {
  text: 'Study boards are here: draw, add sticky notes and solve problems with classmates, live.',
  linkLabel: 'Try a board',
  linkHref: '/boards',
};

// Owners write the "What's new" bar shown at the top of every page, and turn it on or off.
// Changing the wording shows it again to students who closed the previous one.
export default function AnnouncementEditor() {
  const [saved, setSaved] = useState<Announcement | null | undefined>(undefined);
  const [text, setText] = useState('');
  const [linkLabel, setLinkLabel] = useState('');
  const [linkHref, setLinkHref] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let cancelled = false;
    getAnnouncementForAdmin().then(
      (value) => {
        if (cancelled) return;
        setSaved(value);
        setText(value?.text ?? EXAMPLE.text);
        setLinkLabel(value?.linkLabel ?? EXAMPLE.linkLabel);
        setLinkHref(value?.linkHref ?? EXAMPLE.linkHref);
      },
      (err) => !cancelled && setError(errorText(err))
    );
    return () => {
      cancelled = true;
    };
  }, []);

  const save = async (on: boolean) => {
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const value = await saveAnnouncement({ on, text, linkLabel, linkHref });
      setSaved(value);
      setNotice(on ? 'Showing on every page now.' : 'Hidden from the site.');
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    save(true);
  };

  const showing = saved?.on === true;
  const preview: Announcement = { id: 'preview', on: true, text: text.trim() || 'Your announcement', linkLabel, linkHref };

  return (
    <section className="mb-6 rounded-2xl border border-line bg-surface p-5 shadow-soft" aria-labelledby="whats-new-heading">
      <div className="flex flex-wrap items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name="campaign" size={26} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="whats-new-heading" className="font-display font-semibold text-ink">
            What&apos;s new bar {saved === undefined ? '' : showing ? '· on' : '· off'}
          </h2>
          <p className="text-sm text-ink-muted">A strip at the top of every page to announce a new feature. Students can close it.</p>
        </div>
      </div>

      <form onSubmit={submit} className="mt-4 space-y-3">
        <div>
          <label htmlFor="wn-text" className="label">
            Announcement <span className="font-normal text-ink-faint">({text.length}/{ANNOUNCEMENT_TEXT_MAX})</span>
          </label>
          <input id="wn-text" className="input" value={text} onChange={(e) => setText(e.target.value)} maxLength={ANNOUNCEMENT_TEXT_MAX} required />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="wn-label" className="label">
              Link text
            </label>
            <input id="wn-label" className="input" value={linkLabel} onChange={(e) => setLinkLabel(e.target.value)} maxLength={ANNOUNCEMENT_LABEL_MAX} placeholder="Take a look" />
          </div>
          <div>
            <label htmlFor="wn-href" className="label">
              Link (a page like /boards, or https://…)
            </label>
            <input id="wn-href" className="input" value={linkHref} onChange={(e) => setLinkHref(e.target.value)} placeholder="/boards" />
          </div>
        </div>

        <div>
          <p className="label">Preview</p>
          <div className="overflow-hidden rounded-lg border border-line">
            <WhatsNewBar announcement={preview} preview />
          </div>
        </div>

        {error && <p className="text-sm font-semibold text-danger-ink">{error}</p>}
        {notice && <p className="text-sm font-semibold text-leaf-ink">{notice}</p>}

        <div className="flex flex-wrap gap-2">
          <button type="submit" disabled={busy || saved === undefined} className="btn btn-primary">
            {busy ? 'Saving…' : showing ? 'Save changes' : 'Save and show'}
          </button>
          {showing && (
            <button type="button" onClick={() => save(false)} disabled={busy} className="btn btn-secondary">
              Hide from the site
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
