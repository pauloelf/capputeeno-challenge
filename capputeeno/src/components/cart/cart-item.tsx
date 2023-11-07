import { ProductProps, useCartContext } from '@/context'
import { FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components'

const Item = styled.li`
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
      overflow: hidden;
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
`

const SelectQuantity = styled.select`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dark);
  background-color: var(--bg-secondary);
  border: 1px solid #a8a8b3;
  border-radius: 0.5rem;
  padding: 0.5rem;
`

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
