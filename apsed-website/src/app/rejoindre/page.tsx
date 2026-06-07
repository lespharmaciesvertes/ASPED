import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Rejoindre / Participer',
  description:
    'Devenez membre, inscrivez votre entreprise, participez à un tournoi ou devenez sponsor de l\u2019APSED.',
};

const options = [
  { t: 'Devenir membre', d: 'Rejoignez le réseau des entreprises engagées pour le sport corporatif.', icon: '🪪' },
  { t: 'Inscrire une équipe', d: 'Engagez vos collaborateurs dans nos tournois interentreprises.', icon: '⚽' },
  { t: 'Devenir sponsor', d: 'Associez votre marque à nos événements et à nos valeurs.', icon: '🤝' },
  { t: 'Proposer un partenariat', d: 'Construisons ensemble un projet adapté à vos objectifs.', icon: '📣' },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Rejoindre / Participer"
        title="Engagez-vous avec l'APSED"
        subtitle="Entreprises, équipes et sponsors : il y a de nombreuses façons de prendre part à l'aventure."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((o, i) => (
            <Reveal key={o.t} delay={i * 80}>
              <div className="card card-hover h-full p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-2xl">
                  <span aria-hidden>{o.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-lg uppercase">{o.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{o.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <h2 className="display-title text-3xl sm:text-4xl">Manifestez-vous</h2>
              <p className="mt-4 text-lg text-ink/70">
                Remplissez ce formulaire en précisant votre demande (adhésion, inscription
                d&apos;équipe, sponsoring, partenariat). Notre équipe vous recontacte
                rapidement.
              </p>
              <ul className="mt-6 space-y-3 text-ink/70">
                {['Réponse sous quelques jours', 'Accompagnement personnalisé', 'Offres adaptées à votre structure'].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-emerald">▹</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
