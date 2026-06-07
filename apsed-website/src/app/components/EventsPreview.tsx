import Link from 'next/link';
import EventCard from './EventCard';

type Item = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: any;
  date?: string;
  location?: string;
};

export default function EventsPreview({ events }: { events: Item[] }) {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
            Événements
          </p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">
            Nos prochains rendez-vous
          </h2>
        </div>
        <Link href="/evenements" className="btn-ghost">
          Tous les événements
        </Link>
      </div>

      {events.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e._id} item={e} basePath="/evenements" />
          ))}
        </div>
      ) : (
        <div className="card mt-12 p-10 text-center">
          <p className="text-ink/60">
            Les prochains événements seront publiés ici très prochainement.
            <br />
            Contactez-nous pour organiser le vôtre.
          </p>
        </div>
      )}
    </section>
  );
}
