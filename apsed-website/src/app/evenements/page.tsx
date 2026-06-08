import type { Metadata } from 'next';
import EventCard from '@/components/EventCard';
import { client } from '@/sanity/lib/client';
import { allEventsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Événements',
  description:
    'Découvrez les événements sportifs organisés par APSED pour les entreprises de Djibouti.',
};

export default async function EventsPage() {
  let events: any[] = [];
  try {
    events = await client.fetch(allEventsQuery);
  } catch {
    events = [];
  }

  return (
    <div className="container-x py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
          Nos événements
        </p>
        <h1 className="display-title mt-3 text-4xl sm:text-5xl">
          Challenges, tournois & team building
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Retrouvez l&apos;ensemble de nos événements à venir et passés.
        </p>
      </header>

      {events.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e._id} item={e} basePath="/evenements" />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-ink/60">
          Aucun événement publié pour le moment. Revenez bientôt !
        </p>
      )}
    </div>
  );
}
