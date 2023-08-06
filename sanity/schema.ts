import { type SchemaTypeDefinition } from 'sanity'


import category from './schemas/category'

import material from './schemas/material'
import furniture from './schemas/furniture'
import order from './schemas/order'
import user from './schemas/user'
import address from './schemas/address'
import author from './schemas/author'
import blockContent from './schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,material,furniture,user,order,address,author,blockContent],
}
