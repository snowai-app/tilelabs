import { Fragment } from 'react';
import { Arrow } from './Bits';

/* The wall of drawn product screens. Each column's cards are drawn twice so the climb loops without a jump. */

const Bars = [45, 70, 55, 90, 65];

function ColumnOne() {
  return (
    <>
      <div className="scr a"><div className="hd"><i />Today</div>
        <div className="row"><span>Whole milk</span><span className="pill hot">Mark down</span></div>
        <div className="row"><span>Sourdough</span><span className="pill">Fine</span></div>
        <div className="row"><span>Bananas</span><span className="pill">Reorder</span></div></div>
      <div className="scr c"><div className="hd"><i />Sign</div>
        <div className="ln m" /><div className="ln" /><div className="ln s" />
        <svg className="sig" viewBox="0 0 200 46"><path d="M6 32c10-26 18-26 14-6s8 16 16-2 10 4 20-2 8-14 18-6 12 14 22 2 14-14 24-4 20 6 34-8" /></svg></div>
    </>
  );
}

function ColumnTwo() {
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

function ColumnThree() {
  return (
    <>
      <div className="scr b"><div className="hd"><i />Portal</div>
        <div className="row"><span className="tick" /><span style={{ flex: 1 }}>Upload your ID</span></div>
        <div className="row"><span className="tick" /><span style={{ flex: 1 }}>Sign the form</span></div>
        <div className="row"><span className="tick" /><span style={{ flex: 1 }}>Book a time</span></div></div>
      <div className="scr a"><div className="hd"><i />Invoice</div>
        <div className="ln m" /><div className="ln s" /><span className="paid">PAID</span></div>
    </>
  );
}

const COLUMNS = [ColumnOne, ColumnTwo, ColumnThree];

export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="band">
          <span className="mono">Our products</span>
          <h2>The products have a name of their own.</h2>
          <p>Each one has its own address, and one sign-in works across all of them. This page is the company; the products are where you go to use them.</p>
          <div className="go">
            <a className="btn primary" href="https://snowai.app">Visit the products <Arrow /></a>
          </div>
          <div className="wall" aria-hidden="true">
            {COLUMNS.map((Column, c) => (
              <div className="col" key={c}>
                <div className="rail">
                  {[0, 1].map((copy) => <Fragment key={copy}><Column /></Fragment>)}
                </div>
              </div>
            ))}
          </div>
          <ul className="sr">
            <li>Today, for shops</li><li>Engage, marketing</li><li>Sign, signatures</li><li>Documents</li><li>Portal, for clients</li><li>Tax</li><li>CRM</li><li>Invoice</li><li>Voice, calls</li><li>Webinar</li><li>Campaigns</li><li>Rewards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
