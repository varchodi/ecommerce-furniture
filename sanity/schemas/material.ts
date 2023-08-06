import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'material',
  title: 'Material',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'icon',
      type: 'image',
      options: {
        hotspot:true,
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
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


