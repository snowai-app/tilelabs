import type { Metadata } from 'next';
import LegalDoc from '@/components/LegalDoc';
import { FRAME, alternates } from '@/lib/legal-words';

export const metadata: Metadata = { title: `${FRAME.en.termsTitle}: Tile Labs`, description: FRAME.en.termsDesc, alternates: alternates('terms') };

export default function Page() {
  return <LegalDoc lang="en" doc="terms" />;
}
