import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

type Item = {
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: any;
  date?: string;
  publishedAt?: string;
  location?: string;
};

export default function EventCard({
  item,
  basePath,
}: {
  item: Item;
  basePath: '/evenements' | '/actualites';
}) {
  const dateStr = item.date || item.publishedAt;
  const formatted = dateStr
    ? new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <Link
      href={`${basePath}/${item.slug}`}
      className="card group block overflow-hidden transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
        {item.coverImage ? (
          <Image
            src={urlForImage(item.coverImage).width(800).height(500).url()}
            alt={item.coverImage?.alt || item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center brand-gradient">
            <span className="font-display text-4xl text-white/90">APSED</span>
          </div>
        )}
      </div>
      <div className="p-6">
        {formatted && (
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald">
            {formatted}
            {item.location ? ` · ${item.location}` : ''}
          </p>
        )}
        <h3 className="mt-2 font-display text-xl uppercase leading-tight">
          {item.title}
        </h3>
        {item.excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-ink/65">{item.excerpt}</p>
        )}
        <span className="mt-4 inline-block text-sm font-semibold text-magenta">
          En savoir plus →
        </span>
      </div>
    </Link>
  );
}
