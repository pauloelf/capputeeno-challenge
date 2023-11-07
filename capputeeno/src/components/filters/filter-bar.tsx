'use client'
import styled from 'styled-components'
import { FilterByProduct } from './filter-by-product'
import { FilterBySort } from './filter-by-sort'

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByProduct />
      <FilterBySort />
    </FilterContainer>
  )
}
