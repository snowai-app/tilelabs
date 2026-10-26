import { Fragment } from 'react';
import { Arrow } from './Bits';
import { tr } from '@/lib/localize';
import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

type Col = { lang: Lang; paid: string };

/* The wall of drawn product screens. Each column's cards are drawn twice so the climb loops without a jump. */

const Bars = [45, 70, 55, 90, 65];

function ColumnOne({ lang }: Col) {
  const t = (x: string) => tr(lang, x);
  return (
    <>
      <div className="scr a"><div className="hd"><i />Today</div>
        <div className="row"><span>{t('Whole milk')}</span><span className="pill hot">{t('Mark down')}</span></div>
        <div className="row"><span>{t('Sourdough')}</span><span className="pill">{t('Fine')}</span></div>
        <div className="row"><span>{t('Bananas')}</span><span className="pill">{t('Reorder')}</span></div></div>
      <div className="scr c"><div className="hd"><i />Sign</div>
        <div className="ln m" /><div className="ln" /><div className="ln s" />
        <svg className="sig" viewBox="0 0 200 46"><path d="M6 32c10-26 18-26 14-6s8 16 16-2 10 4 20-2 8-14 18-6 12 14 22 2 14-14 24-4 20 6 34-8" /></svg></div>
    </>
  );
}

function ColumnTwo({ lang }: Col) {
  void lang;
  return (
    <>
      <div className="scr d"><div className="hd"><i />Voice</div>
        <div className="wave">{Array.from({ length: 14 }, (_, i) => <i key={i} />)}</div>
        <div className="ln s" /></div>
      <div className="scr b"><div className="hd"><i />Engage</div>
        <div className="bars">{Bars.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div></div>
    </>
  );
}

function ColumnThree({ lang, paid }: Col) {
  const t = (x: string) => tr(lang, x);
  return (
    <>
      <div className="scr b"><div className="hd"><i />Portal</div>
        <div className="row"><span className="tick" /><span style={{ flex: 1 }}>{t('Upload your ID')}</span></div>
        <div className="row"><span className="tick" /><span style={{ flex: 1 }}>{t('Sign the form')}</span></div>
        <div className="row"><span className="tick" /><span style={{ flex: 1 }}>{t('Book a time')}</span></div></div>
      <div className="scr a"><div className="hd"><i />Invoice</div>
        <div className="ln m" /><div className="ln s" /><span className="paid">{paid}</span></div>
    </>
  );
}

const COLUMNS = [ColumnOne, ColumnTwo, ColumnThree];

export default function Products({ lang }: { lang: Lang }) {
  const P = SITE[lang].products;
  const paid = SITE[lang].demo.paid;
  return (
    <section id="products">
      <div className="wrap">
        <div className="band">
          <span className="mono">{P.label}</span>
          <h2>{P.h}</h2>
          <p>{P.p}</p>
          <div className="go">
            <a className="btn primary" href="https://snowai.app">{P.visit} <Arrow /></a>
          </div>
          <div className="wall" aria-hidden="true">
            {COLUMNS.map((Column, c) => (
              <div className="col" key={c}>
                <div className="rail">
                  {[0, 1].map((copy) => <Fragment key={copy}><Column lang={lang} paid={paid} /></Fragment>)}
                </div>
              </div>
            ))}
          </div>
          <ul className="sr">{P.sr.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
