import * as S from './styles'
import CoffeeCard from '../../../components/CoffeeCard'
import { coffees } from '../../../data/coffees'
import { useCart } from '../../../Contexts/CartContext'

const CoffeeList = () => {
  const { cart } = useCart()
  return (
    <S.CoffeeListContainer>
      <h3>Cafés selecionados</h3>
      <S.SummaryContainer>
        <S.CoffeeList>
          {cart.items.map((cartItem) => (
            <CoffeeCard.Cart
              key={cartItem.coffeeId}
              coffee={
                coffees.find((coffee) => coffee.id === cartItem.coffeeId)!
              }
              quantity={cartItem.quantity}
            />
          ))}
        </S.CoffeeList>
        <S.TotalContainer>
          <div>
            <p>Total de Itens</p>
            <p>R$ 29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>
                R$ {(cart.total + 3.5).toFixed(2).replace('.', ',')}
              </strong>
            </p>
          </div>
          <S.ConfirmButton form="address-form" type="submit">
            CONFIRMAR PEDIDO
          </S.ConfirmButton>
        </S.TotalContainer>
      </S.SummaryContainer>
    </S.CoffeeListContainer>
  )
}

export default CoffeeList
