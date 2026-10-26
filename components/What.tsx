import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

export default function What({ lang }: { lang: Lang }) {
  const W = SITE[lang].what;
  return (
    <section id="what">
      <div className="wrap">
        <div className="head" data-reveal>
          <span className="mono">{W.label}</span>
          <h2>{W.h}</h2>
          <p>{W.intro}</p>
        </div>
        <div className="three">
          <article className="card">
            <h3>{W.cards[0].h}</h3>
            <p>{W.cards[0].p}</p>
            <div className="demo" aria-hidden="true">
              <div className="stack">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div>
            </div>
          </article>
          <article className="card">
            <h3>{W.cards[1].h}</h3>
            <p>{W.cards[1].p}</p>
            <div className="demo">
              <div className="wl" id="wl" aria-live="polite">
                <div className="bar"><span className="logo" id="wlLogo">H</span><span className="name" id="wlName">Harbor Pizza</span><span className="addr" id="wlAddr">app.harborpizza.example</span></div>
                <div className="row w1" /><div className="row w2" />
                <span className="go" id="wlGo">{W.goals[0]}</span>
              </div>
              <div className="wl-pick" role="group" aria-label={W.brandsAria}>
                <button type="button" aria-pressed="true" data-i="0">Harbor</button>
                <button type="button" aria-pressed="false" data-i="1">Northside</button>
                <button type="button" aria-pressed="false" data-i="2">Brightwell</button>
              </div>
            </div>
          </article>
          <article className="card">
            <h3>{W.cards[2].h}</h3>
            <p>{W.cards[2].p}</p>
            <div className="demo" aria-hidden="true">
              <div className="spec">{W.spec.map((x) => <div key={x}>{x}</div>)}</div>
              <div className="build"><i /><i /><i /></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
