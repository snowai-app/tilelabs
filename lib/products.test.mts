import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS } from './products.ts';
import { frameHtml, esc } from './frames.ts';

test('there are fifteen products, each named once', () => {
  assert.equal(PRODUCTS.length, 15);
  assert.equal(new Set(PRODUCTS.map((p) => p.n)).size, 15);
});

test('every product says what it does and who it suits, with a three-step demo', () => {
  for (const p of PRODUCTS) {
    assert.ok(p.tag && p.what.length > 30 && p.who.length > 10 && p.addr.endsWith('.example'), p.n);
    assert.equal(p.fr.length, 3, `${p.n} has three steps`);
    for (const f of p.fr) assert.ok(f.t && f.cap, `${p.n} step is described`);
  }
});

test('no product carries a price or a money figure of its own', () => {
  const text = JSON.stringify(PRODUCTS);
  assert.doesNotMatch(text, /[$€£]\s?\d|\d\s?(USD|EUR|per month|a month|\/mo)/i);
});

test('the only product with a video is Sign, and its files are named', () => {
  const withVideo = PRODUCTS.filter((p) => p.video);
  assert.deepEqual(withVideo.map((p) => [p.n, p.video]), [['Sign', 'sign-demo']]);
});

test('a step becomes markup and its words are escaped', () => {
  const html = frameHtml({ k: 'list', t: '<b>x</b>', rows: [['A & B', 'Fine', 'ok']], act: '', cap: '' });
  assert.match(html, /&lt;b&gt;x&lt;\/b&gt;/);
  assert.match(html, /A &amp; B/);
  assert.match(html, /class="pill ok"/);
  assert.equal(esc('"q"'), '&quot;q&quot;');
});

test('every step of every product draws', () => {
  for (const p of PRODUCTS) for (const f of p.fr) {
    const h = frameHtml(f);
    assert.ok(h.startsWith('<div class="scr a">') && h.endsWith('</div>'), `${p.n} ${f.k}`);
  }
});

test('bars are held between nought and a hundred per cent', () => {
  assert.match(frameHtml({ k: 'bars', t: 'x', vals: [-5, 50, 400], act: '', cap: '' }), /height:0%.*height:50%.*height:100%/);
});
