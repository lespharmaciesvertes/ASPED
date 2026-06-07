import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import EventsPreview from '@/components/EventsPreview';
import Contact from '@/components/Contact';
import { client } from '@/sanity/lib/client';
import { upcomingEventsQuery } from '@/sanity/lib/queries';

// Revalidation incrémentale : le contenu Sanity est rafraîchi sans rebuild.
export const revalidate = 60;

export default async function HomePage() {
  let events: any[] = [];
  try {
    events = await client.fetch(upcomingEventsQuery);
  } catch {
    events = [];
  }

  return (
    <>
      <Hero />
      <Services />
      <About />
      <EventsPreview events={events} />
      <Contact />
    </>
  );
}
