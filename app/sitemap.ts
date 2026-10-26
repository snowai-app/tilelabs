import type { MetadataRoute } from 'next';
import { LANGS, pathFor } from '@/lib/legal-words';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...LANGS.map((l) => ({ url: `https://tilelabs.si${l === 'en' ? '/' : pathFor(l, 'home')}`, changeFrequency: 'monthly' as const, priority: l === 'en' ? 1 : 0.8 })),
    ...LANGS.flatMap((l) => (['privacy', 'terms'] as const).map((d) => ({ url: `https://tilelabs.si${pathFor(l, d)}`, changeFrequency: 'yearly' as const, priority: 0.3 }))),
  ];
}
