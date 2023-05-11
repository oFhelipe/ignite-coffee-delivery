import * as S from './styles'
import PaymentForm from './PaymentForm'
import CoffeeList from './CoffeeList'

export const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <CoffeeList />
      <PaymentForm />
    </S.CheckoutContainer>
  )
}
