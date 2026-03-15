import { defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      description: 'Main photo for the page',
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
      name: 'summary',
      type: 'string',
      title: 'Summary',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body Copy',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
});
