'use client'

import { ProductProps, useCartContext } from '@/context'
import { useRouter } from 'next/navigation'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { CartItem } from './cart-item'
import {
  BackButton,
  Button,
  CartProducts,
  CartProductsList,
  CartResultContainer,
  Container,
  Divisor,
  TotalInfo,
} from './styles'

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
