'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type Photo = { url: string; alt?: string };

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, close, prev, next]);

  if (photos.length === 0) {
    return (
      <div className="card p-10 text-center text-ink/60">
        Les photos de cet album seront ajoutées prochainement.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="shimmer card-hover group relative aspect-square overflow-hidden rounded-xl"
            aria-label={`Ouvrir la photo ${i + 1}`}
          >
            <Image
              src={p.url}
              alt={p.alt || `Photo ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} className="absolute right-5 top-5 text-3xl text-white/80 hover:text-white" aria-label="Fermer">
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-4xl text-white/70 hover:text-white"
            aria-label="Précédent"
          >
            ‹
          </button>
          <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[index].url}
              alt={photos[index].alt || ''}
              width={1400}
              height={1000}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-4xl text-white/70 hover:text-white"
            aria-label="Suivant"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
