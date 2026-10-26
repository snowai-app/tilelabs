'use client';

import { useState } from 'react';
import { mailtoFor, validEmail } from '@/lib/contact';

export default function Talk() {
  const [note, setNote] = useState<{ text: string; ok: boolean }>({ text: '', ok: false });
  return (
    <section id="talk">
      <div className="wrap talk">
        <div>
          <span className="mono">Talk to us</span>
          <h2>Tell us what you need.</h2>
          <p className="lead">A product to start with, your own brand on one of ours, or something built for you. Say which, and a few words about your business.</p>
        </div>
        <form
          id="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const email = String(f.get('email') ?? '');
            if (!validEmail(email)) {
              setNote({ text: 'Add a work email so we can reply.', ok: false });
              (e.currentTarget.elements.namedItem('email') as HTMLInputElement).focus();
              return;
            }
            setNote({ text: 'Your email app should open with your message ready. Nothing is sent until you send it there.', ok: true });
            window.location.href = mailtoFor(String(f.get('kind') ?? 'product'), String(f.get('name') ?? ''), email, String(f.get('msg') ?? ''));
          }}
        >
          <fieldset>
            <legend>What are you looking for?</legend>
            <div className="opts">
              <input type="radio" name="kind" id="k1" value="product" defaultChecked /><label htmlFor="k1">A product</label>
              <input type="radio" name="kind" id="k2" value="white" /><label htmlFor="k2">White label</label>
              <input type="radio" name="kind" id="k3" value="custom" /><label htmlFor="k3">Custom software</label>
            </div>
          </fieldset>
          <div className="two">
            <div><label className="l" htmlFor="fname">Your name</label><input className="t" id="fname" name="name" autoComplete="name" /></div>
            <div><label className="l" htmlFor="femail">Work email</label><input className="t" id="femail" name="email" type="email" autoComplete="email" /></div>
          </div>
          <div><label className="l" htmlFor="fmsg">About your business</label><textarea id="fmsg" name="msg" /></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            <button className="btn primary" type="submit">Send to Tile Labs</button>
            <span className={note.ok ? 'note ok' : 'note'} id="note" role="status">{note.text}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
