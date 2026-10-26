'use client';

import { useEffect } from 'react';
import { initPage } from '@/lib/page';

/* Draws nothing. Wires the page once the server's markup is in the browser, and unwires it when the page goes. */
export default function Behaviour() {
  useEffect(() => initPage(), []);
  return null;
}
