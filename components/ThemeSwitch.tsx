'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

/** Light or Dark (operator, 26 October 2026, T-3821): a button beside the language menu. Until a visitor presses it the page follows their device; after that it keeps their choice, on their own device only (nothing is sent, and no cookie is set). */
export default function ThemeSwitch({ lang }: { lang: Lang }) {
  const T = SITE[lang].theme;
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => { const t = root.getAttribute('data-theme'); setDark(t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches); };
    read();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', read);
    return () => mq.removeEventListener('change', read);
  }, []);
  function toggle() {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setDark(next === 'dark');
    try { localStorage.setItem('tilelabs-theme', next); } catch { /* the choice lasts for this visit only */ }
  }
  return (
    <button type="button" className="thm" aria-pressed={dark} aria-label={`${T.label}: ${dark ? T.light : T.dark}`} title={dark ? T.light : T.dark} onClick={toggle}>
      <svg className="i-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      <svg className="i-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" /></svg>
    </button>
  );
}
