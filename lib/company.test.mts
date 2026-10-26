import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COMPANY, COMPANY_LINE } from './company.ts';

test('the company is named in full, with its Singapore company number', () => {
  assert.equal(COMPANY_LINE, 'Tile Private Limited DBA Tile Labs');
  assert.match(COMPANY.uen, /^\d{9}[A-Z]$/);
});
