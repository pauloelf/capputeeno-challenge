'use client'

import { useCartContext } from '@/context'
import { useProduct } from '@/hooks/useProduct'
import { useRouter, useSearchParams } from 'next/navigation'
import { FiArrowLeftCircle, FiShoppingBag } from 'react-icons/fi'
import { BackButton, Container, ProductContainer, ProductInfo } from './styles'

export function Product() {
  const id = useSearchParams().get('id') as string
  const router = useRouter()
  const { data } = useProduct(id)
  const { AddProductInCart } = useCartContext()

  const handleBack = () => {
    router.push('/')
  }

  if (!data) return
  return (
    <Container className="container">
      <BackButton onClick={handleBack}>
        <FiArrowLeftCircle />
        voltar
      </BackButton>
      <ProductContainer>
        <img src={data.image_url} alt={data.name} />
        <div>
          <ProductInfo>
            <span>{data.category === 't-shirts' ? 'Camiseta' : 'Caneca'}</span>
            <h1>{data.name}</h1>
            <span>
              {(data.price_in_cents / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p>
              *Frete de R$40,00 para to o Brasil. Grátis para compras acima de
              R$900,00
            </p>
            <div>
              <h2>Descrição</h2>
              <p>{data.description}</p>
            </div>
          </ProductInfo>
          <button onClick={() => AddProductInCart(data, id)}>
            <FiShoppingBag />
            Adicionar ao carrinho
          </button>
        </div>
      </ProductContainer>
    </Container>
  )
}
