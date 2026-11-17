'use client';

import { CSSProperties, useEffect, useRef } from 'react';
import { MAX_TEXT } from '@/lib/boards/types';

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
}

// Typing area for text and sticky notes. Everyone on a board can write in it, so it only ever
// reads and writes plain text (innerText), never HTML: nothing typed can run as code for others.
export default function EditableText({ value, onChange, className = '', style, placeholder = 'Type here' }: EditableTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Show other people's edits, except while I'm typing here, so my cursor doesn't jump
  useEffect(() => {
    const el = ref.current;
    if (el && document.activeElement !== el && el.innerText !== value) el.innerText = value;
  }, [value]);

  return (
    <div
      ref={ref}
      contentEditable="plaintext-only"
      suppressContentEditableWarning
      role="textbox"
      aria-multiline="true"
      aria-label={placeholder}
      data-placeholder={placeholder}
      spellCheck={false}
      onInput={(e) => {
        let text = e.currentTarget.innerText;
        if (text.length > MAX_TEXT) {
          text = text.slice(0, MAX_TEXT);
          e.currentTarget.innerText = text;
        }
        onChange(text);
      }}
      onPaste={(e) => {
        // Paste as plain text in browsers without plaintext-only editing
        e.preventDefault();
        document.execCommand('insertText', false, e.clipboardData.getData('text/plain'));
      }}
      className={`select-text whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:opacity-50 empty:before:content-[attr(data-placeholder)] ${className}`}
      style={style}
    />
  );
}
