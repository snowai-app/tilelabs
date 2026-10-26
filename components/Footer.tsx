'use client';

import { useRef } from 'react';
import { Brand } from './Bits';

export default function Footer({ home = false }: { /** On a page of its own the logo goes to the front page instead of the top of this one. */ home?: boolean }) {
  const cookies = useRef<HTMLDialogElement>(null);
  return (
    <>
      <footer>
        <div className="wrap">
          <Brand href={home ? '/' : '#top'} />
          <span className="legal">© 2026 Tile Private Limited</span>
          <span className="links">
            <a href="/privacy">Privacy</a><a href="/terms">Terms</a>
            <span className="hipaa"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></svg>HIPAA compliant</span>
            <button className="cookie" type="button" onClick={() => cookies.current?.showModal()}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-5-5z" /><circle cx="9" cy="10" r=".8" fill="currentColor" /><circle cx="13" cy="15" r=".8" fill="currentColor" /><circle cx="8.5" cy="14.5" r=".8" fill="currentColor" /></svg>Cookie choices</button>
          </span>
        </div>
      </footer>
      <dialog className="cookies" ref={cookies} aria-labelledby="ckT" onClick={(e) => { if (e.target === cookies.current) cookies.current?.close(); }}>
        <h2 id="ckT">Cookie choices</h2>
        <p>This page sets no cookies and has no analytics, so there is nothing to choose. If that changes, the choice will be here first.</p>
        <button className="btn primary" type="button" onClick={() => cookies.current?.close()}>Close</button>
      </dialog>
    </>
  );
}
