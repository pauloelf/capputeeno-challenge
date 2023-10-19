import { FilterBar } from '@/components/filters'
import { Products } from '@/components/products'
import { ProductsProvider } from '@/providers'

export default function Home() {
  return (
    <ProductsProvider>
      <main className="container">
        <FilterBar />
        <Products />
      </main>
    </ProductsProvider>
  )
}
