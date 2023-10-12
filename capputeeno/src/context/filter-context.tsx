'use client'

import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react'

type ProviderProps = {
  children: ReactNode
}

export type FilterProducts = 'ALL' | 'SHIRT' | 'MUG'

export type FilterSort = 'NEWS' | 'BIGGEST-PRICE' | 'MINOR-PRICE' | 'POPULARITY'

interface FilterContextProps {
  search: string
  type: FilterProducts
  page: number
  order: FilterSort
  setSearch: Dispatch<SetStateAction<string>>
  setType: Dispatch<SetStateAction<FilterProducts>>
  setPage: Dispatch<SetStateAction<number>>
  setOrder: Dispatch<SetStateAction<FilterSort>>
}

const FilterContext = createContext({} as FilterContextProps)

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [type, setType] = useState<FilterProducts>('ALL')
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<FilterSort>('NEWS')

  return (
    <FilterContext.Provider
      value={{
        search,
        type,
        page,
        order,
        setSearch,
        setType,
        setPage,
        setOrder,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
