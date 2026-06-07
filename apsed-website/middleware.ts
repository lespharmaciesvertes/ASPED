import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware léger.
 *
 * Note : l'authentification du Studio Sanity (/studio) est gérée par
 * Sanity lui-même (connexion via compte Sanity autorisé sur le projet).
 * Ce middleware ajoute simplement un en-tête « noindex » sur le Studio
 * et l'API afin qu'ils n'apparaissent jamais dans les moteurs de recherche.
 */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/studio') || pathname.startsWith('/api')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return res;
}

export const config = {
  matcher: ['/studio/:path*', '/api/:path*'],
};
