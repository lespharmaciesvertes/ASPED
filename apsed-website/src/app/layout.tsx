import type { Metadata } from 'next';
import { Anton, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const display = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.apsed.dj';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'APSED — L\u2019esprit sportif, la force des entreprises',
    template: '%s | APSED',
  },
  description:
    'APSED organise des événements sportifs pour les entreprises à Djibouti : challenges inter-entreprises, team building, tournois et animations sur-mesure.',
  keywords: [
    'APSED',
    'événements sportifs entreprises',
    'team building Djibouti',
    'challenge inter-entreprises',
    'sport en entreprise',
    'cohésion d\u2019équipe',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'APSED',
    title: 'APSED — L\u2019esprit sportif, la force des entreprises',
    description:
      'Organisation d\u2019événements sportifs et de team building pour les entreprises à Djibouti.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="bg-sand text-ink font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
