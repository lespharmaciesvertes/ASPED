const services = [
  {
    title: 'Challenges inter-entreprises',
    desc: 'Tournois et compétitions amicales entre sociétés pour stimuler l\u2019émulation et le réseau professionnel.',
    icon: '🏆',
  },
  {
    title: 'Team building sportif',
    desc: 'Activités de cohésion conçues pour renforcer l\u2019esprit d\u2019équipe et la motivation de vos collaborateurs.',
    icon: '🤝',
  },
  {
    title: 'Tournois & compétitions',
    desc: 'Organisation complète de tournois (football, course, sports collectifs) avec arbitrage et logistique.',
    icon: '⚽',
  },
  {
    title: 'Animations & journées sportives',
    desc: 'Journées sportives clé en main : ateliers, défis ludiques et animations adaptés à vos effectifs.',
    icon: '🎯',
  },
  {
    title: 'Sponsoring & visibilité',
    desc: 'Mise en avant de votre marque lors des événements : stands, dotations et couverture média.',
    icon: '📣',
  },
  {
    title: 'Accompagnement sur-mesure',
    desc: 'Conseil, conception et coordination de bout en bout, du cahier des charges au jour J.',
    icon: '🧭',
  },
];

export default function Services() {
  return (
    <section id="services" className="container-x py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
          Nos services
        </p>
        <h2 className="display-title mt-3 text-4xl sm:text-5xl">
          Le sport au service de votre entreprise
        </h2>
        <p className="mt-4 text-lg text-ink/70">
          Nous transformons l&apos;énergie sportive en levier de performance
          collective, d&apos;image et de bien-être au travail.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="card p-6 transition-shadow hover:shadow-lg">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-2xl">
              <span aria-hidden>{s.icon}</span>
            </div>
            <h3 className="mt-5 font-display text-xl uppercase tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
