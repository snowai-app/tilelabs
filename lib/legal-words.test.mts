import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FRAME, LANGS, PRIVACY, SLOTS, TERMS, fill, legalPath } from './legal-words.ts';

const slots = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

test('every language has the same paragraphs, headings and slots as English', () => {
  for (const [name, docs] of [['privacy', PRIVACY], ['terms', TERMS]] as const) {
    for (const l of LANGS) {
      assert.equal(docs[l].length, docs.en.length, `${l} ${name} has a different number of paragraphs`);
      docs.en.forEach((b, i) => {
        assert.equal(Boolean(docs[l][i].h), Boolean(b.h), `${l} ${name} ${i}: heading differs`);
        assert.deepEqual(slots(docs[l][i].p), slots(b.p), `${l} ${name} ${i}: different slots`);
        assert.ok(docs[l][i].p.trim(), `${l} ${name} ${i} is empty`);
      });
    }
  }
});

test('a paragraph names only slots the page knows how to draw or fill', () => {
  const known = new Set<string>([...SLOTS, 'legal', 'trading', 'place', 'uen', 'line']);
  for (const docs of [PRIVACY, TERMS]) for (const l of LANGS) for (const b of docs[l]) for (const s of slots(b.p)) assert.ok(known.has(s), `${l}: {${s}}`);
});

test('the frame has every word in every language, and the translations say they are translations', () => {
  for (const l of LANGS) {
    for (const [k, v] of Object.entries(FRAME[l])) if (k !== 'note') assert.ok(String(v).trim(), `${l} ${k} is empty`);
    assert.ok(FRAME[l].last.includes('{date}'), `${l} last has no date slot`);
    assert.equal(Boolean(FRAME[l].note), l !== 'en', `${l} translated note`);
  }
});

test('the company number is filled in, never left as a slot', () => {
  for (const l of LANGS) assert.ok(!/\{(legal|trading|place|uen|line)\}/.test(fill(PRIVACY[l][1].p, l)));
  assert.match(fill(PRIVACY.en[1].p, 'en'), /202648669R/);
});

test('English has no prefix, the others do', () => {
  assert.equal(legalPath('en', 'privacy'), '/privacy');
  assert.equal(legalPath('hi', 'terms'), '/hi/terms');
});
