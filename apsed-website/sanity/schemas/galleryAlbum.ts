import { defineField, defineType } from 'sanity';

export const galleryAlbum = defineType({
  name: 'galleryAlbum',
  title: 'Album (Galerie)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre de l\u2019album', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'coverImage', title: 'Image de couverture', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'images',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Texte alternatif', type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'videos',
      title: 'Vidéos (liens YouTube)',
      type: 'array',
      of: [{ type: 'url' }],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'date', media: 'coverImage' } },
});
