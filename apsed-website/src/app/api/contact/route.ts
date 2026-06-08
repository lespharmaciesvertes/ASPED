import { NextRequest, NextResponse } from 'next/server';
import { contactSchema, escapeHtml } from '@/lib/validation';
import { rateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: NextRequest) {
  // 1) Limitation de débit par IP.
  const ip = getClientIp(req);
  const limit = rateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Réessayez dans un instant.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
    );
  }

  // 2) Lecture + validation stricte du corps.
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    // Champ piège rempli => spam silencieusement accepté (réponse 200).
    if (parsed.error.issues.some((i) => i.path[0] === 'website')) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || 'Données invalides.' },
      { status: 422 },
    );
  }

  const { name, email, phone, company, message } = parsed.data;

  // 3) Envoi de l'e-mail via Resend (si configuré).
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // En développement : on log au lieu d'échouer.
    console.warn('[contact] Resend non configuré — message non envoyé.');
    return NextResponse.json({ ok: true, dev: true });
  }

  const html = `
    <h2>Nouveau message — site APSED</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(phone || '—')}</p>
    <p><strong>Société :</strong> ${escapeHtml(company || '—')}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Contact site APSED — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error('[contact] Échec Resend', await res.text());
      return NextResponse.json(
        { error: 'Envoi impossible pour le moment.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('[contact] Erreur réseau', err);
    return NextResponse.json(
      { error: 'Envoi impossible pour le moment.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

// Bloque les autres méthodes.
export function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 });
}
