import type { ReactNode } from 'react';
import { Brand } from './Bits';
import Footer from './Footer';
import { COMPANY, COMPANY_LINE, UPDATED } from '@/lib/company';

/** The frame of the company's own privacy policy and terms: the company, not a product. The Snow AI family has its own pages at snowai.app that say how its apps collect data. */
export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="top"><div className="wrap"><Brand href="/" /></div></header>
      <main className="lp wrap" id="top">
        <h1>{title}</h1>
        <p className="lp-date mono">Last updated {UPDATED}. Draft: not yet reviewed by a lawyer.</p>
        {children}
        <p className="lp-company"><b>{COMPANY_LINE}</b> · UEN {COMPANY.uen} · {COMPANY.place}</p>
        <p><a href="/">Back to Tile Labs</a></p>
      </main>
      <Footer home />
    </>
  );
}
