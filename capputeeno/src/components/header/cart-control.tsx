import { FiShoppingBag } from 'react-icons/fi'
import styled from 'styled-components'

const CartContainer = styled.div`
  cursor: pointer;
  margin-top: 7px;
  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const CartCount = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;
  font-weight: 600;
  width: 17px;
  height: 17px;
  padding: 0 0.3125rem;
  margin-left: -0.625rem;
  color: #fff;
  background-color: var(--delete-color);
  border-radius: 50%;
`

type ICart = {
  size: number
}

export function CartControl({ size }: ICart) {
  return (
    <CartContainer>
      <FiShoppingBag color="#737380" />
      <CartCount>{2}</CartCount>
    </CartContainer>
  )
}
