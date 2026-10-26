import type { MetadataRoute } from 'next';
import { LANGS, legalPath } from '@/lib/legal-words';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://tilelabs.si/', changeFrequency: 'monthly', priority: 1 },
    ...LANGS.flatMap((l) => (['privacy', 'terms'] as const).map((d) => ({ url: `https://tilelabs.si${legalPath(l, d)}`, changeFrequency: 'yearly' as const, priority: 0.3 }))),
  ];
}
