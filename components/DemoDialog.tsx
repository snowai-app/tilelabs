import { Arrow } from './Bits';
import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

/* The window a tile opens. Its words and steps are filled in by lib/page.ts from lib/products.ts, in the page's language. */

export default function DemoDialog({ lang }: { lang: Lang }) {
  const D = SITE[lang].demo;
  return (
    <dialog className="demo" id="demo" aria-labelledby="dName">
      <button className="x" id="dClose" type="button" aria-label={D.close}>&times;</button>
      <div className="inner">
        <div>
          <span className="mono" id="dTag" />
          <h3 id="dName" />
          <p className="what" id="dWhat" />
          <div className="for"><span><b>{D.suits}</b> <span id="dFor" /></span></div>
          <div className="acts"><a className="btn primary" id="dTalk" href="#talk">{D.talkAbout} <Arrow /></a></div>
          <div className="nav"><button type="button" id="dPrev">{D.prev}</button><button type="button" id="dNext">{D.next}</button></div>
        </div>
        <div className="win" aria-live="polite">
          <div className="bar"><i /><i /><i /><span id="dAddr" /></div>
          <div className="body">
            <div id="dFrame" />
            <div id="dVideo" />
            <p className="cap" id="dCap" />
            <div className="foot"><button className="go2" id="dAct" type="button" /><button className="go2" id="dAuto" type="button" style={{ background: 'var(--tile)', color: 'var(--ink)' }}>{D.pause}</button><span className="dots" id="dDots" /></div>
            <p className="eg">{D.example}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
