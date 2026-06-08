export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-white">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full brand-gradient opacity-10 blur-3xl animate-float-slow" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-magenta opacity-5 blur-3xl animate-float" />
      <div className="container-x relative py-16 md:py-20">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="display-title animate-rise mt-3 text-4xl sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.05s' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="animate-rise mt-4 max-w-2xl text-lg text-ink/70" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
