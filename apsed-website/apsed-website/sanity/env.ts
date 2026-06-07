/** Variables d'environnement Sanity, validées au démarrage. */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Variable manquante : NEXT_PUBLIC_SANITY_DATASET',
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Variable manquante : NEXT_PUBLIC_SANITY_PROJECT_ID',
);

// Token de lecture (jamais exposé au client).
export const readToken = process.env.SANITY_API_READ_TOKEN || '';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
