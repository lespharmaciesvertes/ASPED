'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = { value: number; suffix?: string; label: string };

const defaultStats: Stat[] = [
  { value: 100, suffix: '+', label: 'Salariés mobilisés' },
  { value: 12, suffix: '', label: 'Entreprises partenaires' },
  { value: 8, suffix: '', label: 'Événements organisés' },
  { value: 1, suffix: '', label: 'Délégation à Antalya 2026' },
];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const n = useCountUp(stat.value, run);
  return (
    <div className="text-center">
      <div className="font-display text-5xl text-white sm:text-6xl">
        {n}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats({ stats = defaultStats }: { stats?: Stat[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="brand-gradient-anim">
      <div ref={ref} className="container-x grid grid-cols-2 gap-8 py-16 lg:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} run={run} />
        ))}
      </div>
    </section>
  );
}
