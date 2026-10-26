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
            <a className="btn primary" href="#what">See what we make <Arrow /></a>
            <a className="btn ghost" href="#talk">Talk to us</a>
          </div>
        </div>
        <div className="stage" aria-hidden="true">
          <canvas id="mosaic" />
          <span className="tag mono">Press a tile to see what it does</span>
        </div>
      </div>
    </div>
  );
}
