'use client';

import { useRef } from 'react';
import { Brand } from './Bits';
import LangMenu from './LangMenu';
import { FRAME, legalPath, type Doc, type Lang } from '@/lib/legal-words';

export default function Footer({ home = false, lang = 'en', doc = 'home' }: { /** On a page of its own the logo goes to the front page instead of the top of this one. */ home?: boolean; /** The language the page is in. */ lang?: Lang; /** Which page this is, so the language menu goes to the same page in another language. */ doc?: Doc }) {
  const f = FRAME[lang];
  const cookies = useRef<HTMLDialogElement>(null);
  return (
    <>
      <footer>
        <div className="wrap">
          <Brand href={home ? (lang === 'en' ? '/' : `/${lang}`) : '#top'} />
          <span className="legal">© 2026 Tile Private Limited</span>
          <span className="links">
            <a href={legalPath(lang, 'privacy')}>{f.privacyLink}</a><a href={legalPath(lang, 'terms')}>{f.termsLink}</a>
            <span className="hipaa"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></svg>{f.hipaa}</span>
            <button className="cookie" type="button" onClick={() => cookies.current?.showModal()}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-5-5z" /><circle cx="9" cy="10" r=".8" fill="currentColor" /><circle cx="13" cy="15" r=".8" fill="currentColor" /><circle cx="8.5" cy="14.5" r=".8" fill="currentColor" /></svg>{f.cookies}</button>
            <LangMenu lang={lang} doc={doc} up />
          </span>
        </div>
      </footer>
      <dialog className="cookies" ref={cookies} aria-labelledby="ckT" onClick={(e) => { if (e.target === cookies.current) cookies.current?.close(); }}>
        <h2 id="ckT">{f.cookies}</h2>
        <p>{f.cookiesBody}</p>
        <button className="btn primary" type="button" onClick={() => cookies.current?.close()}>{f.close}</button>
      </dialog>
    </>
  );
}
