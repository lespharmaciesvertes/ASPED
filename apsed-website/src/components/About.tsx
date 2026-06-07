const pillars = [
  { k: 'Notre mission', v: 'Fédérer les entreprises autour des valeurs du sport : dépassement, respect et esprit d\u2019équipe.' },
  { k: 'Notre approche', v: 'Une organisation rigoureuse et clé en main, du concept à la réalisation, adaptée à chaque entreprise.' },
  { k: 'Notre engagement', v: 'Des événements inclusifs, sécurisés et mémorables, qui renforcent durablement la cohésion.' },
];

export default function About() {
  return (
    <section id="apropos" className="bg-white">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
            À propos d&apos;APSED
          </p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">
            Plus qu&apos;un événement,
            <br />
            une dynamique collective
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            APSED accompagne les entreprises de Djibouti dans la conception et
            l&apos;organisation d&apos;événements sportifs porteurs de sens. Notre
            conviction : le sport est un formidable vecteur de cohésion, de
            motivation et d&apos;image pour les organisations.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            De la première idée à la remise des trophées, nous prenons en charge
            chaque détail pour offrir à vos équipes une expérience à la hauteur de
            vos ambitions.
          </p>
        </div>

        <div className="grid gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.k}
              className="card flex gap-4 p-6"
            >
              <span className="font-display text-3xl text-brand-gradient">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg uppercase">{p.k}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">{p.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
