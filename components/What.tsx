export default function What() {
  return (
    <section id="what">
      <div className="wrap">
        <div className="head" data-reveal>
          <span className="mono">What we do</span>
          <h2>Three ways to get the software you need.</h2>
          <p>Start with something we already run, put your own name on it, or have us build exactly what your business needs.</p>
        </div>
        <div className="three">
          <article className="card">
            <h3>Products you can start today</h3>
            <p>Ready-made apps for running a shop, reaching customers, signing documents, filing taxes and more. Sign in once and use them together.</p>
            <div className="demo" aria-hidden="true">
              <div className="stack">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div>
            </div>
          </article>
          <article className="card">
            <h3>White label, in your name</h3>
            <p>Take a product we already run and put your name, colours, address and prices on it. Your customers never see ours.</p>
            <div className="demo">
              <div className="wl" id="wl" aria-live="polite">
                <div className="bar"><span className="logo" id="wlLogo">H</span><span className="name" id="wlName">Harbor Pizza</span><span className="addr" id="wlAddr">app.harborpizza.example</span></div>
                <div className="row w1" /><div className="row w2" />
                <span className="go" id="wlGo">Order now</span>
              </div>
              <div className="wl-pick" role="group" aria-label="Example brands">
                <button type="button" aria-pressed="true" data-i="0">Harbor</button>
                <button type="button" aria-pressed="false" data-i="1">Northside</button>
                <button type="button" aria-pressed="false" data-i="2">Brightwell</button>
              </div>
            </div>
          </article>
          <article className="card">
            <h3>Built to your specification</h3>
            <p>Need something we do not sell? Tell us how your people work, and we build software around it, starting from what already works.</p>
            <div className="demo" aria-hidden="true">
              <div className="spec"><div>Approval before anything is sent</div><div>English, Spanish and Hindi</div><div>Your own sign-in</div><div>Reports on one page</div></div>
              <div className="build"><i /><i /><i /></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
