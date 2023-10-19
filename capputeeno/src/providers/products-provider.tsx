'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ProductsProviderProps = {
  children: React.ReactNode
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const client = new QueryClient()
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
