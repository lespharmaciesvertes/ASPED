import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PortableTextBody from '@/components/PortableTextBody';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { newsBySlugQuery, newsSlugsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs: string[] = await client.fetch(newsSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await client.fetch(newsBySlugQuery, { slug: params.slug });
  if (!post) return { title: 'Actualité introuvable' };
  return { title: post.title, description: post.excerpt };
}

export default async function NewsDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(newsBySlugQuery, { slug: params.slug });
  if (!post) notFound();

  const formatted = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <article className="container-x py-16 md:py-24">
      <Link href="/actualites" className="text-sm font-semibold text-emerald">
        ← Toutes les actualités
      </Link>

      <header className="mt-6 max-w-3xl">
        {formatted && (
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
            {formatted}
          </p>
        )}
        <h1 className="display-title mt-3 text-4xl sm:text-5xl">{post.title}</h1>
      </header>

      {post.coverImage && (
        <div className="mt-10 overflow-hidden rounded-2xl">
          <Image
            src={urlForImage(post.coverImage).width(1400).height(800).url()}
            alt={post.coverImage?.alt || post.title}
            width={1400}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      <div className="mt-10 max-w-3xl">
        <PortableTextBody value={post.body} />
      </div>
    </article>
  );
}
