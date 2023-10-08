'use client'

import { CartContextProvider } from '@/context'
import { ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <CartContextProvider>{children}</CartContextProvider>
}
