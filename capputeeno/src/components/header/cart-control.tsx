'use client'

import { useRouter } from 'next/navigation'
import { FiShoppingBag } from 'react-icons/fi'
import { CartContainer, CartCount } from './styles'

type ICart = {
  size: number
}

export function CartControl({ size }: ICart) {
  const router = useRouter()
  return (
    <CartContainer onClick={() => router.push('/cart')}>
      <FiShoppingBag color="#737380" />
      <CartCount>{size}</CartCount>
    </CartContainer>
  )
}
