import { useNavigate } from 'react-router-dom'
import { useCart } from '../../Contexts/CartContext'
import { getCoffeeImage } from '../../helper/getCoffeeImage'
import { ICoffee } from '../../interfaces/ICoffee'
import AddRemove from '../AddRemove'
import CartButton from '../CartButton'

import * as S from './styles'

interface CoffeeCardProps {
  coffee: ICoffee
}

export const Catalog = ({ coffee }: CoffeeCardProps) => {
  const { id, name, description, types, price } = coffee
  const { addItemToCart, removeItemFromCart, cart } = useCart()
  const navigate = useNavigate()

  const itemQuantity =
    cart.items.find((item) => item.coffeeId === id)?.quantity || 0

  function handleAddItemToCart() {
    addItemToCart(id)
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(id)
  }

  const onClickCartButton = () => {
    if (itemQuantity === 0) {
      handleAddItemToCart()
    }
    navigate('/checkout')
  }

  return (
    <S.CoffeeCardCatalogContainer>
      <img alt={`Imagem de u cafe ${name}`} src={getCoffeeImage(id)} />
      <S.TypeList>
        {types.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </S.TypeList>
      <S.CoffeInfo>
        <h3>{name}</h3>
        <p>{description}</p>
      </S.CoffeInfo>
      <S.PurchasePriceContainer>
        <p>
          R$ <span>{price.toFixed(2).replace('.', ',')}</span>
        </p>
        <S.PurchaseContainer>
          <AddRemove
            quantity={itemQuantity}
            handleAdd={handleAddItemToCart}
            handleRemove={handleRemoveItemFromCart}
          />
          <CartButton color="purple" onClick={onClickCartButton} />
        </S.PurchaseContainer>
      </S.PurchasePriceContainer>
    </S.CoffeeCardCatalogContainer>
  )
}
