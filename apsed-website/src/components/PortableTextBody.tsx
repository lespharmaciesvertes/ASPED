import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <span className="my-6 block overflow-hidden rounded-xl">
          <Image
            src={urlForImage(value).width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </span>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl uppercase">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl uppercase">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-ink/80">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-emerald pl-4 italic text-ink/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-1 pl-6 text-ink/80">{children}</ul>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        rel="noopener noreferrer"
        className="text-emerald underline"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextBody({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className="text-base">
      <PortableText value={value} components={components} />
    </div>
  );
}
