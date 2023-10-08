'use client'

import styled from 'styled-components'
// eslint-disable-next-line camelcase
import { Saira_Stencil_One } from 'next/font/google'
import Link from 'next/link'
import { SearchInput } from './search-input'
import { CartControl } from './cart-control'
import { useCartContext } from '@/context'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  max-width: 67.5rem;
  display: flex;
  padding: 1.25rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  > a {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 150%;
    color: var(--logo-color);
    text-decoration: none;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
`

export function Header() {
  const { cartProducts } = useCartContext()

  return (
    <TagHeader>
      <Link href="/" className={sairaStencil.className}>
        capputeeno
      </Link>
      <div>
        <SearchInput
          type="text"
          placeholder="Procurando por algo em específico?"
        />
        <CartControl size={cartProducts.length} />
      </div>
    </TagHeader>
  )
}
