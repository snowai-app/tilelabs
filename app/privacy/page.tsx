import type { Metadata } from 'next';
import LegalDoc from '@/components/LegalDoc';
import { FRAME, alternates } from '@/lib/legal-words';

export const metadata: Metadata = { title: `${FRAME.en.privacyTitle}: Tile Labs`, description: FRAME.en.privacyDesc, alternates: alternates('privacy') };

export default function Page() {
  return <LegalDoc lang="en" doc="privacy" />;
}
