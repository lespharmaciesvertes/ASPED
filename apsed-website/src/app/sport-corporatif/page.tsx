import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Le sport corporatif',
  description:
    'Le sport corporatif à Djibouti : un levier de cohésion, de santé et de performance pour les entreprises, les salariés et les institutions.',
};

const benefices = [
  { pour: 'Pour les entreprises', icon: '🏢', items: ['Renforcement de la marque employeur', 'Cohésion et fierté d\u2019appartenance', 'Visibilité et networking', 'Image d\u2019entreprise responsable'] },
  { pour: 'Pour les salariés', icon: '🤝', items: ['Bien-être et santé physique', 'Réduction du stress', 'Esprit d\u2019équipe', 'Motivation et engagement'] },
  { pour: 'Rôle social & santé', icon: '❤️', items: ['Promotion de l\u2019activité physique', 'Lutte contre la sédentarité', 'Inclusion et égalité des chances', 'Lien social entre acteurs'] },
];

export default function SportCorporatifPage() {
  return (
    <>
      <PageHero
        eyebrow="Le concept"
        title="Le sport corporatif"
        subtitle="Un projet institutionnel et durable : bien plus qu'une discipline, un véritable levier de transformation pour les organisations."
      />

      <section className="container-x py-16 md:py-24">
        <Reveal>
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="brand-gradient-anim grid min-h-[220px] place-items-center p-10">
                <span className="font-display text-4xl uppercase leading-tight text-white">
                  Le sport,
                  <br />
                  langage commun
                  <br />
                  des entreprises
                </span>
              </div>
              <div className="p-8 sm:p-10">
                <h2 className="display-title text-2xl sm:text-3xl">Définition</h2>
                <p className="mt-4 leading-relaxed text-ink/70">
                  Le sport corporatif désigne l&apos;ensemble des pratiques sportives
                  organisées dans et entre les entreprises. Il transforme l&apos;énergie
                  du sport en performance collective, en santé et en image.
                </p>
                <p className="mt-4 leading-relaxed text-ink/70">
                  À Djibouti, l&apos;APSED structure ce mouvement et le relie aux
                  compétitions nationales et internationales.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {benefices.map((b, i) => (
            <Reveal key={b.pour} delay={i * 100}>
              <div className="card card-hover h-full p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-2xl">
                  <span aria-hidden>{b.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-xl uppercase">{b.pour}</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/65">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-emerald">▹</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border border-ink/10 bg-white p-8 text-center sm:p-12">
            <h2 className="display-title text-2xl sm:text-3xl">
              Développer le sport corporatif à Djibouti
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink/70">
              Rejoignez le mouvement et faites du sport un atout pour votre entreprise et
              vos équipes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/rejoindre" className="btn-accent">Inscrire mon entreprise</Link>
              <Link href="/activites" className="btn-ghost">Voir nos activités</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
