import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

interface ProductProps {
  data: {
    Product: {
      name: string
      description: string
      price_in_cents: number
      category: string
      image_url: string
    }
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetchData = (id: string): AxiosPromise<ProductProps> => {
  return axios.post(API_URL, {
    query: `
    query{ Product(id: "${id}") {
      name
      description
      price_in_cents
      category
      image_url
    }}`,
  })
}

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetchData(id),
    queryKey: ['product', id],
    enabled: !!id,
  })
  return {
    data: data?.data?.data?.Product,
  }
}
