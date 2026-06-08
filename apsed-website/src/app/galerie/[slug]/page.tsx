import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import GalleryGrid from '@/components/GalleryGrid';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { albumBySlugQuery, albumSlugsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs: string[] = await client.fetch(albumSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const album = await client.fetch(albumBySlugQuery, { slug: params.slug });
  if (!album) return { title: 'Album introuvable' };
  return { title: album.title, description: `Album photos : ${album.title}` };
}

function ytId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export default async function AlbumPage({ params }: { params: { slug: string } }) {
  const album = await client.fetch(albumBySlugQuery, { slug: params.slug });
  if (!album) notFound();

  const photos = (album.images || []).map((img: any) => ({
    url: urlForImage(img).width(1400).url(),
    alt: img?.alt || album.title,
  }));

  const videos: string[] = (album.videos || [])
    .map((v: string) => ytId(v))
    .filter(Boolean) as string[];

  return (
    <div className="container-x py-16 md:py-24">
      <Link href="/galerie" className="text-sm font-semibold text-emerald">← Toute la galerie</Link>
      <Reveal>
        <h1 className="display-title mt-6 text-4xl sm:text-5xl">{album.title}</h1>
      </Reveal>

      <div className="mt-10">
        <GalleryGrid photos={photos} />
      </div>

      {videos.length > 0 && (
        <div className="mt-14">
          <h2 className="display-title text-2xl uppercase">Vidéos</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {videos.map((id) => (
              <div key={id} className="card overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Vidéo APSED"
                    loading="lazy"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
