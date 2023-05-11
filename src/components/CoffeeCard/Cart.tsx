import { Trash } from 'phosphor-react'
import { getCoffeeImage } from '../../helper/getCoffeeImage'
import { ICoffee } from '../../interfaces/ICoffee'
import AddRemove from '../AddRemove'

import * as S from './styles'
import { useCart } from '../../Contexts/CartContext'

interface CoffeeCardProps {
  coffee: ICoffee
  quantity: number
}

export const Cart = ({ coffee, quantity }: CoffeeCardProps) => {
  const { addItemToCart, removeItemFromCart, completelyRemoveItemFromCart } =
    useCart()
  const { id, name, price } = coffee
  function handleAddItemToCart() {
    addItemToCart(id)
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(id)
  }

  function handleCompleteRemoveItemFromCart() {
    completelyRemoveItemFromCart(id)
  }
  return (
    <S.CoffeeCardCartContainer>
      <S.ImageInfoContainer>
        <img alt={`Imagem de u cafe ${name}`} src={getCoffeeImage(id)} />
        <S.InfoContainer>
          <p>{name}</p>
          <S.ActionContainer>
            <AddRemove
              quantity={quantity}
              handleAdd={handleAddItemToCart}
              handleRemove={handleRemoveItemFromCart}
            />
            <S.RemoveButton onClick={handleCompleteRemoveItemFromCart}>
              <Trash size={16} />
              <span>REMOVER</span>
            </S.RemoveButton>
          </S.ActionContainer>
        </S.InfoContainer>
      </S.ImageInfoContainer>
      <h3>R$ {(price * quantity).toFixed(2).replace('.', ',')}</h3>
    </S.CoffeeCardCartContainer>
  )
}
