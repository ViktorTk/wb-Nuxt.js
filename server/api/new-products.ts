import { Product } from '~/models/products.models'

const getNewProducts = (products: Product[]) => {
  return products
  // return products.filter((c) => c.label.toLowerCase() === 'new').splice(0, 4)
}

export default defineEventHandler(async (event) => {
  const products: Product[] = await $fetch(
    'https://test-574b4-default-rtdb.firebaseio.com/db_for_Nuxt/db.json'
  )
  return getNewProducts(products)
})
