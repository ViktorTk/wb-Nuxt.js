import { Product } from '~/models/products.models'

export interface Query {
  field: keyof Product
  name: string
}

const getFilteredProducts = (products: Product[], query: Query) => {
  if (query.field && query.name) {
    return products.filter((c) => {
      const key = c[query.field]

      if (typeof key === 'string') {
        return key.toLowerCase() === query.name.toLowerCase()
      } else {
        return c[query.field] === query.name
      }
    })
  } else {
    return products
  }
}

export default defineEventHandler(async (event) => {
  const { field, name }: Query = getQuery(event)
  const products: Product[] = await $fetch(
    'https://test-574b4-default-rtdb.firebaseio.com/db_for_Nuxt/db.json'
  )
  return getFilteredProducts(products, { field, name })
})
