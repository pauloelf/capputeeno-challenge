/* eslint-disable @next/next/no-img-element */
import { ProductProps, useCartContext } from '@/context'
import { FiTrash2 } from 'react-icons/fi'
import { Item, SelectQuantity } from './styles'

export function CartItem(product: ProductProps) {
  const { UpdateQuantityProduct, DeleteProduct } = useCartContext()
  return (
    <Item>
      <button onClick={() => DeleteProduct(product.id)}>
        <FiTrash2 />
      </button>
      <img src={product.image_url} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div>
          <SelectQuantity
            onChange={({ target }) =>
              UpdateQuantityProduct(Number(target.value), product.id)
            }
            value={product.quantity}
            name="quantity"
            id="quantity"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </SelectQuantity>
          <span>
            {(product.price_in_cents / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </div>
    </Item>
  )
}
