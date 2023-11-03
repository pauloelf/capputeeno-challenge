import { Product } from '@/components/product'
import { ProductsProvider } from '@/providers'

export default function ProductPage() {
  return (
    <ProductsProvider>
      <main>
        <Product />
      </main>
    </ProductsProvider>
  )
}
