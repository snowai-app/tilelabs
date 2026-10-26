'use client';

import { useState } from 'react';
import { mailtoFor, validEmail } from '@/lib/contact';
import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

export default function Talk({ lang }: { lang: Lang }) {
  const T = SITE[lang].talk;
  const [note, setNote] = useState<{ text: string; ok: boolean }>({ text: '', ok: false });
  return (
    <section id="talk">
      <div className="wrap talk">
        <div>
          <span className="mono">{T.label}</span>
          <h2>{T.h}</h2>
          <p className="lead">{T.lead}</p>
        </div>
        <form
          id="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const email = String(f.get('email') ?? '');
            if (!validEmail(email)) {
              setNote({ text: T.needEmail, ok: false });
              (e.currentTarget.elements.namedItem('email') as HTMLInputElement).focus();
              return;
            }
            setNote({ text: T.ok, ok: true });
            window.location.href = mailtoFor(String(f.get('kind') ?? 'product'), String(f.get('name') ?? ''), email, String(f.get('msg') ?? ''), lang);
          }}
        >
          <fieldset>
            <legend>{T.legend}</legend>
            <div className="opts">
              <input type="radio" name="kind" id="k1" value="product" defaultChecked /><label htmlFor="k1">{T.kinds[0]}</label>
              <input type="radio" name="kind" id="k2" value="white" /><label htmlFor="k2">{T.kinds[1]}</label>
              <input type="radio" name="kind" id="k3" value="custom" /><label htmlFor="k3">{T.kinds[2]}</label>
            </div>
          </fieldset>
          <div className="two">
            <div><label className="l" htmlFor="fname">{T.nameL}</label><input className="t" id="fname" name="name" autoComplete="name" /></div>
            <div><label className="l" htmlFor="femail">{T.emailL}</label><input className="t" id="femail" name="email" type="email" autoComplete="email" /></div>
          </div>
          <div><label className="l" htmlFor="fmsg">{T.aboutL}</label><textarea id="fmsg" name="msg" /></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            <button className="btn primary" type="submit">{T.send}</button>
            <span className={note.ok ? 'note ok' : 'note'} id="note" role="status">{note.text}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
