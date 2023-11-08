'use client'

import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from './product-card'
import { Pagination } from '../pagination'
import { ProductsContainer } from './styles'

export function Products() {
  const { data, count } = useProducts()

  if (!data || !count) return
  return (
    <>
      <Pagination totalPages={count > 12 ? Math.ceil(count / 12) : 1} />
      <ProductsContainer>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            image={product.image_url}
            price={product.price_in_cents}
            id={product.id}
          />
        ))}
      </ProductsContainer>
    </>
  )
}
