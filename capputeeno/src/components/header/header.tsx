'use client'

import { Saira_Stencil_One } from 'next/font/google'
import Link from 'next/link'
import { SearchInput } from './search-input'
import { CartControl } from './cart-control'
import { useCartContext } from '@/context'
import { TagHeader } from './styles'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

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
