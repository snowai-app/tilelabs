import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LANGS } from './legal-words.ts';
import { SITE } from './site-words.ts';
import { PRODUCTS } from './products.ts';
import { PRODUCT_WORDS } from './product-words.ts';
import { localizeProducts, tr } from './localize.ts';
import { mailtoFor } from './contact.ts';

const strings = (o: unknown, out: string[] = []): string[] => {
  if (typeof o === 'string') out.push(o);
  else if (Array.isArray(o)) o.forEach((x) => strings(x, out));
  else if (o && typeof o === 'object') Object.values(o).forEach((x) => strings(x, out));
  return out;
};
const holes = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

test('every language has every word of the front page, with the same shape as English', () => {
  const shape = (o: unknown): unknown => (Array.isArray(o) ? o.map(shape) : o && typeof o === 'object' ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, shape(v)])) : 's');
  for (const l of LANGS) {
    assert.deepEqual(shape(SITE[l]), shape(SITE.en), `${l} differs in shape`);
    for (const s of strings(SITE[l])) assert.ok(s.trim(), `${l} has an empty word`);
  }
});

test('a {slot} in English is in every translation, and only those', () => {
  const en = strings(SITE.en), pairs = LANGS.filter((l) => l !== 'en');
  for (const l of pairs) strings(SITE[l]).forEach((s, i) => assert.deepEqual(holes(s), holes(en[i]), `${l}: ${s}`));
});

test('the products named in the wall are the fifteen the tiles hold', () => {
  assert.equal(PRODUCTS.length, 15);
  for (const l of LANGS) assert.equal(SITE[l].products.sr.length, 12);
});

/** Every phrase the products' screens show, that is not an invented name. */
function phrases(): string[] {
  const keep = new Set(['Sam Rivera', 'Alex Chen', 'Dana Wu', 'sam@example.com']);
  const out = new Set<string>();
  for (const p of PRODUCTS) {
    [p.tag, p.what, p.who].forEach((x) => out.add(x));
    for (const f of p.fr) {
      out.add(f.t); out.add(f.act); out.add(f.cap);
      if (f.k === 'list') f.rows.forEach(([a, b]) => { out.add(a); out.add(b); });
      if (f.k === 'checks') f.items.forEach((x) => out.add(x));
      if (f.k === 'chat') f.msgs.forEach(([t]) => out.add(t));
      if (f.k === 'form') f.fields.forEach(([a, b]) => { out.add(a); out.add(b); });
    }
  }
  out.delete('');
  return [...out].filter((x) => !keep.has(x));
}

test('every phrase on a product screen is translated into Spanish, Hindi and Chinese', () => {
  for (const s of phrases()) {
    const t = PRODUCT_WORDS[s];
    assert.ok(t, `no translation for: ${s}`);
    t.forEach((x, i) => { assert.ok(x.trim(), `empty ${i} for ${s}`); assert.equal((x.match(/\{/g) ?? []).length, (s.match(/\{/g) ?? []).length, `braces differ: ${s}`); });
  }
});

test('the dictionary holds nothing the screens no longer ask for', () => {
  const asked = new Set(phrases());
  for (const k of Object.keys(PRODUCT_WORDS)) assert.ok(asked.has(k), `unused: ${k}`);
});

test('localising keeps the names, addresses and shapes, and changes only the words', () => {
  for (const l of LANGS) {
    const loc = localizeProducts(PRODUCTS, l);
    loc.forEach((p, i) => { assert.equal(p.n, PRODUCTS[i].n); assert.equal(p.addr, PRODUCTS[i].addr); assert.equal(p.fr.length, PRODUCTS[i].fr.length); p.fr.forEach((f, j) => assert.equal(f.k, PRODUCTS[i].fr[j].k)); });
  }
  assert.equal(tr('en', 'Fine'), 'Fine');
  assert.equal(tr('es', 'Fine'), 'Bien');
  assert.equal(tr('hi', 'Sam Rivera'), 'Sam Rivera');
});

test('the mail the form opens stays English for the inbox, and says which language the visitor read', () => {
  const href = mailtoFor('white', 'Sam', 'sam@example.com', 'Hola', 'es');
  assert.equal(new URLSearchParams(href.split('?')[1]).get('subject'), 'Tile Labs: White label [es]');
});
