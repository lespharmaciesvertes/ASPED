import Link from 'next/link';

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@apsed.dj';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg brand-gradient font-display text-lg">
              A
            </span>
            <span className="font-display text-2xl text-white">APSED</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            L&apos;esprit sportif, la force des entreprises. Nous concevons et
            organisons des événements sportifs sur-mesure pour renforcer la
            cohésion et l&apos;image de votre entreprise.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/#services" className="hover:text-white">Nos services</Link></li>
            <li><Link href="/evenements" className="hover:text-white">Événements</Link></li>
            <li><Link href="/actualites" className="hover:text-white">Actualités</Link></li>
            <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>Djibouti, République de Djibouti</li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-white">
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {year} APSED. Tous droits réservés.</p>
          <p>
            Conçu et développé par{' '}
            <span className="font-semibold text-white/70">SOPROSYS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
