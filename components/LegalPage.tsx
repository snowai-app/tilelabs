import type { ReactNode } from 'react';
import { Brand } from './Bits';
import Footer from './Footer';
import LangMenu from './LangMenu';
import { COMPANY } from '@/lib/company';
import { FRAME, pathFor, type Lang } from '@/lib/legal-words';

/** The frame of the company's own privacy policy and terms: the company, not a product. The Snow AI family has its own pages at snowai.app that say how its apps collect data.
    The language menu is the family's dropdown (components/LangMenu.tsx) and is made of addresses, not a cookie: this site sets none. */
export default function LegalPage({ lang, doc, title, children }: { lang: Lang; doc: 'privacy' | 'terms'; title: string; children: ReactNode }) {
  const f = FRAME[lang];
  return (
    <div lang={f.htmlLang}>
      <header className="top">
        <div className="wrap">
          <Brand href={pathFor(lang, 'home')} label={f.homeAria} />
          <span className="sp" />
          <LangMenu lang={lang} doc={doc} />
        </div>
      </header>
      <main className="lp wrap" id="top">
        <h1>{title}</h1>
        <p className="lp-date mono">{f.last.replace('{date}', f.updated)} {f.draft}</p>
        {children}
        <p className="lp-company"><b>{f.line}</b> · {f.companyNo} {COMPANY.uen} · {f.place}</p>
        {f.note ? <p className="lp-date">{f.note}</p> : null}
        <p><a href={pathFor(lang, 'home')}>{f.back}</a></p>
      </main>
      <Footer home lang={lang} doc={doc} />
    </div>
  );
}
