import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Décor d'arrière-plan */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full brand-gradient opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-magenta opacity-10 blur-3xl"
      />

      <div className="container-x relative grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink/70">
            <span className="h-2 w-2 rounded-full bg-magenta" />
            Événementiel sportif d&apos;entreprise · Djibouti
          </span>

          <h1 className="display-title animate-rise mt-6 text-5xl sm:text-6xl lg:text-7xl">
            L&apos;esprit sportif,
            <br />
            <span className="text-brand-gradient">la force des entreprises</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-lg text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: '0.1s' }}
          >
            APSED conçoit et organise des événements sportifs sur-mesure pour les
            entreprises : challenges inter-entreprises, team building, tournois et
            animations qui renforcent la cohésion et la marque employeur.
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: '0.2s' }}
          >
            <Link href="/#contact" className="btn-accent">
              Organiser un événement
            </Link>
            <Link href="/#services" className="btn-ghost">
              Découvrir nos services
            </Link>
          </div>

          <dl
            className="animate-rise mt-12 grid max-w-md grid-cols-3 gap-6"
            style={{ animationDelay: '0.3s' }}
          >
            {[
              { k: 'Sur-mesure', v: 'Formats adaptés' },
              { k: 'Clé en main', v: 'De A à Z' },
              { k: 'Entreprises', v: 'Notre cœur de métier' },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-xl text-ink">{s.k}</dt>
                <dd className="text-sm text-ink/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Bloc visuel */}
        <div className="animate-rise relative" style={{ animationDelay: '0.15s' }}>
          <div className="card overflow-hidden p-2">
            <div className="brand-gradient relative aspect-[4/5] w-full rounded-xl">
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-[8rem] leading-none text-white/90">
                  APSED
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 p-4">
                <p className="font-display text-lg uppercase">Prochain défi</p>
                <p className="text-sm text-ink/60">
                  Challenge inter-entreprises — inscriptions bientôt ouvertes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
