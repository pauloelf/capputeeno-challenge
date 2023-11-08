'use client'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useState } from 'react'
import { FilterSort, useFilterContext } from '@/context'
import { SortFilter, SortFilterContainer } from './styles'

export function FilterBySort() {
  const [isOpen, setIsOpen] = useState(false)
  const { setOrder } = useFilterContext()

  const handleUpdateOrder = (order: FilterSort) => {
    setOrder(order)
    setIsOpen(false)
  }

  return (
    <SortFilterContainer>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        Organizar por
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <SortFilter>
          <li onClick={() => handleUpdateOrder('NEWS')}>Novidades</li>
          <li onClick={() => handleUpdateOrder('BIGGEST-PRICE')}>
            Preço: maior - menor
          </li>
          <li onClick={() => handleUpdateOrder('MINOR-PRICE')}>
            Preço: menor - maior
          </li>
          <li onClick={() => handleUpdateOrder('POPULARITY')}>Mais vendidos</li>
        </SortFilter>
      )}
    </SortFilterContainer>
  )
}
