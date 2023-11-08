import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`

type FilterItemProps = {
  active: 0 | 1
}

export const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 760px) {
    gap: 1.5rem;

    li {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 500px) {
    li {
      font-size: 0.75rem;
    }
  }
`

export const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: ${(props) => (props.active ? '600' : '400')};
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  list-style: none;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.active ? '4px solid var(--orange-low)' : ''};
`

export const SortFilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: var(--text-dark);
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      margin-left: 0.75rem;
    }
  }
`

export const SortFilter = styled.ul`
  position: absolute;
  width: 176px;
  padding: 0.75rem 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  top: 100%;
  right: 0;
  z-index: 99;

  li {
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: var(--text-dark);
    cursor: pointer;
  }

  li + li {
    margin-top: 0.25rem;
  }

  @media (max-width: 620px) {
    left: 0;
  }
`
