import { PRODUCT_WORDS } from './product-words.ts';
import type { Frame, Product, Row } from './products.ts';
import type { Lang } from './legal-words.ts';

/** The products' drawn screens in a language. English is the key into PRODUCT_WORDS; a phrase it does not hold stays English (the test fails first), and the invented people, addresses and the products' own names are never in it. */
const COL: Record<Exclude<Lang, 'en'>, number> = { es: 0, hi: 1, zh: 2, ja: 3, ko: 4, pt: 5 };

export function tr(lang: Lang, s: string): string {
  if (lang === 'en' || !s) return s;
  return PRODUCT_WORDS[s]?.[COL[lang]] ?? s;
}

function frame(f: Frame, lang: Lang): Frame {
  const t = (s: string) => tr(lang, s);
  const base = { t: t(f.t), act: t(f.act), cap: t(f.cap) };
  switch (f.k) {
    case 'list': return { ...f, ...base, rows: f.rows.map(([a, b, tone]): Row => (tone ? [t(a), t(b), tone] : [t(a), t(b)])) };
    case 'checks': return { ...f, ...base, items: f.items.map(t) };
    case 'chat': return { ...f, ...base, msgs: f.msgs.map(([m, mine]) => [t(m), mine] as [string, 0 | 1]) };
    case 'form': return { ...f, ...base, fields: f.fields.map(([a, b]) => [t(a), t(b)] as [string, string]) };
    default: return { ...f, ...base };
  }
}

export function localizeProducts(products: Product[], lang: Lang): Product[] {
  if (lang === 'en') return products;
  return products.map((p) => ({ ...p, tag: tr(lang, p.tag), what: tr(lang, p.what), who: tr(lang, p.who), fr: p.fr.map((f) => frame(f, lang)) }));
}
