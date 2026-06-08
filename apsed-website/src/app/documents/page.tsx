import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Documents utiles',
  description:
    'Plaquette de présentation, dossier de sponsoring, règlements, charte et formulaires de l\u2019APSED.',
};

const docs = [
  { t: 'Plaquette de présentation', d: 'Présentation générale de l\u2019APSED et de ses missions.', dispo: true },
  { t: 'Dossier de sponsoring', d: 'Offres et formules pour les sponsors et partenaires.', dispo: false },
  { t: 'Note conceptuelle', d: 'Le projet du sport corporatif à Djibouti expliqué.', dispo: false },
  { t: 'Règlement des compétitions', d: 'Règles applicables aux tournois interentreprises.', dispo: true },
  { t: 'Charte de conduite', d: 'Fair-play, respect et valeurs de l\u2019association.', dispo: true },
  { t: 'Formulaire d\u2019adhésion', d: 'Pour les entreprises souhaitant rejoindre l\u2019APSED.', dispo: false },
];

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Documents utiles"
        subtitle="Les documents à disposition des entreprises, partenaires, sponsors et membres."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d, i) => (
            <Reveal key={d.t} delay={i * 70}>
              <div className="card card-hover flex h-full flex-col p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-2xl">
                  <span aria-hidden>📄</span>
                </div>
                <h3 className="mt-5 font-display text-lg uppercase">{d.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{d.d}</p>
                <div className="mt-4">
                  {d.dispo ? (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald">
                      Disponible au téléchargement
                    </span>
                  ) : (
                    <Link href="/contact" className="text-sm font-semibold text-magenta">
                      Sur demande →
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-8 text-sm text-ink/50">
            Certains documents sont publics, d&apos;autres communiqués uniquement sur
            demande. Les fichiers téléchargeables seront mis en ligne par l&apos;équipe APSED.
          </p>
        </Reveal>
      </section>
    </>
  );
}
