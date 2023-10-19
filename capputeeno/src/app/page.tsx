import { FilterBar } from '@/components/filters'
import { Products } from '@/components/products'
import { ProductsProvider } from '@/providers'

export default function Home() {
  return (
    <ProductsProvider>
      <main style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <FilterBar />
          <Products />
        </div>
      </main>
    </ProductsProvider>
  )
}
