import styled from 'styled-components'

export const TagHeader = styled.header`
  max-width: 72.5rem;
  display: flex;
  padding: 1.25rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  position: relative;

  > a {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 150%;
    color: var(--logo-color);
    text-decoration: none;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 760px) {
    padding: 0.75rem 1.25rem;

    > a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem;

    > a {
      font-size: 1.25rem;
    }

    > div {
      width: 100%;
      justify-content: center;
    }
  }
`

export const SearchInputContainer = styled.form`
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

  @media (max-width: 760px) {
    width: 16rem;

    input {
      width: 16rem;
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
  }

  @media (max-width: 500px) {
    width: 13.5rem;

    input {
      width: 13.5rem;
      font-size: 0.625rem;
      line-height: 1rem;
    }

    button {
      padding: 0.5625rem 0.75rem 0.375rem 0.75rem;
      > svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
`

export const Input = styled.input`
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

export const CartContainer = styled.button`
  display: block;
  cursor: pointer;
  margin-top: 7px;
  background-color: transparent;
  border: none;
  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 500px) {
    top: 0.75rem;
    right: 1.25rem;
    position: absolute;
    > svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`

export const CartCount = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;
  font-weight: 600;
  width: 17px;
  height: 17px;
  padding: 0 0.3125rem;
  margin-left: -0.625rem;
  color: #fff;
  background-color: var(--delete-color);
  border-radius: 50%;

  @media (max-width: 500px) {
    width: 14px;
    height: 14px;
  }
`
