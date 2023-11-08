import styled from 'styled-components'

type PageProp = {
  active: 1 | 0
}

export const PaginationContainer = styled.div`
  display: flex;
  align-self: end;
  align-items: center;
  margin-top: 1.5rem;
  gap: 0.5rem;

  @media (max-width: 620px) {
    margin-top: 0.625rem;
  }
`

export const PageControlContainer = styled.ul`
  display: flex;
  gap: 0.125rem;
  list-style: none;
`

export const PageButton = styled.li<PageProp>`
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

export const ArrowControlContainer = styled.div`
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
