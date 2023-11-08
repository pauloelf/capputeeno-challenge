import styled from 'styled-components'

export const Container = styled.div`
  align-items: flex-start;
  padding-top: 0;
  padding-bottom: 0;
`

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

export const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  img {
    max-width: 40rem;
    width: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      font-size: 1rem;
      font-weight: 500;
      mix-blend-mode: multiply;
      color: #fff;
      background-color: var(--bg-blue);
      border-radius: 0.25rem;
      padding: 0.625rem 0;
      border: none;
      cursor: pointer;
      text-transform: uppercase;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  @media (max-width: 760px) {
    gap: 1.25rem;

    img {
      width: 40%;
    }

    > div {
      button {
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 60%;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
    color: var(--text-dark-2);
  }

  h1 {
    font-size: 2rem;
    line-height: 150%;
    font-weight: 300;
    color: var(--text-dark-2);
    margin-top: 0.75rem;
  }

  h1 + span {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--shapes-dark);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--text-dark);
  }

  div {
    h2 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-dark);
      text-transform: uppercase;
      margin-top: 4rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 1.5rem;
    }
    h1 + span {
      font-size: 1rem;
    }
    div {
      h2 {
        margin-top: 2rem;
      }
    }
  }
`
