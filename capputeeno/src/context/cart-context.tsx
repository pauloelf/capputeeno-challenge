'use client'

import { ReactNode, createContext, useState, useContext } from 'react'

type ProviderProps = {
  children: ReactNode
}

type CartContextProps = {
  cartProducts: unknown[] // quando consumir a api, irei tipar da forma correta
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: ProviderProps) {
  const [cartProducts, setCartProducts] = useState<unknown[]>(() => {
    return localStorage.getItem('cart-products')
      ? JSON.parse(localStorage.getItem('cart-products') ?? '')
      : []
  })
  return (
    <CartContext.Provider value={{ cartProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)