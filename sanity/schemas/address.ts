import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'document',
    fields: [
        defineField({
            name: 'user',
            title: 'User',
            type: 'reference',
            to:{type:'user'}
      }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'road',
      title: 'Address (road ...)',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address (road ...)',
      type: 'string',
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
