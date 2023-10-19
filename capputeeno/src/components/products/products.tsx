'use client'

import { useProducts } from '@/hooks/useProducts'

export function Products() {
  const { data } = useProducts()
  console.log(data)
  return <>products</>
}
