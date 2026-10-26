import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

export default function Promises({ lang }: { lang: Lang }) {
  const P = SITE[lang].promises;
  return (
    <section>
      <div className="wrap">
        <div className="head" data-reveal>
          <span className="mono">{P.label}</span>
          <h2>{P.h}</h2>
        </div>
        <div className="four">
          <div className="mini" data-reveal><div className="glyph"><span className="seal">•••• 4821</span></div><h3>{P.cards[0].h}</h3><p>{P.cards[0].p}</p></div>
          <div className="mini" data-reveal><div className="glyph lang"><span>EN</span><span>ES</span><span>HI</span></div><h3>{P.cards[1].h}</h3><p>{P.cards[1].p}</p></div>
          <div className="mini" data-reveal><div className="glyph"><div className="sso"><i /><i /><i /><b /></div></div><h3>{P.cards[2].h}</h3><p>{P.cards[2].p}</p></div>
          <div className="mini" data-reveal><div className="glyph"><div className="upd"><span>{P.upd}</span><div><i /></div></div></div><h3>{P.cards[3].h}</h3><p>{P.cards[3].p}</p></div>
        </div>
      </div>
    </section>
  );
}
