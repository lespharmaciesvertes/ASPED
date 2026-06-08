import { defineField, defineType } from 'sanity';

export const partner = defineType({
  name: 'partner',
  title: 'Partenaire / Sponsor',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
    }),
    defineField({
      name: 'level',
      title: 'Niveau de partenariat',
      type: 'string',
      options: {
        list: [
          { title: 'Partenaire principal', value: 'principal' },
          { title: 'Sponsor officiel', value: 'officiel' },
          { title: 'Partenaire institutionnel', value: 'institutionnel' },
          { title: 'Partenaire technique', value: 'technique' },
        ],
        layout: 'radio',
      },
      initialValue: 'officiel',
    }),
    defineField({ name: 'website', title: 'Site web', type: 'url' }),
    defineField({ name: 'description', title: 'Courte présentation', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Ordre d\u2019affichage', type: 'number', initialValue: 0 }),
  ],
  preview: { select: { title: 'name', subtitle: 'level', media: 'logo' } },
});
