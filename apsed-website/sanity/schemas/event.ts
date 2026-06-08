import { defineField, defineType } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Événement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\u2019événement',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date de l\u2019événement',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lieu',
      type: 'string',
      initialValue: 'Djibouti',
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'À venir', value: 'upcoming' },
          { title: 'Inscriptions ouvertes', value: 'open' },
          { title: 'Terminé', value: 'past' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
    }),
    defineField({
      name: 'excerpt',
      title: 'Résumé court',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif (accessibilité)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Description complète',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
  ],
  orderings: [
    {
      title: 'Date (récent → ancien)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'location', media: 'coverImage' },
  },
});
