'use client';

import { useState } from 'react';

/**
 * Affiche une photo depuis /public/photos/.
 * Si le fichier n'existe pas encore, affiche un fond de marque (dégradé + logo)
 * pour que la section reste élégante en attendant la vraie image.
 *
 * Utilisation :
 *  - En vignette :   <Photo src="/photos/equipe.jpg" alt="..." className="aspect-[4/3] rounded-2xl" />
 *  - En fond plein : <Photo src="/photos/sport.jpg" alt="" fill overlay />
 */
export default function Photo({
  src,
  alt = '',
  className = '',
  fill = false,
  overlay = false,
  label,
}: {
  src: string;
  alt?: string;
  className?: string;
  fill?: boolean;
  overlay?: boolean;
  label?: string;
}) {
  const [ok, setOk] = useState(true);

  return (
    <div className={`relative overflow-hidden ${fill ? 'absolute inset-0' : ''} ${className}`}>
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="brand-gradient-anim absolute inset-0 grid place-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-apsed.png" alt="" className="h-24 w-24 opacity-90 drop-shadow" />
          {label && (
            <span className="absolute bottom-4 left-0 right-0 text-center text-xs font-semibold uppercase tracking-wider text-white/80">
              {label}
            </span>
          )}
        </div>
      )}
      {overlay && <div className="absolute inset-0 bg-ink/55" />}
    </div>
  );
}
