import * as S from './styles'
import mobileLogo from '../../assets/logo-mobile.svg'
import logo from '../../assets/logo.svg'
import CartButton from '../CartButton'
import { MapPin } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../../Contexts/CartContext'

export const Header = () => {
  const navigate = useNavigate()
  const { orderInfo } = useCart()

  const onClickCartButton = () => {
    navigate('/checkout')
  }

  return (
    <S.Container>
      <NavLink to="/">
        <S.LogoMobile src={mobileLogo} />
        <S.Logo src={logo} />
      </NavLink>
      <S.ActionsContainer>
        <S.LocationButton>
          <MapPin size={19} weight="fill" />
          <p>
            {orderInfo?.address
              ? orderInfo?.address.city + ' ' + orderInfo?.address.uf
              : 'Itapevi, SP'}
          </p>
        </S.LocationButton>
        <CartButton isHeader onClick={onClickCartButton} />
      </S.ActionsContainer>
    </S.Container>
  )
}
