import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Site URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook name',
      type: 'string',
    }),
    defineField({
      name: 'hotelLink',
      title: 'Hotel Booking Link',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hotelMapLink',
      title: 'Hotel Map Link',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
});
