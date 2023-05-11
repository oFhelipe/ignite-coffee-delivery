import { MapPin, Money, Timer } from 'phosphor-react'
import * as S from './styles'
import { useCart } from '../../Contexts/CartContext'
import { UF, getStateNameByUF } from '../../helper/address'
import successImage from '../../assets/success.svg'

const Success = () => {
  const { orderInfo } = useCart()
  return (
    <S.SuccessContainer>
      <S.SuccessInfoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <S.OrderInfoBorder>
          <S.OrderInfoContainer>
            <S.OrderInfo>
              <span>
                <MapPin size={16} weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {orderInfo?.address.street}, {orderInfo?.address.number}
                  </strong>
                </p>
                <p>
                  {orderInfo?.address.city} -{' '}
                  {getStateNameByUF(orderInfo?.address.uf as UF)},{' '}
                  {orderInfo?.address.uf}
                </p>
              </div>
            </S.OrderInfo>
            <S.OrderInfo>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </S.OrderInfo>
            <S.OrderInfo>
              <span>
                <Money size={16} weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </S.OrderInfo>
          </S.OrderInfoContainer>
        </S.OrderInfoBorder>
      </S.SuccessInfoContainer>
      <img src={successImage} alt="Pessoa levando o produto em uma moto" />
    </S.SuccessContainer>
  )
}

export default Success
