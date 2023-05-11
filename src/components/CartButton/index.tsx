import { useCart } from '../../Contexts/CartContext'
import { ButtonProps } from '../Button'
import * as S from './styles'
import { ShoppingCart } from 'phosphor-react'

interface CartButtonProps extends ButtonProps {
  color?: 'yellow' | 'purple'
  isHeader?: boolean
}

const CartButton = ({
  color = 'yellow',
  isHeader = false,
  ...inputProps
}: CartButtonProps) => {
  const { cartItemsQantity } = useCart()
  return (
    <S.CartButtonContainer color={color} {...inputProps}>
      {isHeader && !!cartItemsQantity && <span>{cartItemsQantity}</span>}
      <ShoppingCart height={19} width={22} weight="fill" />
    </S.CartButtonContainer>
  )
}

export default CartButton
