'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/#services', label: 'Nos services' },
  { href: '/#apropos', label: 'À propos' },
  { href: '/evenements', label: 'Événements' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/80 backdrop-blur-md">
      <nav className="container-x flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Accueil APSED">
          <span className="grid h-9 w-9 place-items-center rounded-lg brand-gradient text-white font-display text-lg">
            A
          </span>
          <span className="font-display text-2xl tracking-tight">APSED</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/#contact" className="btn-accent hidden md:inline-flex text-sm">
          Demander un devis
        </Link>

        <button
          type="button"
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-ink/15"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl leading-none">{open ? '\u2715' : '\u2630'}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-sand">
          <ul className="container-x flex flex-col gap-1 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-semibold text-ink/80 hover:bg-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-accent w-full"
              >
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
