import { Brand } from './Bits';

export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <Brand />
        <nav aria-label="Sections">
          <a href="#what">What we do</a><a href="#how">How we work</a><a href="#products">Products</a><a href="#talk">Talk to us</a>
        </nav>
        <button className="pause" id="pause" type="button" aria-pressed="false" aria-label="Pause the motion">
          <svg className="bars" viewBox="0 0 12 12" aria-hidden="true"><rect x="2" y="1" width="3" height="10" rx="1" fill="currentColor" /><rect x="7" y="1" width="3" height="10" rx="1" fill="currentColor" /></svg>
          <svg className="play" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
          <span id="pauseText">Pause</span>
        </button>
      </div>
    </header>
  );
}
