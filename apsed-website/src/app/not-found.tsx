import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-x grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="font-display text-7xl text-brand-gradient">404</p>
        <h1 className="display-title mt-4 text-3xl">Page introuvable</h1>
        <p className="mt-3 text-ink/65">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-accent mt-8">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
