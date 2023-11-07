'use client'
import { useFilterContext } from '@/context'
import styled from 'styled-components'

type FilterItemProps = {
  active: 0 | 1
}

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 760px) {
    gap: 1.5rem;

    li {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 500px) {
    li {
      font-size: 0.75rem;
    }
  }
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
      <FilterItem
        onClick={() => setType('ALL')}
        active={type === 'ALL' ? 1 : 0}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        onClick={() => setType('SHIRT')}
        active={type === 'SHIRT' ? 1 : 0}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        onClick={() => setType('MUG')}
        active={type === 'MUG' ? 1 : 0}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}
