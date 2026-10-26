import { Arrow } from './Bits';
import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

export default function Hero({ lang }: { lang: Lang }) {
  const H = SITE[lang].hero;
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <span className="eyebrow mono"><b />{H.eyebrow}</span>
          <h1><span className="w">{H.h1a}</span> <em className="w">{H.h1b}</em></h1>
          <p className="lede">{H.lede}</p>
          <div className="cta">
            <a className="btn primary" href="#what">{H.portfolio} <Arrow /></a>
            <a className="btn ghost" href="#talk">{H.talk}</a>
          </div>
        </div>
        <div className="stagebox">
          <div className="stage" aria-hidden="true">
            <canvas id="mosaic" />
            <span className="tag mono">{H.stageTag}</span>
          </div>
          <button className="pause" id="pause" type="button" aria-pressed="false" aria-label={H.pauseAria}>
            <svg className="bars" viewBox="0 0 12 12" aria-hidden="true"><rect x="2" y="1" width="3" height="10" rx="1" fill="currentColor" /><rect x="7" y="1" width="3" height="10" rx="1" fill="currentColor" /></svg>
            <svg className="play" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
            <span id="pauseText">{H.pause}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
