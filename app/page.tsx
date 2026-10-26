import type { Metadata } from 'next';
import Home from '@/components/Home';
import { alternates } from '@/lib/legal-words';

export const metadata: Metadata = { alternates: alternates('home') };

export default function Page() {
  return <Home lang="en" />;
}
