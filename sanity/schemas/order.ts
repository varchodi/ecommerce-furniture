import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'initiator',
      title: 'Initiator',
       type: 'reference',
      to:{type:'user'},
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'items',
      title: 'Items in carts',
        type: 'array',
      of:[{type:'reference',to:{type:'furniture'}}]
    }),
      defineField({
          name: 'total',
          title: 'Total price',
          type:'number'
      }),
      defineField({
          name: 'isconfirmed',
          title: 'Is confirmed',
          type:'boolean'
      }),
      defineField({
        name: 'shipped',
        title: 'Is shipped',
        type:'boolean'
      }),
      defineField({
        name: 'received',
        title: 'Is received',
        type:'boolean'
    }),
      defineField({
          name: 'address',
          title: 'Address',
          type: 'reference',
          to: { type: 'address' },
      })
  ],
  preview: {
    select: {
      title: 'initiator',
      author: 'initiator.name',
          media: 'mainImage',
          date: 'date',
      total:'price'
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
