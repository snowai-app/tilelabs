'use client';

import { useEffect } from 'react';
import { initPage } from '@/lib/page';
import type { Lang } from '@/lib/legal-words';

/* Draws nothing. Wires the page once the server's markup is in the browser, and unwires it when the page goes. */
export default function Behaviour({ lang }: { lang: Lang }) {
  useEffect(() => initPage(lang), [lang]);
  return null;
}
