const words = [
  'Cohésion',
  'Dépassement de soi',
  'Esprit d\u2019équipe',
  'Santé',
  'Performance',
  'Sport corporatif',
  'Networking',
  'Bien-être',
];

export default function Marquee() {
  const loop = [...words, ...words];
  return (
    <div className="border-y border-ink/10 bg-ink py-4 text-white">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
          {loop.map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-xl uppercase tracking-wide">{w}</span>
              <span className="text-magenta" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
