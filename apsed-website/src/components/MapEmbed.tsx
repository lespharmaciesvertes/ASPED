const mapUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || '';

export default function MapEmbed() {
  if (!mapUrl) {
    return (
      <div className="card grid h-full min-h-[320px] place-items-center bg-sand p-6 text-center text-sm text-ink/50">
        Carte Google Maps à configurer
        <br />
        (variable NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL)
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <iframe
        src={mapUrl}
        title="Localisation d'APSED sur Google Maps"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-[320px] w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
