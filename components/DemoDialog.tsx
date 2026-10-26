import { Arrow } from './Bits';

/* The window a tile opens. Its words and steps are filled in by lib/page.ts from lib/products.ts. */

export default function DemoDialog() {
  return (
    <dialog className="demo" id="demo" aria-labelledby="dName">
      <button className="x" id="dClose" type="button" aria-label="Close the demo">&times;</button>
      <div className="inner">
        <div>
          <span className="mono" id="dTag" />
          <h3 id="dName" />
          <p className="what" id="dWhat" />
          <div className="for"><span><b>Suits:</b> <span id="dFor" /></span></div>
          <div className="acts"><a className="btn primary" id="dTalk" href="#talk">Talk to us about it <Arrow /></a></div>
          <div className="nav"><button type="button" id="dPrev">&larr; Previous product</button><button type="button" id="dNext">Next product &rarr;</button></div>
        </div>
        <div className="win" aria-live="polite">
          <div className="bar"><i /><i /><i /><span id="dAddr" /></div>
          <div className="body">
            <div id="dFrame" />
            <div id="dVideo" />
            <p className="cap" id="dCap" />
            <div className="foot"><button className="go2" id="dAct" type="button" /><button className="go2" id="dAuto" type="button" style={{ background: 'var(--tile)', color: 'var(--ink)' }}>Pause</button><span className="dots" id="dDots" /></div>
            <p className="eg">A drawn example with invented names, not the real product.</p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
