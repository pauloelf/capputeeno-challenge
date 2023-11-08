import { useFilterContext } from '@/context'
import { ComponentProps } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Input, SearchInputContainer } from './styles'

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
