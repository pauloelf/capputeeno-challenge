'use client'

import { usePagination } from '@/hooks/usePagination'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'

type PageProp = {
  active: 1 | 0
}

type PaginationProps = {
  totalPages: number
}

const PaginationContainer = styled.div`
  display: flex;
  align-self: end;
  align-items: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
`

const PageControlContainer = styled.ul`
  display: flex;
  gap: 0.125rem;
  list-style: none;
`

const PageButton = styled.li<PageProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: var(--shapes-light);
  cursor: pointer;
  border: ${(props) => (props.active ? '2px solid var(--orange-low)' : '')};

  a {
    color: ${(props) =>
      props.active ? 'var(--orange-low)' : 'var(--text-dark)'};
    text-decoration: none;
  }
`

const ArrowControlContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    color: var(--text-dark);
    background-color: var(--shapes-light);
    border: none;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

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
