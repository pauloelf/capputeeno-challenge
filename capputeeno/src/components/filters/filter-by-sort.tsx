'use client'

import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useState } from 'react'
import { FilterSort, useFilterContext } from '@/context'

const SortFilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: var(--text-dark);
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      margin-left: 0.75rem;
    }
  }
`

const SortFilter = styled.ul`
  position: absolute;
  width: 176px;
  padding: 0.75rem 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  top: 100%;
  right: 0;
  z-index: 99;

  li {
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: var(--text-dark);
    cursor: pointer;
  }

  li + li {
    margin-top: 0.25rem;
  }

  @media (max-width: 620px) {
    left: 0;
  }
`

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
