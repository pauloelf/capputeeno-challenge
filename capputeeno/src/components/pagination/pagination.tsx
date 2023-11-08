'use client'

import { usePagination } from '@/hooks/usePagination'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  ArrowControlContainer,
  PageButton,
  PageControlContainer,
  PaginationContainer,
} from './styles'

type PaginationProps = {
  totalPages: number
}

export function Pagination({ totalPages }: PaginationProps) {
  const { currentPage, setCurrentPage } = usePagination()
  const router = useRouter()
  const pages = [...Array(totalPages)].map((_, i) => i)

  const handlePrevPage = () => {
    if (currentPage === 1) return

    setCurrentPage((prev) => prev - 1)
    router.push(`/?page=${currentPage}`)
  }

  const handleNextPage = () => {
    if (currentPage === totalPages) return

    setCurrentPage((prev) => prev + 1)
    router.push(`/?page=${currentPage}`)
  }

  if (currentPage > totalPages) setCurrentPage(1)

  return (
    <PaginationContainer>
      <PageControlContainer>
        {pages.map((p) => (
          <PageButton
            active={p + 1 === currentPage ? 1 : 0}
            key={p}
            onClick={() => setCurrentPage(p + 1)}
          >
            <Link href={`/?page=${currentPage}`}>{p + 1}</Link>
          </PageButton>
        ))}
      </PageControlContainer>
      <ArrowControlContainer>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1 || totalPages === 1}
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || totalPages === 1}
        >
          <FiChevronRight />
        </button>
      </ArrowControlContainer>
    </PaginationContainer>
  )
}
