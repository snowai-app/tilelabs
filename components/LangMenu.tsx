'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Flag from './Flag';
import { FRAME, LANGS, NAME, SHORT, pathFor, type Doc, type Lang } from '@/lib/legal-words';

/** The language menu (operator, 26 October 2026, T-3821), built as the family's bar builds it: a globe, the language's code and a chevron; the list shows each language's flag, its own name and its code.
    Each choice is a link to the same page in that language, so no cookie is needed and a link can be shared in a language. */
export default function LangMenu({ lang, doc, up = false }: { lang: Lang; doc: Doc; up?: boolean }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const box = useRef<HTMLSpanElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const f = FRAME[lang];

  useEffect(() => {
    if (!open) return;
    list.current?.querySelector<HTMLAnchorElement>('[aria-current="true"]')?.focus();
    const away = (e: MouseEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener('mousedown', away);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc); };
  }, [open]);

  const move = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const items = [...(list.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])];
    const at = items.indexOf(document.activeElement as HTMLAnchorElement);
    items[(at + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length]?.focus();
  };

  return (
    <span className="lsw" ref={box}>
      <button ref={trigger} type="button" className="lsw-t" aria-haspopup="true" aria-expanded={open} aria-controls={`${id}-list`} aria-label={`${f.switchLabel}: ${NAME[lang]}`} title={NAME[lang]} onClick={() => setOpen((o) => !o)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></svg>
        <span>{SHORT[lang]}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open ? (
        <ul id={`${id}-list`} ref={list} className="lsw-list" data-up={up ? '' : undefined} aria-label={f.switchLabel} onKeyDown={move}>
          {LANGS.map((l) => (
            <li key={l}>
              <a className="lsw-o" href={pathFor(l, doc)} lang={l === 'zh' ? 'zh-Hans' : l} hrefLang={l === 'zh' ? 'zh-Hans' : l} aria-current={l === lang ? 'true' : undefined} onClick={() => setOpen(false)}>
                <Flag code={l} id={id.replace(/:/g, '')} />
                <span className="lsw-n">{NAME[l]}</span>
                <span className="lsw-c">{SHORT[l]}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </span>
  );
}
