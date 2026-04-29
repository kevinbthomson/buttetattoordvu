import { defineField, defineType } from 'sanity';

export const artist = defineType({
  name: 'artist',
  title: 'Artists',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shop',
      type: 'string',
      title: 'Shop',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Image of the artist',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'instagram',
      type: 'string',
      title: 'Instagram handle',
      validation: (rule) => rule.required(),
    }),
  ],
});
