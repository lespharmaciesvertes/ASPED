'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Une erreur est survenue.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Erreur inconnue.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card grid place-items-center p-10 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full brand-gradient text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl uppercase">Message envoyé</h3>
        <p className="mt-2 text-ink/65">
          Merci ! Notre équipe vous répondra dans les meilleurs délais.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-ghost mt-6"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
      {/* Champ piège anti-spam : caché aux humains */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Nom complet *" required />
        <Field name="email" label="E-mail *" type="email" required />
        <Field name="phone" label="Téléphone" type="tel" />
        <Field name="company" label="Société" />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-ink/80">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={2000}
          placeholder="Décrivez votre projet d'événement sportif…"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
        />
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-lg bg-magenta/10 px-4 py-3 text-sm text-magenta">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-accent mt-6 w-full disabled:opacity-60"
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>

      <p className="mt-3 text-center text-xs text-ink/45">
        Vos données ne sont utilisées que pour traiter votre demande.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold text-ink/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
      />
    </div>
  );
}
