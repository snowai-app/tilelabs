'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { CAPS, CAP_KEYS, type CapKey, type StepKind } from '@/lib/caps-words';
import type { Lang } from '@/lib/legal-words';

/** The capabilities section (operator, 27 October 2026, T-3830), the mock-up https://claude.ai/artifact/9YVqTE4AZP9EEhzSkJViVw as built: four variations, A to D, chosen from a row of tabs at the top of the section.
    A: the work travels along a line, station to station. B: one sentence whose ending turns, and four verb cards. C: a before and after, read by a scan line. D: four capabilities that dock into your software.
    Drawn examples with invented names; no price and no figure. Reduced motion shows every variation at rest. */

const SOFT = ['HubSpot', 'Salesforce', 'Zoho CRM'];
const ICON: Record<CapKey | 'call' | 'box', React.ReactNode> = {
  transcribe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>,
  sign: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h16M6 16l9.5-9.5a2.1 2.1 0 0 1 3 3L9 19H6z" /></svg>,
  extract: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6M10 17h6" /></svg>,
  translate: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h9M8 3v2M11 5c-1 4-3.5 7-7 9M6 9c1 2 3 4 6 5M13 20l4-9 4 9M14.5 17h5" /></svg>,
  box: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg>,
  call: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>,
};
const stepIcon = (k: StepKind, label: string) => (k === 'yours' ? 'box' : k === 'have' ? (/scan|form|escane|formul|स्कैन|फ़ॉर्म|扫描|表单/i.test(label) ? 'extract' : 'call') : k);
const fillIn = (s: string, n: string | number) => s.replace('{n}', String(n));
const VARS = ['a', 'b', 'c', 'd'] as const;
type Var = (typeof VARS)[number];

