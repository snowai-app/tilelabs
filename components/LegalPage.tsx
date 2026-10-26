import type { ReactNode } from 'react';
import { Brand } from './Bits';
import Footer from './Footer';
import { COMPANY } from '@/lib/company';
import { FRAME, LANGS, NAME, SHORT, legalPath, type Lang } from '@/lib/legal-words';

/** The frame of the company's own privacy policy and terms: the company, not a product. The Snow AI family has its own pages at snowai.app that say how its apps collect data.
    The language switch is the family's EN | ES | HI | 中文 and is made of addresses, not a cookie: this site sets none. */
export default function LegalPage({ lang, doc, title, children }: { lang: Lang; doc: 'privacy' | 'terms'; title: string; children: ReactNode }) {
  const f = FRAME[lang];
  return (
    <div lang={f.htmlLang}>
      <header className="top">
        <div className="wrap">
          <Brand href="/" label={f.homeAria} />
          <span className="sp" />
          <nav className="lsw" aria-label={f.switchLabel}>
            {LANGS.map((l, i) => (
              <span className="lsw-item" key={l}>
                {i > 0 ? <span className="lsw-sep" aria-hidden="true">|</span> : null}
                <a className={`lsw-b${l === lang ? ' is-on' : ''}`} href={legalPath(l, doc)} lang={l === 'zh' ? 'zh-Hans' : l} hrefLang={l === 'zh' ? 'zh-Hans' : l} title={NAME[l]} aria-current={l === lang ? 'page' : undefined}>{SHORT[l]}</a>
              </span>
            ))}
          </nav>
        </div>
      </header>
      <main className="lp wrap" id="top">
        <h1>{title}</h1>
        <p className="lp-date mono">{f.last.replace('{date}', f.updated)} {f.draft}</p>
        {children}
        <p className="lp-company"><b>{f.line}</b> · {f.companyNo} {COMPANY.uen} · {f.place}</p>
        {f.note ? <p className="lp-date">{f.note}</p> : null}
        <p><a href="/">{f.back}</a></p>
      </main>
      <Footer home lang={lang} />
    </div>
  );
}
