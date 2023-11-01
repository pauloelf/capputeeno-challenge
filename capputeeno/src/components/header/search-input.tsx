import { useFilterContext } from '@/context'
import { ComponentProps } from 'react'
import { FiSearch } from 'react-icons/fi'

import styled from 'styled-components'

const SearchInputContainer = styled.form`
  position: relative;
  width: 22rem;

  > button {
    position: absolute;
    right: 0;
    top: 50%;
    padding: 0.5625rem 1rem 0.375rem 1rem;
    transform: translateY(-50%);
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

const Input = styled.input`
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 400;
  width: 22rem;
  padding: 0.625rem 1rem;
  color: var(--text-dark);
  background-color: var(--bg-secondary);
  border: none;
  border-radius: 0.5rem;
`

type InputProps = ComponentProps<'input'>

export function SearchInput(props: InputProps) {
  const { search, setSearch } = useFilterContext()

  return (
    <SearchInputContainer onSubmit={(e) => e.preventDefault()}>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        {...props}
      />
      <button type="submit">
        <FiSearch color="#737380" />
      </button>
    </SearchInputContainer>
  )
}
