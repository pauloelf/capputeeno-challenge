import { useRouter } from 'next/navigation'
import styled from 'styled-components'

type ProductCardProps = {
  title: string
  price: number
  image: string
  id: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 16rem;
  cursor: pointer;

  img {
    width: 256px;
    height: 300px;
    object-fit: cover;
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

export function ProductCard({ id, image, price, title }: ProductCardProps) {
  const router = useRouter()

  const handleProduct = () => {
    router.push(`/product/?id=${id}`)
  }

  return (
    <Card onClick={handleProduct}>
      <img src={image} alt={title} />
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
