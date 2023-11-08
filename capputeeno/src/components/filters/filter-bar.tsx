'use client'
import { FilterByProduct } from './filter-by-product'
import { FilterBySort } from './filter-by-sort'
import { FilterContainer } from './styles'

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByProduct />
      <FilterBySort />
    </FilterContainer>
  )
}
