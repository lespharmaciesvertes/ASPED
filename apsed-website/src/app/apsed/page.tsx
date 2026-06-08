import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import Stats from '@/components/Stats';

export const metadata: Metadata = {
  title: 'L\u2019APSED',
  description:
    'Présentation de l\u2019APSED : histoire, mission, vision, valeurs et gouvernance de l\u2019association du sport corporatif à Djibouti.',
};

const valeurs = [
  { t: 'Cohésion', d: 'Rassembler les entreprises et leurs équipes autour d\u2019objectifs communs.' },
  { t: 'Santé', d: 'Promouvoir le bien-être et l\u2019activité physique en milieu professionnel.' },
  { t: 'Dépassement', d: 'Cultiver l\u2019effort, la performance et l\u2019esprit de compétition sain.' },
  { t: 'Respect', d: 'Fair-play, inclusion et égalité des chances dans chaque événement.' },
];

const piliers = [
  { k: 'Notre mission', v: 'Promouvoir le sport en entreprise comme levier de cohésion, de santé et de performance collective à Djibouti.' },
  { k: 'Notre vision', v: 'Faire du sport corporatif un projet structurant et durable, reconnu par les acteurs économiques et institutionnels.' },
  { k: 'Notre gouvernance', v: 'Une association portée par un comité directeur engagé et des membres fondateurs investis.' },
];

export default function ApsedPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous ?"
        title="L'APSED"
        subtitle="L'Association pour la Promotion du Sport en Entreprise à Djibouti rassemble entreprises, salariés et institutions autour des valeurs du sport."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <h2 className="display-title text-3xl sm:text-4xl">Notre histoire</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Née de la conviction que le sport est un formidable vecteur de cohésion,
              l&apos;APSED accompagne les entreprises de Djibouti dans la mise en place
              d&apos;activités sportives porteuses de sens.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Au-delà du terrain, l&apos;association porte un projet institutionnel et
              durable, qui dépasse une seule discipline pour fédérer l&apos;ensemble du
              tissu économique et social.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="card card-hover shimmer overflow-hidden p-2">
              <div className="brand-gradient-anim grid aspect-[4/3] place-items-center rounded-xl">
                <span className="font-display text-6xl text-white/90">APSED</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {piliers.map((p, i) => (
            <Reveal key={p.k} delay={i * 100}>
              <div className="card card-hover h-full p-6">
                <span className="font-display text-3xl text-brand-gradient">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg uppercase">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />

      <section className="container-x py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Nos valeurs</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Ce qui nous anime</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valeurs.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="card card-hover h-full p-6">
                <h3 className="font-display text-xl uppercase text-brand-gradient">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
