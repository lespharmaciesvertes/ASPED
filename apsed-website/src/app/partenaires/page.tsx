import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { allPartnersQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Partenaires & sponsors',
  description:
    'Les partenaires, sponsors et soutiens institutionnels qui accompagnent l\u2019APSED dans la promotion du sport corporatif à Djibouti.',
};

const levels: { value: string; label: string }[] = [
  { value: 'principal', label: 'Partenaire principal' },
  { value: 'officiel', label: 'Sponsors officiels' },
  { value: 'institutionnel', label: 'Partenaires institutionnels' },
  { value: 'technique', label: 'Partenaires techniques' },
];

export default async function PartnersPage() {
  let partners: any[] = [];
  try {
    partners = await client.fetch(allPartnersQuery);
  } catch {
    partners = [];
  }

  return (
    <>
      <PageHero
        eyebrow="Ils nous soutiennent"
        title="Partenaires & sponsors"
        subtitle="Le sport corporatif djiboutien avance grâce à l'engagement de ses partenaires. Merci à eux."
      />

      <section className="container-x py-16 md:py-24">
        {partners.length > 0 ? (
          levels.map((lvl) => {
            const group = partners.filter((p) => p.level === lvl.value);
            if (group.length === 0) return null;
            return (
              <div key={lvl.value} className="mb-14">
                <Reveal>
                  <h2 className="display-title text-2xl uppercase sm:text-3xl">{lvl.label}</h2>
                </Reveal>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {group.map((p, i) => (
                    <Reveal key={p._id} delay={i * 70}>
                      <PartnerCard partner={p} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <Reveal>
            <div className="card p-10 text-center">
              <p className="text-ink/60">
                Les partenaires seront affichés ici dès leur ajout dans l&apos;espace
                d&apos;administration.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl brand-gradient-anim p-8 sm:p-10">
            <div>
              <h2 className="font-display text-2xl uppercase text-white sm:text-3xl">
                Devenez partenaire
              </h2>
              <p className="mt-2 text-white/90">
                Associez votre marque aux valeurs du sport corporatif.
              </p>
            </div>
            <Link href="/rejoindre" className="btn bg-white text-ink hover:bg-white/90">
              Proposer un partenariat
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function PartnerCard({ partner }: { partner: any }) {
  const inner = (
    <div className="card card-hover flex h-full flex-col items-center p-6 text-center">
      <div className="grid h-24 w-full place-items-center">
        {partner.logo ? (
          <Image
            src={urlForImage(partner.logo).width(240).height(160).url()}
            alt={partner.logo?.alt || partner.name}
            width={240}
            height={160}
            className="max-h-20 w-auto object-contain"
          />
        ) : (
          <span className="font-display text-2xl text-brand-gradient">{partner.name}</span>
        )}
      </div>
      <h3 className="mt-4 font-semibold">{partner.name}</h3>
      {partner.description && (
        <p className="mt-1 text-sm text-ink/60">{partner.description}</p>
      )}
    </div>
  );

  return partner.website ? (
    <a href={partner.website} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
