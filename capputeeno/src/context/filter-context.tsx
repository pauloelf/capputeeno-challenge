'use client'

import { useRouter } from 'next/navigation'
import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

type ProviderProps = {
  children: ReactNode
}

export type FilterProducts = 'ALL' | 'SHIRT' | 'MUG'

export type FilterSort = 'NEWS' | 'BIGGEST-PRICE' | 'MINOR-PRICE' | 'POPULARITY'

interface FilterContextProps {
  search: string
  type: FilterProducts
  order: FilterSort
  setSearch: Dispatch<SetStateAction<string>>
  setType: Dispatch<SetStateAction<FilterProducts>>
  setOrder: Dispatch<SetStateAction<FilterSort>>
}

const FilterContext = createContext({} as FilterContextProps)

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const [type, setType] = useState<FilterProducts>('ALL')
  const [order, setOrder] = useState<FilterSort>('NEWS')

  useEffect(() => {
    if (location.pathname !== '/') return
    router.push(`/?page=1&q=${search}`)
  }, [search, router])

  return (
    <FilterContext.Provider
      value={{
        search,
        type,
        order,
        setSearch,
        setType,
        setOrder,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
