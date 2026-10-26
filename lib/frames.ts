import type { Frame } from './products.ts';

/* One step of a product's click-through, as the markup the demo window draws. Pure: it only builds a string, and every
   word that came from the data is escaped on the way in. */

export function esc(text: string): string {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const SIGNATURE = 'M6 32c10-26 18-26 14-6s8 16 16-2 10 4 20-2 8-14 18-6 12 14 22 2 14-14 24-4 20 6 34-8';

export function frameHtml(f: Frame, words: { signHere: string; paid: string } = { signHere: 'Sign here', paid: 'PAID' }): string {
  let h = `<div class="scr a"><div class="ttl">${esc(f.t)}</div>`;
  switch (f.k) {
    case 'list':
      for (const [label, pill, tone] of f.rows) h += `<div class="row"><span>${esc(label)}</span><span class="pill${tone ? ' ' + tone : ''}">${esc(pill)}</span></div>`;
      break;
    case 'checks':
      f.items.forEach((item, i) => { h += `<div class="row"><span class="tick${i < f.done ? ' on' : ''}"></span><span style="flex:1">${esc(item)}</span></div>`; });
      break;
    case 'bars':
      h += '<div class="bars">' + f.vals.map((v) => `<i style="height:${Math.max(0, Math.min(100, v))}%"></i>`).join('') + '</div>';
      break;
    case 'chat':
      for (const [text, mine] of f.msgs) h += `<div class="bub${mine ? ' me' : ''}">${esc(text)}</div>`;
      break;
    case 'form':
      for (const [label, value] of f.fields) h += `<div class="fld"><small>${esc(label)}</small><div>${esc(value)}</div></div>`;
      break;
    case 'sign':
      h += '<div class="ln m"></div><div class="ln"></div><div class="ln s"></div>';
      h += f.state === 'ask' ? `<div class="signhere">${esc(words.signHere)}</div>` : `<svg class="sig" viewBox="0 0 200 46" aria-hidden="true"><path d="${SIGNATURE}"/></svg>`;
      break;
    case 'wave':
      h += '<div class="wave">' + '<i></i>'.repeat(22) + '</div><div class="ln s"></div>';
      break;
    case 'paid':
      h += '<div class="ln m"></div><div class="ln s"></div><span class="paid">' + esc(words.paid) + '</span>';
      break;
  }
  return h + '</div>';
}
