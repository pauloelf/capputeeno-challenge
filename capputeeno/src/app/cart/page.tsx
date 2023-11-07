import { Cart } from '@/components/cart'
import { ProductsProvider } from '@/providers'

export default function CartPage() {
  return (
    <ProductsProvider>
      <main>
        <Cart />
      </main>
    </ProductsProvider>
  )
}
