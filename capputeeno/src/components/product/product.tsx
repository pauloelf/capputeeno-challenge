'use client'

import { useCartContext } from '@/context'
import { useProduct } from '@/hooks/useProduct'
import { useRouter, useSearchParams } from 'next/navigation'
import { FiArrowLeftCircle, FiShoppingBag } from 'react-icons/fi'
import styled from 'styled-components'

const Container = styled.div`
  align-items: flex-start;
  padding-top: 0;
  padding-bottom: 0;
`

const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1.25rem 0;

  color: var(--text);
  background-color: transparent;
  font-size: 0.875rem;
  line-height: 150%;
  font-weight: 500;

  border: none;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  img {
    max-width: 40rem;
    width: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      font-size: 1rem;
      font-weight: 500;
      mix-blend-mode: multiply;
      color: #fff;
      background-color: var(--bg-blue);
      border-radius: 0.25rem;
      padding: 0.625rem 0;
      border: none;
      cursor: pointer;
      text-transform: uppercase;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
    color: var(--text-dark-2);
  }

  h1 {
    font-size: 2rem;
    line-height: 150%;
    font-weight: 300;
    color: var(--text-dark-2);
    margin-top: 0.75rem;
  }

  h1 + span {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--shapes-dark);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--text-dark);
  }

  div {
    h2 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-dark);
      text-transform: uppercase;
      margin-top: 4rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`

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