function useReduced() {
  const [r, setR] = useState(false);
  useEffect(() => { const m = matchMedia('(prefers-reduced-motion: reduce)'); setR(m.matches); const f = () => setR(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  return r;
}

function Chips({ names, cur, onPick, label }: { names: string[]; cur: number; onPick: (i: number) => void; label: string }) {
  return (
    <div className="cap-chips" role="group" aria-label={label}>
      {names.map((n, i) => <button key={n} type="button" className="cap-chip" aria-pressed={i === cur} onClick={() => onPick(i)}>{n}</button>)}
    </div>
  );
}

export default function Capabilities({ lang }: { lang: Lang }) {
  const W = CAPS[lang];
  const reduced = useReduced();
  const anim = !reduced;
  const id = useId().replace(/:/g, '');
  const [v, setV] = useState<Var>('a');
  const [shown, setShown] = useState(false);
  const soft = [...SOFT, W.own];

  // every variation enters once chosen
  useEffect(() => { setShown(false); const t = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true))); return () => cancelAnimationFrame(t); }, [v]);

  /* ---- A: the line ---- */
  const [aPath, setAPath] = useState(0);
  const [aStep, setAStep] = useState(0);
  const [aRun, setARun] = useState(0);
  const path = W.a.paths[aPath];
  const n = path.steps.length;
  useEffect(() => {
    if (v !== 'a') return;
    if (!anim) { setAStep(n - 1); return; }
    setAStep(0);
    let k = 0;
    const t = setInterval(() => { k++; if (k >= n) { clearInterval(t); return; } setAStep(k); }, 1100);
    return () => clearInterval(t);
  }, [v, aPath, aRun, anim, n]);
  const edge = 100 / n / 2;
  const pos = edge + aStep * (100 - 2 * edge) / (n - 1);

  /* ---- B: the wheel ---- */
  const [bi, setBi] = useState(0);
  const [bPrev, setBPrev] = useState(-1);
  const [bLit, setBLit] = useState<CapKey | null>(null);
  useEffect(() => {
    if (v !== 'b' || !anim) return;
    setBLit(null);
    const first = setTimeout(() => setBLit('transcribe'), 900);
    const t = setInterval(() => { setBi((i) => { setBPrev(i); return (i + 1) % 4; }); }, 2400);
    return () => { clearInterval(t); clearTimeout(first); };
  }, [v, anim]);

  /* ---- C: before and after ---- */
  const [cCur, setCCur] = useState<CapKey>('transcribe');
  const [cSoft, setCSoft] = useState(0);
  const [cRun, setCRun] = useState(0);
  const cAfter = W.c.after[cCur];

  /* ---- D: the dock ---- */
  const [docked, setDocked] = useState<CapKey[]>([]);
  const [dSoft, setDSoft] = useState(0);
  useEffect(() => {
    if (v !== 'd') return;
    setDocked([]);
    if (!anim) return;
    const t = setTimeout(() => setDocked(['transcribe']), 1200);
    return () => clearTimeout(t);
  }, [v, anim]);
  const toggle = (k: CapKey) => setDocked((d) => (d.includes(k) ? d.filter((x) => x !== k) : [...d, k]));
  const dLines: Record<CapKey, [number, number]> = { transcribe: [12, 12], extract: [88, 12], sign: [12, 88], translate: [88, 88] };

  const tabs = useRef<HTMLDivElement>(null);
  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const i = VARS.indexOf(v), next = VARS[(i + (e.key === 'ArrowRight' ? 1 : -1) + 4) % 4];
    setV(next);
    tabs.current?.querySelector<HTMLButtonElement>(`[data-v="${next}"]`)?.focus();
  };

  const foot = (text: string, note: string) => (
    <>
      <div className="cap-foot"><p>{text}</p><a className="btn primary" href="#talk">{W.talk}</a></div>
      <p className="cap-under">{note}</p>
    </>
  );
  const r = (d: number, cls = '') => ({ className: (cls ? cls + ' ' : '') + 'cap-r' + (shown ? ' in' : ''), style: { '--d': `${d}s` } as React.CSSProperties });

  return (
    <section id="capabilities" className={'caps' + (anim ? ' cap-anim' : '')}>
      <div className="wrap">
        <div className="cap-top" data-reveal>
          <span className="mono">{W.label}</span>
          <div className="cap-tabs" role="tablist" aria-label={W.label} ref={tabs} onKeyDown={onTabKey}>
            {VARS.map((x, i) => (
              <button key={x} type="button" role="tab" className="cap-tab" data-v={x} id={`${id}-tab-${x}`} aria-selected={v === x} aria-controls={`${id}-${x}`} tabIndex={v === x ? 0 : -1} onClick={() => setV(x)}>
                <b>{W.tabs[i].n}</b><small>{W.tabs[i].s}</small>
              </button>
            ))}
          </div>
        </div>

        {v === 'a' && (
          <div className="cap-var" id={`${id}-a`} role="tabpanel" aria-labelledby={`${id}-tab-a`}>
            <div {...r(0, 'cap-head')}><h2>{W.a.h}</h2><p>{W.a.p}</p></div>
            <div {...r(0.1, 'cap-a-line')}>
              <div className="cap-a-track" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
                <div className="cap-a-rail" style={{ left: `${edge}%`, right: `${edge}%` }}><i style={{ width: `${aStep / (n - 1) * 100}%` }} /></div>
                <div className="cap-a-dot" style={{ left: `${pos}%` }} />
                <div className="cap-a-item" style={{ left: `${pos}%` }} aria-live="polite">{path.items[aStep]}</div>
                {path.steps.map(([k, label], i) => (
                  <div key={i} className={'cap-a-st' + (k === 'yours' ? ' yours' : '') + (i <= aStep ? ' on' : '')}>
                    <div className="k">{ICON[stepIcon(k, label)]}</div>
                    <small>{k === 'yours' ? W.yours : k === 'have' ? W.youHave : W.tile}</small>
                    <b>{k === 'yours' || k === 'have' ? label : W.cap[k].n}</b>
                    <span>{k === 'yours' || k === 'have' ? '' : label}</span>
                  </div>
                ))}
              </div>
              <div className="cap-a-ctl">
                <Chips names={W.a.paths.map((p) => p.n)} cur={aPath} onPick={(i) => { setAPath(i); }} label={W.label} />
                <button type="button" className="cap-play" onClick={() => setARun((x) => x + 1)}>{W.replay}</button>
              </div>
            </div>
            <div className="cap-a-grid">
              {CAP_KEYS.map((k, i) => <div key={k} {...r(0.15 + i * 0.07, 'cap-a-card')}><b>{W.cap[k].n}</b><p>{W.cap[k].short}</p><span className="mono">{fillIn(W.station, i + 1)}</span></div>)}
            </div>
            <div {...r(0.2)}>{foot(W.a.foot, W.drawnSoft)}</div>
          </div>
        )}

        {v === 'b' && (
          <div className="cap-var" id={`${id}-b`} role="tabpanel" aria-labelledby={`${id}-tab-b`}>
            <h2 {...r(0.05, 'cap-b-h')}>{W.b.h} <span className="w">{W.b.wheel.map((w, i) => <span key={w} className={i === bi ? 'cur' : i === bPrev ? 'out' : ''} aria-hidden={i !== bi}>{w}</span>)}</span></h2>
            <p {...r(0.1, 'cap-b-p')}>{W.b.p}</p>
            <div className="cap-b-grid">
              {CAP_KEYS.map((k, i) => (
                <div key={k} className={'cap-b-card' + (bLit === k ? ' lit' : '') + (shown ? ' in' : '')} style={{ '--d': `${0.15 + i * 0.08}s` } as React.CSSProperties}>
                  <span className="name">{W.cap[k].n}</span>
                  <div className="verb">{W.cap[k].verb[0]} <em>{W.cap[k].verb[1]}</em></div>
                  <p>{W.cap[k].p}</p>
                  <div className="res"><div className="row" /><div className="row" /><div className="row" /></div>
                  <span className="lands">{W.cap[k].land}</span>
                  <button type="button" aria-label={fillIn(W.show, W.cap[k].n)} onClick={() => setBLit(k)} />
                </div>
              ))}
            </div>
            <div {...r(0.3)}>{foot(W.b.foot, W.drawn)}</div>
          </div>
        )}

        {v === 'c' && (
          <div className="cap-var" id={`${id}-c`} role="tabpanel" aria-labelledby={`${id}-tab-c`}>
            <div {...r(0, 'cap-head')}><h2>{W.c.h}</h2><p>{W.c.p}</p></div>
            <div className="cap-c-wrap">
              <div role="tablist" aria-label={W.label} {...r(0.1, 'cap-c-tabs')}>
                {CAP_KEYS.map((k) => (
                  <button key={k} type="button" role="tab" className="cap-c-tab" aria-selected={cCur === k} onClick={() => { setCCur(k); setCRun((x) => x + 1); }}>
                    <i>{ICON[k]}</i><div><b>{W.cap[k].n}</b><span>{W.cap[k].cTab}</span></div>
                  </button>
                ))}
              </div>
              <div {...r(0.2, 'cap-c-stage')}>
                <div className="cap-c-side"><span className="mono">{W.youHave}</span>
                  <div className="cap-c-doc before" key={`b${cCur}${cRun}${cSoft}`}>
                    <span className="t">{W.c.before[cCur]}</span>
                    {cCur === 'transcribe' ? <div className="wave">{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ '--h': `${20 + Math.abs(Math.sin(i * 1.3)) * 70}%` } as React.CSSProperties} />)}</div> : null}
                    {(cCur === 'transcribe' ? ['50%'] : cCur === 'extract' ? ['90%', '70%', '85%', '40%', '75%'] : cCur === 'sign' ? ['85%', '80%', '60%', '30%'] : ['88%', '76%', '82%', '35%']).map((w, i) => <div key={i} className={'l' + (cCur === 'sign' && i === 3 ? ' ink' : '')} style={{ '--w': w } as React.CSSProperties} />)}
                    <div className="scan" />
                  </div>
                </div>
                <div className="cap-c-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6" /></svg></div>
                <div className="cap-c-side"><span className="mono">{W.youGet}</span>
                  <div className="cap-c-doc after" key={`a${cCur}${cRun}${cSoft}`}>
                    <span className="t">{cAfter.t}</span>
                    <dl className="f">{cAfter.rows.map(([dt, dd]) => <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>)}</dl>
                    <span className="pill">{cAfter.pill}</span>
                  </div>
                </div>
                <div className="cap-c-lands"><span>{W.landsIn}</span><Chips names={soft} cur={cSoft} onPick={setCSoft} label={W.yourSoftware} /></div>
              </div>
            </div>
            <div {...r(0.3)}>{foot(W.c.foot, W.drawn)}</div>
          </div>
        )}

        {v === 'd' && (
          <div className="cap-var" id={`${id}-d`} role="tabpanel" aria-labelledby={`${id}-tab-d`}>
            <div className="cap-d-wrap">
              <div className="cap-d-copy">
                <h2 {...r(0.05)}>{W.d.h}</h2>
                <div {...r(0.1, 'lines')}>{CAP_KEYS.map((k, i) => <span key={k} className={docked.includes(k) ? 'on' : ''}>{W.d.lines[i]}</span>)}</div>
                <p {...r(0.15)}>{W.d.p}</p>
                <div {...r(0.2, 'cap-d-pick')}><span className="mono">{W.yourSoftware}</span><Chips names={soft} cur={dSoft} onPick={setDSoft} label={W.yourSoftware} /></div>
              </div>
              <div {...r(0.2, 'cap-d-board')}>
                <svg className="cap-d-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  {CAP_KEYS.map((k) => <line key={k} x1={dLines[k][0]} y1={dLines[k][1]} x2="50" y2="50" className={docked.includes(k) ? 'on' : ''} />)}
                </svg>
                <div className="cap-d-soft">
                  <div className="bar"><i /><i /><i /><b>{soft[dSoft]}</b></div>
                  <div className="rec">{W.d.rec}</div>
                  <div className="rows"><i /><i style={{ width: '70%' }} /></div>
                  <div className="got">{CAP_KEYS.filter((k) => docked.includes(k)).map((k) => <span key={k}>{W.cap[k].got}</span>)}</div>
                </div>
                {CAP_KEYS.map((k, i) => (
                  <button key={k} type="button" className={`cap-d-cap p${i + 1}`} aria-pressed={docked.includes(k)} onClick={() => toggle(k)}>{ICON[k]}<b>{W.cap[k].n}</b></button>
                ))}
              </div>
            </div>
            <div {...r(0.3)}>{foot(W.d.foot, W.drawn)}</div>
          </div>
        )}
      </div>
    </section>
  );
}
