'use client'

import { FilterProducts, FilterSort, useFilterContext } from '@/context'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { useDeferredValue } from 'react'

export type Product = {
  name: string
  price_in_cents: number
  id: string
  image_url: string
}

interface ProductsProps {
  data: {
    allProducts: Product[]
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

const getQueryProduct = (type: FilterProducts, order: FilterSort) => {
  if (type === 'ALL' && order === 'NEWS')
    return `query {
      allProducts (sortField: "created_at", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      }
    }`

  const categoryProduct = getCategoryByProduct(type)
  const categoryOrder = getCategoryByOrder(order)

  return `query {
    allProducts (${
      categoryProduct ? `filter: { category: "${categoryProduct}" }` : ''
    }, sortField: "${categoryOrder.field}", sortOrder: "${
      categoryOrder.order
    }") {
      id
      name
      price_in_cents
      image_url
      category
    }
  }`
}

export function useProducts() {
  const { type, order, search } = useFilterContext()
  const searchDeferred = useDeferredValue(search)

  const query = getQueryProduct(type, order)
  const { data } = useQuery({
    queryKey: ['products', type, order],
    queryFn: () => fetchData(query),
  })

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter((product) =>
    product.name
      .toLocaleLowerCase()
      .includes(searchDeferred.toLocaleLowerCase()),
  )

  return {
    data: filteredProducts,
  }
}
