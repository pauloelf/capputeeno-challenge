import { useRouter } from 'next/navigation'
import { Card } from './styles'

type ProductCardProps = {
  title: string
  price: number
  image: string
  id: string
}

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
