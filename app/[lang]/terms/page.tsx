import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalDoc from '@/components/LegalDoc';
import { FRAME, OTHER, alternates, isLang } from '@/lib/legal-words';

/* The privacy policy and terms in Spanish, Hindi and Chinese (T-3820): one page each, made ahead of time. Any other word in the address is a 404. */
export const dynamicParams = false;
export const generateStaticParams = () => OTHER.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: `${FRAME[lang].termsTitle}: Tile Labs`, description: FRAME[lang].termsDesc, alternates: alternates('terms') };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === 'en') notFound();
  return <LegalDoc lang={lang} doc="terms" />;
}
