import { Brand } from './Bits';

export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <Brand />
        <nav aria-label="Sections">
          <a href="#what">What we do</a><a href="#how">How we work</a><a href="#products">Products</a><a href="#talk">Talk to us</a>
        </nav>
      </div>
    </header>
  );
}
