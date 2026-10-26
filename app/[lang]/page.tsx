import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Home from '@/components/Home';
import { OTHER, alternates, isLang } from '@/lib/legal-words';
import { SITE } from '@/lib/site-words';

/* The front page in Spanish, Hindi and Chinese (T-3821): one page each, made ahead of time. Any other word in the address is a 404. */
export const dynamicParams = false;
export const generateStaticParams = () => OTHER.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const m = SITE[lang].meta;
  return { title: m.title, description: m.description, alternates: alternates('home') };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === 'en') notFound();
  return <Home lang={lang} />;
}
