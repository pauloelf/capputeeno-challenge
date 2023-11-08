'use client'

import { ProductProps, useCartContext } from '@/context'
import { useRouter } from 'next/navigation'
import { FiArrowLeftCircle } from 'react-icons/fi'
import styled from 'styled-components'
import { CartItem } from './cart-item'

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

const Container = styled.div`
  flex-direction: row;
  align-items: stretch;
  gap: 2rem;
  padding-top: 0;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const CartProducts = styled.div`
  h1 {
    font-size: 1.5rem;
    line-height: 150%;
    font-weight: 500;
    color: var(--text-dark-2);
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 300;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CartResultContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background-color: #fff;

  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  min-width: 22rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-dark-2);
    text-transform: uppercase;
  }

  h3 + div {
    margin-top: 1.875rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 500px) {
    min-width: 12rem;
  }
`

const Divisor = styled.div`
  align-self: center;
  width: 100%;
  height: 1px;
  margin-top: 1.5rem;
  background-color: var(--shapes);

  & + div {
    font-weight: 600;
    margin-top: 0.75rem;
    margin-bottom: 2.5rem;
  }
`

const TotalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;

  @media (max-width: 960px) {
    font-size: 0.875rem;
  }
`

const Button = styled.button`
  color: #fff;
  border-radius: 0.25rem;
  background-color: var(--success-color);
  padding: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  width: 100%;
`

export function Cart() {
  const router = useRouter()
  const { cartProducts } = useCartContext()

  const getTotalPrice = (value: ProductProps[]) => {
    const totalValue = value.reduce(
      (old, item) => (old += item.price_in_cents * item.quantity!),
      0,
    )
    return (totalValue / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  const getTotalPriceWBonus = (value: ProductProps[]) => {
    const newValue = value.reduce(
      (old, item) => (old += item.price_in_cents * item.quantity!),
      0,
    )

    return ((newValue + 4000) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  const handleBack = () => {
    router.push('/')
  }

  return (
    <Container className="container">
      <CartProducts>
        <BackButton onClick={handleBack}>
          <FiArrowLeftCircle />
          voltar
        </BackButton>
        <h1>Seu carrinho</h1>
        <p>
          Total ({cartProducts.length} produtos)
          <span> {getTotalPrice(cartProducts)}</span>
        </p>
        <CartProductsList>
          {cartProducts.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
        </CartProductsList>
      </CartProducts>
      <CartResultContainer>
        <h3>Resumo do Pedido</h3>
        <TotalInfo>
          <p>Subtotal de produtos</p>
          <span>{getTotalPrice(cartProducts)}</span>
        </TotalInfo>
        <TotalInfo>
          <p>Entrega</p>
          <span>R$ 40,00</span>
        </TotalInfo>
        <Divisor></Divisor>
        <TotalInfo>
          <p>Total</p>
          <span>{getTotalPriceWBonus(cartProducts)}</span>
        </TotalInfo>
        <Button>Finalizar a compra</Button>
      </CartResultContainer>
    </Container>
  )
}
