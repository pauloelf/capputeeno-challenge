'use client'

import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from './product-card'
import styled from 'styled-components'

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  max-width: 100%;
  gap: 2rem;
  margin-top: 2rem;
`

export function Products() {
  const { data } = useProducts()
  return (
    <ProductsContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ProductsContainer>
  )
}
