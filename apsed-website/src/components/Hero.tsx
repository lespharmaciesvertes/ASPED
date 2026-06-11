'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="relative isolate overflow-hidden">
      {/* 1. Fond aux couleurs du drapeau de Djibouti (bleu ciel en haut, vert en bas) */}
      <div
        className="absolute inset-0 -z-30"
        style={{ background: 'linear-gradient(160deg, #2aa6dd 0%, #2aa6dd 46%, #46a02e 54%, #46a02e 100%)' }}
      />

      {/* 2. Photo de fond (optionnelle : /photo-hero.jpg). Si absente, le dégradé drapeau reste. */}
      {imgOk && (
        <img
          src="/photo-hero.jpg"
          alt=""
          onError={() => setImgOk(false)}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}

      {/* 3. Voile coloré (drapeau) pour garder le texte lisible sur la photo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(160deg, rgba(42,166,221,0.80) 0%, rgba(42,166,221,0.55) 46%, rgba(70,160,46,0.62) 54%, rgba(70,160,46,0.82) 100%)',
        }}
      />

      {/* Contenu */}
      <div className="container-x relative min-h-[82vh] pb-40 pt-24">
        <div className="max-w-2xl">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-magenta" />
            Sport corporatif · Djibouti
          </span>
          <h1 className="display-title animate-rise mt-6 text-5xl text-white sm:text-6xl lg:text-7xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.25)' }}>
            L&apos;esprit sportif,
            <br />
            la force des entreprises
          </h1>
          <p className="animate-rise mt-6 max-w-lg text-lg leading-relaxed text-white/90" style={{ animationDelay: '0.1s' }}>
            L&apos;APSED œuvre pour la promotion du sport en entreprise à Djibouti :
            cohésion, santé, dépassement de soi et rencontres entre acteurs
            économiques, institutionnels et sociaux.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.2s' }}>
            <Link href="/evenements" className="btn-accent">Nos projets &amp; événements</Link>
            <Link href="/partenaires" className="btn border border-white/60 text-white hover:bg-white/10">Nos partenaires</Link>
          </div>
          <dl className="animate-rise mt-12 grid max-w-md grid-cols-3 gap-6" style={{ animationDelay: '0.3s' }}>
            {[
              { k: 'Cohésion', v: 'Équipes soudées' },
              { k: 'Santé', v: 'Bien-être au travail' },
              { k: 'Performance', v: 'Dépassement de soi' },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-xl text-white">{s.k}</dt>
                <dd className="text-sm text-white/75">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* 4. Vague en bas, couleur du fond de page (sand) pour un raccord parfait */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-[60px] w-full sm:h-[110px]"
        aria-hidden="true"
      >
        <path fill="#f5f7f4" d="M0,72 C240,120 480,16 720,48 C960,80 1200,128 1440,64 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
