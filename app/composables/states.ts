import type { CartItem } from '~/models/cart-item.models'

export const useViewCart = () => useState<boolean>('viewCart', () => false)
export const useCart = () => useState<CartItem[]>('cart', () => [])
