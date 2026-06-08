import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Stats from '@/components/Stats';
import Reveal from '@/components/Reveal';
import Photo from '@/components/Photo';
import EventCard from '@/components/EventCard';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import {
  upcomingEventsQuery,
  latestNewsQuery,
  allPartnersQuery,
  allAlbumsQuery,
} from '@/sanity/lib/queries';

export const revalidate = 60;

async function safe<T>(p: Promise<T>, fallback: T): Promise<T> {
  try { return await p; } catch { return fallback; }
}

export default async function HomePage() {
  const [events, news, partners, albums] = await Promise.all([
    safe(client.fetch(upcomingEventsQuery), [] as any[]),
    safe(client.fetch(latestNewsQuery), [] as any[]),
    safe(client.fetch(allPartnersQuery), [] as any[]),
    safe(client.fetch(allAlbumsQuery), [] as any[]),
  ]);

  return (
    <>
      <Hero />
      <Marquee />

      {/* Intro APSED — texte + grande photo */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow">Qui sommes-nous ?</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Le sport au service des entreprises
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              L&apos;APSED accompagne les entreprises de Djibouti dans l&apos;organisation
              d&apos;activités sportives porteuses de sens : cohésion, santé et performance
              collective, au cœur d&apos;un projet durable et fédérateur.
            </p>
            <Link href="/apsed" className="btn-ghost mt-6">Découvrir l&apos;APSED</Link>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              src="/photos/equipe.jpg"
              alt="Équipe APSED"
              label="Photo : équipe / cohésion"
              className="aspect-[4/3] rounded-2xl shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Sport corporatif — bande immersive pleine largeur */}
      <section className="relative overflow-hidden">
        <Photo src="/photos/sport-corporatif.jpg" alt="" fill overlay label="Photo : action sportive" />
        <div className="container-x relative py-24 md:py-36">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Le concept</p>
              <h2 className="display-title mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
                Le sport corporatif, un levier stratégique
              </h2>
              <p className="mt-5 max-w-xl text-lg text-white/90">
                Bien plus qu&apos;une discipline : un projet institutionnel qui renforce la
                marque employeur, la santé des salariés et le lien entre acteurs économiques.
              </p>
              <Link href="/sport-corporatif" className="btn mt-7 bg-white text-ink hover:bg-white/90">
                En savoir plus
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* Citation / signature de marque */}
      <section className="bg-white">
        <div className="container-x py-20 text-center md:py-28">
          <Reveal>
            <img src="/logo-apsed.png" alt="" className="mx-auto h-16 w-16" />
            <blockquote className="mx-auto mt-6 max-w-3xl">
              <p className="display-title text-3xl leading-tight sm:text-4xl lg:text-5xl">
                «&nbsp;L&apos;esprit sportif,
                <span className="text-brand-gradient"> la force des entreprises</span>&nbsp;»
              </p>
            </blockquote>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-ink/50">
              APSED — Djibouti
            </p>
          </Reveal>
        </div>
      </section>

      {/* Événements */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="eyebrow">Projets & événements</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl">Nos prochains rendez-vous</h2>
          </Reveal>
          <Link href="/evenements" className="btn-ghost">Tout voir</Link>
        </div>
        {events.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e: any, i: number) => (
              <Reveal key={e._id} delay={i * 80}>
                <EventCard item={e} basePath="/evenements" />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="card mt-12 p-10 text-center text-ink/60">
            Les prochains événements seront publiés ici très bientôt.
          </div>
        )}
      </section>

      {/* Actualités */}
      {news.length > 0 && (
        <section className="bg-white">
          <div className="container-x py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Reveal>
                <p className="eyebrow">Actualités</p>
                <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl">Les dernières nouvelles</h2>
              </Reveal>
              <Link href="/actualites" className="btn-ghost">Toutes les actualités</Link>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((n: any, i: number) => (
                <Reveal key={n._id} delay={i * 80}>
                  <EventCard item={n} basePath="/actualites" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partenaires */}
      {partners.length > 0 && (
        <section className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-center">Ils nous soutiennent</p>
            <h2 className="display-title mt-3 text-center text-3xl sm:text-4xl lg:text-5xl">Nos partenaires</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {partners.slice(0, 10).map((p: any, i: number) => (
              <Reveal key={p._id} delay={i * 50}>
                <div className="card flex h-24 items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                  {p.logo ? (
                    <Image
                      src={urlForImage(p.logo).width(200).height(120).url()}
                      alt={p.name}
                      width={200}
                      height={120}
                      className="max-h-14 w-auto object-contain"
                    />
                  ) : (
                    <span className="font-display text-lg text-ink/70">{p.name}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/partenaires" className="btn-ghost">Tous nos partenaires</Link>
          </div>
        </section>
      )}

      {/* Galerie teaser */}
      {albums.length > 0 && (
        <section className="bg-white">
          <div className="container-x py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Reveal>
                <p className="eyebrow">En images</p>
                <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl">Galerie</h2>
              </Reveal>
              <Link href="/galerie" className="btn-ghost">Voir la galerie</Link>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {albums.slice(0, 3).map((a: any, i: number) => (
                <Reveal key={a._id} delay={i * 80}>
                  <Link href={`/galerie/${a.slug}`} className="card card-hover shimmer group block overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                      {a.coverImage ? (
                        <Image
                          src={urlForImage(a.coverImage).width(800).height(500).url()}
                          alt={a.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="grid h-full place-items-center brand-gradient">
                          <span className="font-display text-3xl text-white/90">APSED</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5"><h3 className="font-display text-lg uppercase">{a.title}</h3></div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bannière Antalya 2026 — pleine largeur immersive */}
      <section className="relative overflow-hidden">
        <Photo src="/photos/antalya.jpg" alt="" fill overlay label="Photo : Antalya / délégation" />
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl animate-float" />
        <div className="container-x relative py-24 md:py-36">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Projet phare</p>
              <h2 className="display-title mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">Cap sur Antalya 2026</h2>
              <p className="mt-5 max-w-xl text-lg text-white/90">
                Soutenez la délégation djiboutienne pour ce rendez-vous international du sport corporatif.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/antalya-2026" className="btn bg-white text-ink hover:bg-white/90">Découvrir le projet</Link>
                <Link href="/rejoindre" className="btn border border-white/50 text-white hover:bg-white/10">Soutenir l&apos;APSED</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Appel final */}
      <section className="bg-white">
        <div className="container-x py-20 text-center md:py-28">
          <Reveal>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">Prêt à faire bouger votre entreprise ?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
              Rejoignez le mouvement du sport corporatif à Djibouti.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/rejoindre" className="btn-accent">Inscrire une équipe</Link>
              <Link href="/contact" className="btn-ghost">Nous contacter</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
