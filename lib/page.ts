import { PRODUCTS as BASE_PRODUCTS } from './products.ts';
import { frameHtml } from './frames.ts';
import { localizeProducts } from './localize.ts';
import { SITE } from './site-words.ts';
import type { Lang } from './legal-words.ts';

/* Everything on the page that moves or answers a press, in one place. `initPage` finds what the server drew by its ids and
   classes, wires it, and returns a function that undoes it all. Nothing here sends anything anywhere. */

type Rgb = [number, number, number];
type Tile = { i: number; c: number; r: number; x: number; y: number; g: number; alt: boolean; flip: number; hv: number; next: number };

const $ = <T extends HTMLElement = HTMLElement>(id: string): T => document.getElementById(id) as T;

export function initPage(lang: Lang = 'en'): () => void {
  const S = SITE[lang];
  const PRODUCTS = localizeProducts(BASE_PRODUCTS, lang);
  const undo: (() => void)[] = [];
  const on = <K extends keyof HTMLElementEventMap>(el: EventTarget, type: K | string, fn: (e: never) => void, opts?: AddEventListenerOptions) => {
    el.addEventListener(type, fn as EventListener, opts);
    undo.push(() => el.removeEventListener(type, fn as EventListener, opts));
  };
  const root = document.documentElement;
  const body = document.body;

  /* ---------- motion: on unless the visitor asks for less, and the Pause button ---------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionOn = !reduce.matches;
  body.setAttribute('data-motion', motionOn ? 'on' : 'off');
  const pauseBtn = $('pause'), pauseText = $('pauseText');
  let mosaic: { setRunning: (on: boolean) => void } | null = null;
  function setMotion(next: boolean) {
    motionOn = next;
    body.setAttribute('data-motion', next ? 'on' : 'off');
    pauseBtn.setAttribute('aria-pressed', next ? 'false' : 'true');
    pauseBtn.setAttribute('aria-label', next ? S.hero.pauseAria : S.hero.playAria);
    pauseText.textContent = next ? S.hero.pause : S.hero.play;
    mosaic?.setRunning(next);
    const v = document.querySelector<HTMLVideoElement>('#dVideo video');
    if (v) { if (next) v.play().catch(() => {}); else v.pause(); }
  }
  on(pauseBtn, 'click', () => setMotion(!motionOn));

  /* ---------- the logo goes back to the top and leaves the plain site address in the bar (no #top) ---------- */
  const brand = document.querySelector<HTMLAnchorElement>('a.brand');
  if (brand) on(brand, 'click', (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce.matches ? 'auto' : 'smooth' });
    try { history.replaceState(null, '', location.pathname + location.search); } catch { /* the address stays as it is */ }
  });

  /* ---------- things arrive as they are scrolled to ---------- */
  const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  reveals.forEach((el, i) => el.style.setProperty('--d', `${(i % 4) * 0.09}s`));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { threshold: 0.15 });
    reveals.forEach((el) => io.observe(el));
    undo.push(() => io.disconnect());
  } else reveals.forEach((el) => el.classList.add('in'));

  /* ---------- the wall of tiles: fifteen products, each one pressable ---------- */
  mosaic = (function () {
    const stage = document.querySelector<HTMLElement>('.stage')!;
    const cv = $<HTMLCanvasElement>('mosaic');
    const ctx = cv.getContext('2d')!;
    const cols = 5, rows = 3;
    let W = 0, H = 0, dpr = 1, size = 0, gap = 8, tiles: Tile[] = [], hover = -1, pks: HTMLButtonElement[] = [];
    let pal: { a: Rgb; b: Rgb; ink: Rgb; glaze: Rgb[] } | null = null;
    let running = false, raf = 0;
    const t0 = performance.now();
    const ptr = { x: -999, y: -999, tx: -999, ty: -999, on: false, k: 0 };
    const hex = (c: string): Rgb => { let s = c.trim().replace('#', ''); if (s.length === 3) s = s.replace(/(.)/g, '$1$1'); const n = parseInt(s, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
    const mix = (a: Rgb, b: Rgb, k: number) => `rgb(${Math.round(a[0] + (b[0] - a[0]) * k)},${Math.round(a[1] + (b[1] - a[1]) * k)},${Math.round(a[2] + (b[2] - a[2]) * k)})`;
    function readPal() {
      const s = getComputedStyle(root);
      const g = (n: string) => hex(s.getPropertyValue(n));
      pal = { a: g('--tile'), b: g('--tile-2'), ink: g('--ink'), glaze: [g('--g1'), g('--g2'), g('--g3'), g('--g4')] };
    }
    function build() {
      const r = cv.getBoundingClientRect();
      W = r.width; H = r.height; dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      gap = W < 420 ? 6 : 8;
      const padX = W < 420 ? 10 : 16, padT = W < 420 ? 10 : 16, padB = W < 420 ? 32 : 50;
      size = Math.min((W - 2 * padX - gap * (cols - 1)) / cols, (H - padT - padB - gap * (rows - 1)) / rows);
      const ox = (W - (cols * size + (cols - 1) * gap)) / 2;
      const oy = padT + (H - padT - padB - (rows * size + (rows - 1) * gap)) / 2;
      const old = tiles;
      tiles = [];
      pks.forEach((b) => b.remove());
      pks = [];
      for (let i = 0; i < PRODUCTS.length; i++) {
        const c = i % cols, r2 = Math.floor(i / cols);
        tiles.push({ i, c, r: r2, x: ox + c * (size + gap), y: oy + r2 * (size + gap), g: i % 4, alt: (i * 7) % 3 === 0, flip: old[i] ? old[i].flip : -1, hv: old[i] ? old[i].hv : 0, next: 2500 + ((i * 7919) % 8000) });
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'pk';
        b.setAttribute('aria-label', S.demo.seeDemo.replace('{n}', PRODUCTS[i].n).replace('{tag}', PRODUCTS[i].tag.toLowerCase()));
        Object.assign(b.style, { left: `${tiles[i].x}px`, top: `${tiles[i].y}px`, width: `${size}px`, height: `${size}px` });
        b.addEventListener('click', () => { const tl = tiles[i]; if (tl.flip < 0) tl.flip = 0; openDemo(i, b); });
        stage.appendChild(b);
        pks.push(b);
      }
    }
    function rr(x: number, y: number, w: number, h: number, r: number) { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); }
    function draw(now: number) {
      if (!pal) return;
      const t = now - t0;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ptr.x += (ptr.tx - ptr.x) * 0.16; ptr.y += (ptr.ty - ptr.y) * 0.16; ptr.k += ((ptr.on ? 1 : 0) - ptr.k) * 0.08;
      const R = (t * 0.085) % (Math.max(W, H) * 1.35);
      const cx = W * (0.5 + 0.3 * Math.sin(t * 0.00031)), cy = H * (0.5 + 0.28 * Math.sin(t * 0.00023 + 1));
      const fs = Math.max(10, Math.min(15, size * 0.17));
      for (let i = 0; i < tiles.length; i++) {
        const tl = tiles[i], mx = tl.x + size / 2, my = tl.y + size / 2;
        if (motionOn && tl.flip < 0 && t > tl.next) tl.flip = 0;
        let sx = 1;
        if (tl.flip >= 0) {
          tl.flip += 16 / 720; sx = Math.abs(Math.cos(tl.flip * Math.PI));
          if (tl.flip >= 1) { tl.flip = -1; tl.next = t + 3500 + ((i * 7919) % 9000); sx = 1; }
        }
        const d = Math.hypot(mx - cx, my - cy), wave = Math.exp(-Math.pow(d - R, 2) / (2 * 40 * 40));
        const dp = Math.hypot(mx - ptr.x, my - ptr.y), p = Math.exp(-(dp * dp) / (2 * 70 * 70)) * ptr.k;
        tl.hv += ((hover === i ? 1 : 0) - tl.hv) * (motionOn ? 0.2 : 1);
        const k = Math.min(1, (motionOn ? wave * 0.5 : 0) + p * 0.45 + tl.hv * 0.55);
        const born = motionOn ? Math.min(1, Math.max(0, (t - (tl.c + tl.r) * 70) / 520)) : 1, ease = 1 - Math.pow(1 - born, 3);
        const gl = pal.glaze[tl.g], base = tl.alt ? pal.b : pal.a;
        const amt = 0.22 + 0.68 * k, col = mix(base, gl, amt);
        const s = size * (0.93 + 0.07 * ease + 0.04 * k + 0.04 * tl.hv);
        ctx.save();
        ctx.globalAlpha = ease; ctx.translate(mx, my); ctx.scale(sx, 1);
        ctx.fillStyle = col; rr(-s / 2, -s / 2, s, s, 10); ctx.fill();
        ctx.strokeStyle = `rgba(255,255,255,${(0.1 + 0.25 * k).toFixed(2)})`; ctx.lineWidth = 1; rr(-s / 2 + 0.5, -s / 2 + 0.5, s - 1, s - 1, 9.5); ctx.stroke();
        const light = amt > 0.55, pr = PRODUCTS[i], pad = s * 0.12;
        ctx.fillStyle = light ? '#ffffff' : mix(pal.ink, pal.ink, 0);
        let f1 = fs;
        ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
        const face1 = (px: number) => `800 ${px}px "Bricolage Grotesque Variable", system-ui, sans-serif`;
        ctx.font = face1(f1);
        while (f1 > 9 && ctx.measureText(pr.n).width > s - 2 * pad) { f1 -= 0.5; ctx.font = face1(f1); }
        ctx.fillText(pr.n, -s / 2 + pad, s / 2 - pad - (s > 84 ? fs * 1.15 : 0));
        if (s > 84) {
          let f2 = Math.max(9, fs * 0.78);
          const face2 = (px: number) => `500 ${px}px "DM Mono", ui-monospace, monospace`;
          ctx.globalAlpha = ease * 0.8; ctx.font = face2(f2);
          while (f2 > 8 && ctx.measureText(pr.tag).width > s - 2 * pad) { f2 -= 0.5; ctx.font = face2(f2); }
          ctx.fillText(pr.tag, -s / 2 + pad, s / 2 - pad);
        }
        ctx.restore();
      }
    }
    function loop(now: number) { if (!running) return; draw(now); raf = requestAnimationFrame(loop); }
    function setRunning(go: boolean) {
      if (go && !running) { running = true; raf = requestAnimationFrame(loop); }
      if (!go) { running = false; cancelAnimationFrame(raf); draw(performance.now()); }
    }
    function hit(x: number, y: number) { for (const t of tiles) if (x >= t.x && x <= t.x + size && y >= t.y && y <= t.y + size) return t.i; return -1; }
    const redraw = () => { if (!running) draw(performance.now()); };
    on(stage, 'pointermove', (e: PointerEvent) => { const r = cv.getBoundingClientRect(); ptr.tx = e.clientX - r.left; ptr.ty = e.clientY - r.top; ptr.on = true; hover = hit(ptr.tx, ptr.ty); redraw(); });
    on(stage, 'pointerleave', () => { ptr.on = false; hover = -1; redraw(); });
    on(stage, 'focusin', (e: FocusEvent) => { const i = pks.indexOf(e.target as HTMLButtonElement); if (i > -1) { hover = i; redraw(); } });
    on(stage, 'focusout', () => { hover = -1; redraw(); });
    if ('ResizeObserver' in window) { const ro = new ResizeObserver(() => { build(); redraw(); }); ro.observe(cv); undo.push(() => ro.disconnect()); }
    const mo = new MutationObserver(() => { readPal(); redraw(); });
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    undo.push(() => mo.disconnect());
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    on(mq, 'change', () => { readPal(); redraw(); });
    undo.push(() => { running = false; cancelAnimationFrame(raf); pks.forEach((b) => b.remove()); });
    readPal(); build();
    const api = { setRunning };
    setRunning(motionOn);
    return api;
  })();

  /* ---------- the white-label example: one product, three brands ---------- */
  const brands = [
    { n: 'Harbor Pizza', l: 'H', a: '#0e7c7b', u: 'app.harborpizza.example', g: S.what.goals[0] },
    { n: 'Northside Fitness', l: 'N', a: '#c2410c', u: 'members.northside.example', g: S.what.goals[1] },
    { n: 'Brightwell Clinic', l: 'B', a: '#3d7a3a', u: 'portal.brightwell.example', g: S.what.goals[2] },
  ];
  const wl = $('wl'), pick = Array.from(document.querySelectorAll<HTMLButtonElement>('.wl-pick button'));
  let cur = 0, hold = false;
  function showBrand(i: number) {
    cur = i;
    const b = brands[i];
    wl.style.setProperty('--wa', b.a);
    $('wlLogo').textContent = b.l; $('wlName').textContent = b.n; $('wlAddr').textContent = b.u; $('wlGo').textContent = b.g;
    pick.forEach((btn, j) => btn.setAttribute('aria-pressed', j === i ? 'true' : 'false'));
  }
  pick.forEach((btn) => on(btn, 'click', () => { hold = true; showBrand(Number(btn.getAttribute('data-i'))); }));
  const brandTimer = window.setInterval(() => { if (motionOn && !hold) showBrand((cur + 1) % brands.length); }, 3200);
  undo.push(() => clearInterval(brandTimer));
  showBrand(0);

  /* ---------- the four steps fill as you scroll ---------- */
  const steps = $('steps'), stepEls = Array.from(steps.querySelectorAll<HTMLElement>('.step'));
  function onScroll() {
    const r = steps.getBoundingClientRect(), vh = window.innerHeight || 800;
    const p = Math.min(1, Math.max(0, (vh * 0.72 - r.top) / (r.height + vh * 0.1)));
    steps.style.setProperty('--p', p.toFixed(3));
    stepEls.forEach((s, i) => s.classList.toggle('on', p >= (i + 0.35) / stepEls.length));
  }
  on(window, 'scroll', onScroll, { passive: true });
  on(window, 'resize', onScroll);
  onScroll();
  /* Below the fold the first step is lit, so the section reads at rest. */
  if (!(steps.getBoundingClientRect().top < (window.innerHeight || 800))) stepEls[0]?.classList.add('on');

  /* ---------- the demo a tile opens ---------- */
  const dlg = $<HTMLDialogElement>('demo');
  let dCur = 0, dStep = 0, dAuto = true, dTimer = 0, dOpener: HTMLElement | null = null;
  function syncAuto() {
    $('dAuto').textContent = dAuto ? S.demo.pause : S.demo.play;
    $('dAct').classList.toggle('cue', dAuto && motionOn);
    clearInterval(dTimer);
    if (dAuto && motionOn) dTimer = window.setInterval(advance, 3400);
  }
  function showStep(n: number) {
    const pr = PRODUCTS[dCur], f = pr.fr[n];
    dStep = n;
    $('dFrame').innerHTML = frameHtml(f, { signHere: S.demo.signHere, paid: S.demo.paid });
    $('dCap').textContent = f.cap;
    const act = $<HTMLButtonElement>('dAct');
    act.hidden = !f.act; act.textContent = f.act || ''; act.className = 'go2' + (dAuto && motionOn ? ' cue' : '');
    const dots = $('dDots');
    dots.innerHTML = '';
    pr.fr.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', S.demo.step.replace('{n}', String(i + 1)));
      if (i === n) b.setAttribute('aria-current', 'true');
      b.addEventListener('click', () => { dAuto = false; syncAuto(); showStep(i); });
      dots.appendChild(b);
    });
  }
  function advance() { showStep(dStep + 1 < PRODUCTS[dCur].fr.length ? dStep + 1 : 0); }
  function openDemo(i: number, opener?: HTMLElement) {
    dCur = (i + PRODUCTS.length) % PRODUCTS.length;
    const pr = PRODUCTS[dCur];
    if (opener) dOpener = opener;
    $('dTag').textContent = pr.tag; $('dName').textContent = pr.n; $('dWhat').textContent = pr.what; $('dFor').textContent = pr.who; $('dAddr').textContent = pr.addr;
    dlg.classList.toggle('hasvideo', !!pr.video);
    const vbox = $('dVideo');
    vbox.innerHTML = '';
    if (pr.video) {
      const v = document.createElement('video');
      v.muted = true; v.loop = true; v.controls = true; v.playsInline = true; v.preload = 'auto';
      v.setAttribute("aria-label", S.demo.videoAria.replace('{n}', pr.n));
      for (const [ext, type] of [['mp4', 'video/mp4'], ['webm', 'video/webm']]) { const so = document.createElement('source'); so.src = `/${pr.video}.${ext}`; so.type = type; v.appendChild(so); }
      vbox.appendChild(v);
      if (motionOn) v.play().catch(() => {});
      dAuto = false; clearInterval(dTimer);
    } else { dAuto = motionOn; showStep(0); syncAuto(); }
    if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); }
  }
  on($('dAct'), 'click', () => { dAuto = false; syncAuto(); advance(); });
  on($('dAuto'), 'click', () => { dAuto = !dAuto; syncAuto(); });
  on($('dPrev'), 'click', () => openDemo(dCur - 1));
  on($('dNext'), 'click', () => openDemo(dCur + 1));
  on($('dClose'), 'click', () => dlg.close());
  on(dlg, 'click', (e: MouseEvent) => { if (e.target === dlg) dlg.close(); });
  on(dlg, 'close', () => { clearInterval(dTimer); $('dVideo').innerHTML = ''; dOpener?.focus(); });
  on($('dTalk'), 'click', () => {
    dlg.close();
    const k1 = document.getElementById('k1') as HTMLInputElement | null;
    if (k1) k1.checked = true;
    const m = document.getElementById('fmsg') as HTMLTextAreaElement | null;
    if (m && !m.value) m.value = S.demo.wish.replace('{n}', PRODUCTS[dCur].n);
  });
  undo.push(() => clearInterval(dTimer));

  return () => { undo.forEach((fn) => fn()); };
}
