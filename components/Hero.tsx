import { Arrow } from './Bits';

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <span className="eyebrow mono"><b />Software studio</span>
          <h1><span className="w">Software,</span> <em className="w">cut to fit.</em></h1>
          <p className="lede">Tile Labs makes software products, white-label versions that wear your brand, and custom software built to your specification.</p>
          <div className="cta">
            <a className="btn primary" href="#what">Portfolio <Arrow /></a>
            <a className="btn ghost" href="#talk">Talk to us</a>
          </div>
        </div>
        <div className="stagebox">
          <div className="stage" aria-hidden="true">
            <canvas id="mosaic" />
            <span className="tag mono">Press a tile to see what it does</span>
          </div>
          <button className="pause" id="pause" type="button" aria-pressed="false" aria-label="Pause the motion">
            <svg className="bars" viewBox="0 0 12 12" aria-hidden="true"><rect x="2" y="1" width="3" height="10" rx="1" fill="currentColor" /><rect x="7" y="1" width="3" height="10" rx="1" fill="currentColor" /></svg>
            <svg className="play" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
            <span id="pauseText">Pause</span>
          </button>
        </div>
      </div>
    </div>
  );
}
