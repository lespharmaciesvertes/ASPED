import { z } from 'zod';

/**
 * Schéma de validation du formulaire de contact.
 * Toute donnée entrante est validée et nettoyée côté serveur.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Le nom est trop court.')
    .max(80, 'Le nom est trop long.'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Adresse e-mail invalide.')
    .max(120),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal('')),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Votre message est trop court.')
    .max(2000, 'Votre message est trop long.'),
  // Champ piège anti-robot : doit rester vide.
  website: z.string().max(0, 'Spam détecté.').optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Échappe les caractères HTML pour éviter toute injection dans l'e-mail. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
