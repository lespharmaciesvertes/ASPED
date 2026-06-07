import ContactForm from './ContactForm';
import MapEmbed from './MapEmbed';

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@apsed.dj';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald">
            Contact
          </p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">
            Parlons de votre prochain événement
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Décrivez-nous votre projet : nous revenons vers vous avec une
            proposition adaptée à vos objectifs et à votre budget.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="card p-6">
              <h3 className="font-display text-lg uppercase">Coordonnées</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/70">
                <li>
                  <span className="font-semibold text-ink">E-mail : </span>
                  <a href={`mailto:${email}`} className="text-emerald hover:underline">
                    {email}
                  </a>
                </li>
                {whatsapp && (
                  <li>
                    <span className="font-semibold text-ink">WhatsApp : </span>
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald hover:underline"
                    >
                      +{whatsapp}
                    </a>
                  </li>
                )}
                <li>
                  <span className="font-semibold text-ink">Zone : </span>
                  Djibouti, République de Djibouti
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
