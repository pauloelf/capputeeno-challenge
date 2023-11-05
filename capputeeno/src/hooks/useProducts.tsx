'use client'

import { FilterProducts, FilterSort, useFilterContext } from '@/context'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { useDeferredValue } from 'react'
import { useSearchParams } from 'next/navigation'

export type Product = {
  name: string
  price_in_cents: number
  id: string
  image_url: string
}

interface ProductsProps {
  data: {
    allProducts: Product[]
    _allProductsMeta: {
      count: number
    }
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetchData = (query: string): AxiosPromise<ProductsProps> => {
  return axios.post(API_URL, { query })
}

const getCategoryByProduct = (type: FilterProducts) => {
  switch (type) {
    case 'MUG':
      return 'mugs'
    case 'SHIRT':
      return 't-shirts'
    default:
      return ''
  }
}

const getCategoryByOrder = (order: FilterSort) => {
  switch (order) {
    case 'POPULARITY':
      return { field: 'sales', order: 'DSC' }
    case 'BIGGEST-PRICE':
      return { field: 'price_in_cents', order: 'DSC' }
    case 'MINOR-PRICE':
      return { field: 'price_in_cents', order: 'ASC' }
    default:
      return { field: 'created_at', order: 'DSC' }
  }
}

const getQueryProduct = (
  type: FilterProducts,
  order: FilterSort,
  search: string,
  page: number,
) => {
  const categoryProduct = getCategoryByProduct(type)
  const categoryOrder = getCategoryByOrder(order)

  if (search) {
    return `query {
      allProducts (filter:{q: "${search}"}, page: ${page}, perPage: 12, sortField: "${categoryOrder.field}", sortOrder: "${categoryOrder.order}") {
        id
        name
        price_in_cents
        image_url
      },
      _allProductsMeta(filter: {q: "${search}"}) {
        count
      }
    }`
  }

  if (type === 'ALL' && order === 'NEWS')
    return `query {
      allProducts (page: ${page}, perPage: 12, sortField: "created_at", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      },
      _allProductsMeta(filter: {q: "${search}"}) {
        count
      }
    }`

  return `query {
    allProducts (page: ${page}, perPage: 12, ${
      categoryProduct ? `filter: { category: "${categoryProduct}" }` : ''
    }, sortField: "${categoryOrder.field}", sortOrder: "${
      categoryOrder.order
    }") {
      id
      name
      price_in_cents
      image_url
      category
    },
    _allProductsMeta(filter: {q: "${search}", ${
      categoryProduct ? `category: "${categoryProduct}"` : ''
    }}) {
      count
    }
  }`
}

export function useProducts() {
  const { type, order, search } = useFilterContext()
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const searchDeferred = useDeferredValue(search)

  const query = getQueryProduct(
    type,
    order,
    searchDeferred,
    page ? Number(page) - 1 : 0,
  )

  const { data } = useQuery({
    queryKey: [
      'products',
      type,
      order,
      searchDeferred,
      page ? Number(page) - 1 : 0,
    ],
    queryFn: () => fetchData(query),
    staleTime: 1000 * 60 * 1,
  })

  const products = data?.data?.data?.allProducts
  const count = data?.data?.data?._allProductsMeta.count

  return {
    data: products,
    count,
  }
}
