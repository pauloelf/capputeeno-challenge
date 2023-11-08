import styled from 'styled-components'

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1.25rem 0;

  color: var(--text);
  background-color: transparent;
  font-size: 0.875rem;
  line-height: 150%;
  font-weight: 500;

  border: none;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Container = styled.div`
  flex-direction: row;
  align-items: stretch;
  gap: 2rem;
  padding-top: 0;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const CartProducts = styled.div`
  h1 {
    font-size: 1.5rem;
    line-height: 150%;
    font-weight: 500;
    color: var(--text-dark-2);
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 300;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

export const CartProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CartResultContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background-color: #fff;

  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  min-width: 22rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-dark-2);
    text-transform: uppercase;
  }

  h3 + div {
    margin-top: 1.875rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 500px) {
    min-width: 12rem;
  }
`

export const Divisor = styled.div`
  align-self: center;
  width: 100%;
  height: 1px;
  margin-top: 1.5rem;
  background-color: var(--shapes);

  & + div {
    font-weight: 600;
    margin-top: 0.75rem;
    margin-bottom: 2.5rem;
  }
`

export const TotalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;

  @media (max-width: 960px) {
    font-size: 0.875rem;
  }
`

export const Button = styled.button`
  color: #fff;
  border-radius: 0.25rem;
  background-color: var(--success-color);
  padding: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  width: 100%;

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13.25rem;
  margin-top: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  position: relative;

  button {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background-color: transparent;
    color: var(--delete-color);
    border: none;
    cursor: pointer;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  img {
    max-height: 100%;
    width: 16rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    line-height: 150%;
    color: var(--text-dark-2);
    padding: 1rem 2rem 1rem 1.25rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 300;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
      max-height: 50%;
      overflow: auto;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 1rem;
        font-weight: 600;
        color: var(--shapes-dark);
      }
    }
  }

  @media (max-width: 760px) {
    height: 10.75rem;
    img {
      width: 12rem;
    }

    > div {
      h2 {
        font-size: 1.125rem;
      }
    }
  }

  @media (max-width: 620px) {
    height: 8.75rem;

    img {
      width: 10rem;
    }

    button {
      top: 0.5rem;
    }

    > div {
      padding: 0.5rem 1rem 0.5rem 0.75rem;
      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.625rem;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    height: 100%;
    align-items: flex-start;

    img {
      border-radius: 0.5rem 0.5rem 0 0;
      width: 100%;
    }

    button {
      right: 0.5rem;
    }

    > div {
      padding: 0.5rem;
      gap: 0.5rem;

      h2 {
        font-size: 1.25rem;
      }

      p {
        font-size: 0.75rem;
      }
    }
  }
`

export const SelectQuantity = styled.select`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dark);
  background-color: var(--bg-secondary);
  border: 1px solid #a8a8b3;
  border-radius: 0.5rem;
  padding: 0.5rem;
`
