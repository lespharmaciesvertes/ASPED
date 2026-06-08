import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Nos activités',
  description:
    'Les actions régulières de l\u2019APSED : tournois interentreprises, événements sportifs, actions santé, programmes de cohésion et participation internationale.',
};

const activites = [
  { t: 'Tournois interentreprises', d: 'Compétitions amicales entre sociétés pour stimuler l\u2019émulation et le réseau.', icon: '🏆' },
  { t: 'Événements sportifs', d: 'Organisation complète : logistique, arbitrage, animations et remise des prix.', icon: '🎉' },
  { t: 'Actions santé & bien-être', d: 'Sensibilisation, dépistage et promotion de l\u2019activité physique en entreprise.', icon: '❤️' },
  { t: 'Programmes de cohésion', d: 'Team building sportif sur-mesure pour renforcer l\u2019esprit d\u2019équipe.', icon: '🤝' },
  { t: 'Formations & sensibilisation', d: 'Ateliers sur le sport en entreprise, la santé et la performance collective.', icon: '📚' },
  { t: 'Participation internationale', d: 'Représentation de Djibouti lors d\u2019événements comme Antalya 2026.', icon: '🌍' },
];

export default function ActivitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ce que nous faisons"
        title="Nos activités"
        subtitle="Des actions régulières qui font vivre l'esprit sportif tout au long de l'année."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activites.map((a, i) => (
            <Reveal key={a.t} delay={i * 80}>
              <div className="card card-hover shimmer h-full p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-2xl">
                  <span aria-hidden>{a.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-xl uppercase tracking-tight">{a.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl brand-gradient-anim p-8 sm:p-10">
            <div>
              <h2 className="font-display text-2xl uppercase text-white sm:text-3xl">
                Une idée d&apos;événement ?
              </h2>
              <p className="mt-2 text-white/90">On le conçoit et on l&apos;organise avec vous, de A à Z.</p>
            </div>
            <Link href="/contact" className="btn bg-white text-ink hover:bg-white/90">
              Nous contacter
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
