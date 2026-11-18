'use client';

import { FormEvent, useEffect, useState } from 'react';
import Icon from '@/app/components/Icon';
import DropdownCard from '@/app/components/DropdownCard';
import { getDropdownForAdmin, saveDropdownMessage } from '@/lib/messages/client';
import { AUDIENCES, Audience, DROPDOWN_LABEL_MAX, DROPDOWN_TEXT_MAX, DROPDOWN_TITLE_MAX, DropdownMessage } from '@/lib/messages/types';
import { errorText } from './ui';

// Owners write the drop-down message students see below the header, choose who sees it, and turn
// it on or off. Saving new wording sends it again to everyone.
export default function DropdownEditor() {
  const [saved, setSaved] = useState<DropdownMessage | null>(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [buttonHref, setButtonHref] = useState('');
  const [audience, setAudience] = useState<Audience>('everyone');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let cancelled = false;
    getDropdownForAdmin().then(
      (value) => {
        if (cancelled) return;
        setSaved(value);
        setTitle(value.title);
        setText(value.text);
        setButtonLabel(value.buttonLabel);
        setButtonHref(value.buttonHref);
        setAudience(value.audience);
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
      const value = await saveDropdownMessage({ on, title, text, buttonLabel, buttonHref, audience });
      const resent = saved !== null && value.id !== saved.id;
      setSaved(value);
      setNotice(on ? (resent ? 'Sent. Students will see the new message.' : 'Showing on the site.') : 'Hidden from the site.');
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
  const preview: DropdownMessage = {
    id: 'preview',
    on: true,
    title: title.trim() || 'Title',
    text: text.trim() || 'Your message',
    buttonLabel,
    buttonHref,
    audience,
  };

  return (
    <section className="mb-6 rounded-2xl border border-line bg-surface p-5 shadow-soft" aria-labelledby="dropdown-editor-heading">
      <div className="flex flex-wrap items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-ink">
          <Icon name="campaign" size={26} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="dropdown-editor-heading" className="font-display font-semibold text-ink">
            Drop-down message {saved === null ? '' : showing ? '· on' : '· off'}
          </h2>
          <p className="text-sm text-ink-muted">
            A note that slides down below the header. Signed-in students see each message once; visitors see it on every visit until
            they close it. Saving new wording sends it again to everyone.
          </p>
        </div>
      </div>

      <form onSubmit={submit} className="mt-4 space-y-3">
        <div>
          <label htmlFor="dd-title" className="label">
            Title <span className="font-normal text-ink-faint">({title.length}/{DROPDOWN_TITLE_MAX})</span>
          </label>
          <input id="dd-title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={DROPDOWN_TITLE_MAX} required />
        </div>
        <div>
          <label htmlFor="dd-text" className="label">
            Message <span className="font-normal text-ink-faint">({text.length}/{DROPDOWN_TEXT_MAX})</span>
          </label>
          <textarea id="dd-text" className="input min-h-28" value={text} onChange={(e) => setText(e.target.value)} maxLength={DROPDOWN_TEXT_MAX} required />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label htmlFor="dd-label" className="label">
              Button text (optional)
            </label>
            <input id="dd-label" className="input" value={buttonLabel} onChange={(e) => setButtonLabel(e.target.value)} maxLength={DROPDOWN_LABEL_MAX} placeholder="Share a file" />
          </div>
          <div>
            <label htmlFor="dd-href" className="label">
              Button link
            </label>
            <input id="dd-href" className="input" value={buttonHref} onChange={(e) => setButtonHref(e.target.value)} placeholder="/contribute" />
          </div>
          <div>
            <label htmlFor="dd-audience" className="label">
              Who sees it
            </label>
            <select id="dd-audience" className="input" value={audience} onChange={(e) => setAudience(e.target.value as Audience)}>
              {AUDIENCES.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <p className="label">Preview</p>
          <div className="flex justify-center rounded-xl bg-surface-muted p-4">
            <DropdownCard message={preview} onClose={() => {}} />
          </div>
        </div>

        {error && <p className="text-sm font-semibold text-danger-ink">{error}</p>}
        {notice && <p className="text-sm font-semibold text-leaf-ink">{notice}</p>}

        <div className="flex flex-wrap gap-2">
          <button type="submit" disabled={busy || saved === null} className="btn btn-primary">
            {busy ? 'Saving…' : showing ? 'Save and send' : 'Save and show'}
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
