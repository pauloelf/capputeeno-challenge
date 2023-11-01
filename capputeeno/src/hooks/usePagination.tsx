'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function usePagination() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(getCurrentPage())

  function getCurrentPage() {
    const page = searchParams.get('page')
    return page ? Number(page) : 1
  }

  useEffect(() => {
    router.push(`/?page=${currentPage}`)
  }, [currentPage, router])

  return { setCurrentPage, currentPage }
}
