import type { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { eventSlugsQuery, newsSlugsQuery } from '@/sanity/lib/queries';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.apsed.dj';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let eventSlugs: string[] = [];
  let newsSlugs: string[] = [];
  try {
    eventSlugs = await client.fetch(eventSlugsQuery);
    newsSlugs = await client.fetch(newsSlugsQuery);
  } catch {
    // En cas d'indisponibilité de Sanity, on renvoie au moins les pages fixes.
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/evenements`, priority: 0.8 },
    { url: `${base}/actualites`, priority: 0.7 },
  ];

  const eventPages = eventSlugs.map((slug) => ({
    url: `${base}/evenements/${slug}`,
    priority: 0.6,
  }));

  const newsPages = newsSlugs.map((slug) => ({
    url: `${base}/actualites/${slug}`,
    priority: 0.5,
  }));

  return [...staticPages, ...eventPages, ...newsPages];
}
