'use client';

import { useEffect, useState } from 'react';

function diff(target: number) {
  const now = Date.now();
  const d = Math.max(0, target - now);
  return {
    jours: Math.floor(d / 86400000),
    heures: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    secondes: Math.floor((d / 1000) % 60),
  };
}

export default function Countdown({ target }: { target: string }) {
  const t = new Date(target).getTime();
  const [time, setTime] = useState(() => diff(t));

  useEffect(() => {
    const id = setInterval(() => setTime(diff(t)), 1000);
    return () => clearInterval(id);
  }, [t]);

  const cells: [string, number][] = [
    ['Jours', time.jours],
    ['Heures', time.heures],
    ['Minutes', time.minutes],
    ['Secondes', time.secondes],
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="min-w-[78px] flex-1 rounded-xl bg-white/15 px-3 py-4 text-center backdrop-blur"
        >
          <div className="font-display text-4xl text-white tabular-nums">
            {String(value).padStart(2, '0')}
          </div>
          <div className="mt-1 text-xs uppercase tracking-wide text-white/80">{label}</div>
        </div>
      ))}
    </div>
  );
}
