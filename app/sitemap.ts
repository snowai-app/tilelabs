import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://tilelabs.si/', changeFrequency: 'monthly', priority: 1 }];
}
