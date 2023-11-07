'use client'

import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'

type ProviderProps = {
  children: ReactNode
}

export type ProductProps = {
  name: string
  description: string
  price_in_cents: number
  image_url: string
  id: string
  quantity?: number
}

type CartContextProps = {
  cartProducts: ProductProps[]
  AddProductInCart: (product: ProductProps, id: string) => void
  UpdateQuantityProduct: (quantity: number, id: string) => void
  DeleteProduct: (id: string) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: ProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductProps[]>(() => {
    return localStorage.getItem('cart-products')
      ? JSON.parse(localStorage.getItem('cart-products') ?? '')
      : []
  })

  const AddProductInCart = (product: ProductProps, id: string) => {
    const products = [...cartProducts]

    if (cartProducts.length > 0) {
      const findProduct = cartProducts.findIndex((p) => p.id === id)

      if (findProduct !== -1) {
        products[findProduct].quantity! += 1
        localStorage.setItem('cart-products', JSON.stringify([...products]))
        setCartProducts(JSON.parse(localStorage.getItem('cart-products') ?? ''))
      } else {
        localStorage.setItem(
          'cart-products',
          JSON.stringify([...cartProducts, { ...product, quantity: 1 }]),
        )
        setCartProducts(JSON.parse(localStorage.getItem('cart-products') ?? ''))
      }
    } else {
      localStorage.setItem(
        'cart-products',
        JSON.stringify([...cartProducts, { ...product, quantity: 1 }]),
      )
      setCartProducts(JSON.parse(localStorage.getItem('cart-products') ?? ''))
    }
  }

  const UpdateQuantityProduct = (quantity: number, id: string) => {
    const products = [...cartProducts]
    const newQuantity = products.map((product) => {
      if (product.id !== id) return product
      return { ...product, quantity }
    })
    localStorage.setItem('cart-products', JSON.stringify(newQuantity))
    setCartProducts(JSON.parse(localStorage.getItem('cart-products') ?? ''))
  }

  const DeleteProduct = (id: string) => {
    const products = [...cartProducts]
    const newListProducts = products.filter((product) => product.id !== id)

    localStorage.setItem('cart-products', JSON.stringify(newListProducts))
    setCartProducts(JSON.parse(localStorage.getItem('cart-products') ?? ''))
  }

  useEffect(() => {
    localStorage.setItem('cart-products', JSON.stringify([...cartProducts]))
  }, [cartProducts])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        AddProductInCart,
        UpdateQuantityProduct,
        DeleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
