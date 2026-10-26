/* The contact form sends nothing itself: a good message becomes a link that opens the visitor's own mail app, addressed to
   the family's support inbox, with what they typed already in it. Nothing leaves until they press send there. */

export const CONTACT_EMAIL = 'support@snowai.app';
export const KINDS: Record<string, string> = { product: 'A product', white: 'White label', custom: 'Custom software' };

export const validEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value.trim());

export function mailtoFor(kind: string, name: string, email: string, msg: string): string {
  const what = KINDS[kind] ?? KINDS.product;
  const body = [`Looking for: ${what}`, `Name: ${name.trim()}`, `Email: ${email.trim()}`, '', msg.trim()].join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Tile Labs: ${what}`)}&body=${encodeURIComponent(body)}`;
}
