'use client'

import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

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

const fetchData = (): AxiosPromise<ProductsProps> => {
  return axios.post(API_URL, {
    query: `
    query {
      allProducts {
        id
        name
        price_in_cents
        image_url
      }
    }`,
  })
}

export function useProducts() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchData,
  })

  return {
    data: data?.data?.data?.allProducts,
  }
}
