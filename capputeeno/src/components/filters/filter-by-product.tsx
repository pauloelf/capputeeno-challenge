'use client'
import { useFilterContext } from '@/context'
import { FilterItem, FilterList } from './styles'

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
