/**
 * Configuration Next.js — APSED
 * Sécurité : en-têtes HTTP stricts + Content-Security-Policy.
 */

// Domaines autorisés par la CSP. Ajuste si tu changes de services.
const cspDirectives = [
  "default-src 'self'",
  // Next.js a besoin de 'unsafe-inline' / 'unsafe-eval' pour son runtime.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  // Images : Sanity CDN + Google Maps + data/blob.
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.googleapis.com https://*.gstatic.com https://maps.google.com",
  // Sanity API + WebSocket temps reel du Studio.
  "connect-src 'self' https://*.sanity.io wss://*.sanity.io https://*.apicdn.sanity.io",
  // Google Maps (iframe) et Sanity Studio.
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: cspDirectives },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // masque l'en-tete X-Powered-By
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
