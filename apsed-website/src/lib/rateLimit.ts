/**
 * Limitation de débit simple, en mémoire (par IP).
 *
 * Convient à un site vitrine sur une seule instance.
 * Pour un déploiement multi-instances (scalé), remplacer par
 * un store partagé : Upstash Redis, Vercel KV, etc.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60_000; // fenêtre d'1 minute
const MAX_REQUESTS = 5; // 5 envois max par fenêtre

export function rateLimit(identifier: string): {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
} {
  const now = Date.now();
  const bucket = buckets.get(identifier);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, retryAfter: 0 };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return {
    allowed: true,
    remaining: MAX_REQUESTS - bucket.count,
    retryAfter: 0,
  };
}

// Nettoyage périodique pour éviter une fuite mémoire.
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets.entries()) {
      if (now > bucket.resetAt) buckets.delete(key);
    }
  }, WINDOW_MS).unref?.();
}
