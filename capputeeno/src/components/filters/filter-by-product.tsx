'use client'
import { useFilterContext } from '@/context'
import styled from 'styled-components'

type FilterItemProps = {
  active: boolean
}

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: ${(props) => (props.active ? '600' : '400')};
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  list-style: none;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.active ? '4px solid var(--orange-low)' : ''};
`

export function FilterByProduct() {
  const { type, setType } = useFilterContext()

  return (
    <FilterList>
      <FilterItem onClick={() => setType('ALL')} active={type === 'ALL'}>
        Todos os produtos
      </FilterItem>
      <FilterItem onClick={() => setType('SHIRT')} active={type === 'SHIRT'}>
        Camisetas
      </FilterItem>
      <FilterItem onClick={() => setType('MUG')} active={type === 'MUG'}>
        Canecas
      </FilterItem>
    </FilterList>
  )
}
