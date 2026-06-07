import type { Metadata } from 'next';
import EventCard from '@/components/EventCard';
import { client } from '@/sanity/lib/client';
import { allNewsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Les dernières actualités et nouvelles d\u2019APSED.',
};

export default async function NewsPage() {
  let news: any[] = [];
  try {
    news = await client.fetch(allNewsQuery);
  } catch {
    news = [];
  }

  return (
    <div className="container-x py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
          Actualités
        </p>
        <h1 className="display-title mt-3 text-4xl sm:text-5xl">
          Les dernières nouvelles
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Suivez l&apos;actualité d&apos;APSED et de ses événements.
        </p>
      </header>

      {news.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <EventCard key={n._id} item={n} basePath="/actualites" />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-ink/60">Aucune actualité pour le moment.</p>
      )}
    </div>
  );
}
