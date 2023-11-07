'use client'

import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from './product-card'
import styled from 'styled-components'
import { Pagination } from '../pagination'

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  max-width: 100%;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 620px) {
    grid-template-columns: repeat(auto-fill, 12.5rem);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 10rem);
  }
`

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
