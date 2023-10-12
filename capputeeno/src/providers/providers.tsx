'use client'

import { CartContextProvider, FilterContextProvider } from '@/context'
import { ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <CartContextProvider>
      <FilterContextProvider>{children}</FilterContextProvider>
    </CartContextProvider>
  )
}
