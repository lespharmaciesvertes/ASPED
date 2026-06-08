import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { allAlbumsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Galerie photos & vidéos',
  description:
    'Revivez le dynamisme de l\u2019APSED en images : albums photos et vidéos des matchs, cérémonies et événements.',
};

export default async function GalleryPage() {
  let albums: any[] = [];
  try {
    albums = await client.fetch(allAlbumsQuery);
  } catch {
    albums = [];
  }

  return (
    <>
      <PageHero
        eyebrow="En images"
        title="Galerie photos & vidéos"
        subtitle="Le dynamisme de l'association et de ses événements, album par album."
      />

      <section className="container-x py-16 md:py-24">
        {albums.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((a, i) => (
              <Reveal key={a._id} delay={i * 80}>
                <Link
                  href={`/galerie/${a.slug}`}
                  className="card card-hover shimmer group block overflow-hidden"
                >
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
                  <div className="p-5">
                    <h3 className="font-display text-lg uppercase">{a.title}</h3>
                    <p className="mt-1 text-sm text-ink/55">
                      {a.imageCount ? `${a.imageCount} photo(s)` : 'Album'}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="card p-10 text-center text-ink/60">
              Les albums photos seront publiés ici après chaque événement.
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}
