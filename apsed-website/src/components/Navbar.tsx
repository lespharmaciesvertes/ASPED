'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/apsed', label: 'L’APSED' },
  { href: '/sport-corporatif', label: 'Sport corporatif' },
  { href: '/activites', label: 'Activités' },
  { href: '/evenements', label: 'Projets & événements' },
  { href: '/partenaires', label: 'Partenaires' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-black/10 bg-emerald-dark shadow-md'
          : 'border-white/10 bg-emerald'
      }`}
    >
      <nav className="container-x flex h-[76px] items-center justify-between gap-4">
        <Link href="/" aria-label="Accueil APSED" className="shrink-0">
          <Logo/>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-5 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-block text-center text-sm font-semibold text-white/85 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link
            href="/rejoindre"
            className="btn border border-white/50 text-sm text-white hover:bg-white/10"
          >
            Inscrire une équipe
          </Link>
          <Link href="/rejoindre" className="btn-accent text-sm">
            Devenir partenaire
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/40 text-white xl:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-emerald-dark xl:hidden">
          <ul className="container-x flex flex-col gap-1 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-semibold text-white/90 hover:bg-white/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-2 px-3 pt-2">
              <Link
                href="/rejoindre"
                onClick={() => setOpen(false)}
                className="btn flex-1 border border-white/50 text-sm text-white hover:bg-white/10"
              >
                Inscrire une équipe
              </Link>
              <Link href="/rejoindre" onClick={() => setOpen(false)} className="btn-accent flex-1 text-sm">
                Devenir partenaire
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
