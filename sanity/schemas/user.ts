import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
      defineField({
          name: 'email',
          title: 'Email address',
        type: 'string',
      }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'string',
      // options: {
      //   hotspot: true,
      // },
      // fields: [
      //   {
      //     name: 'alt',
      //     type: 'string',
      //     title: 'Alternative Text',
      //   }
      // ]
    }),
      defineField({
          name: 'facorites',
          title: 'User favorites',
          type: 'array',
          of:[{type:'furniture'}]
    }),
    //add orders
      defineField({
          name: 'orders',
          title: 'Orders',
          type: 'array',
          of:[{type:'order'}]
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'reference',
        to: { type: 'address' },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
