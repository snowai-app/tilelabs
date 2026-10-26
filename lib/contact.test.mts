import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONTACT_EMAIL, mailtoFor, validEmail } from './contact.ts';

test('an email must look like one', () => {
  assert.equal(validEmail('sam@example.com'), true);
  assert.equal(validEmail('  sam@example.com '), true);
  assert.equal(validEmail('sam@'), false);
  assert.equal(validEmail(''), false);
});

test('the message becomes a link to the support inbox, with everything typed in it and nothing sent', () => {
  const href = mailtoFor('white', ' Sam Rivera ', 'sam@example.com', ' Hello & thanks ');
  assert.ok(href.startsWith(`mailto:${CONTACT_EMAIL}?subject=`));
  const q = new URLSearchParams(href.split('?')[1]);
  assert.equal(q.get('subject'), 'Tile Labs: White label');
  assert.equal(q.get('body'), 'Looking for: White label\nName: Sam Rivera\nEmail: sam@example.com\n\nHello & thanks');
});

test('an unknown kind falls back to a product', () => {
  assert.match(decodeURIComponent(mailtoFor('x', 'a', 'a@b.co', '')), /Tile Labs: A product/);
});
