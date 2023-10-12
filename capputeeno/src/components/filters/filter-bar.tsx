'use client'
import styled from 'styled-components'
import { FilterByProduct } from './filter-by-product'
import { FilterBySort } from './filter-by-sort'

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByProduct />
      <FilterBySort />
    </FilterContainer>
  )
}
