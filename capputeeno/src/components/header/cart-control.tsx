'use client'

import { useRouter } from 'next/navigation'
import { FiShoppingBag } from 'react-icons/fi'
import styled from 'styled-components'

const CartContainer = styled.button`
  display: block;
  cursor: pointer;
  margin-top: 7px;
  background-color: transparent;
  border: none;
  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const CartCount = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;
  font-weight: 600;
  width: 17px;
  height: 17px;
  padding: 0 0.3125rem;
  margin-left: -0.625rem;
  color: #fff;
  background-color: var(--delete-color);
  border-radius: 50%;
`

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
