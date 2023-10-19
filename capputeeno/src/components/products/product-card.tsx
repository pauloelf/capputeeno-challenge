import Image from 'next/image'
import styled from 'styled-components'

type ProductCardProps = {
  title: string
  price: number
  image: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 16rem;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  h1 {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
    margin-left: 0.875rem;
    padding-top: 0.5rem;
    color: var(--text-dark-2);
  }

  > div {
    align-self: center;
    width: 14.25rem;
    height: 1px;
    margin: 0.5rem 0;
    background-color: var(--shapes);
  }

  p {
    font-size: 0.875rem;
    line-height: 150%;
    font-weight: 600;
    padding-bottom: 0.5rem;
    margin-left: 0.875rem;
    color: var(--shapes-dark);
  }
`

export function ProductCard({ image, price, title }: ProductCardProps) {
  return (
    <Card>
      <Image src={image} width={256} height={300} alt={title} />
      <h1>{title}</h1>
      <div></div>
      <p>
        {(price / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </Card>
  )
}
