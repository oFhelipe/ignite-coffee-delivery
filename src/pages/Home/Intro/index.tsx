import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import * as S from './styles'
import coffeeImage from '../../../assets/intro-coffe.png'

export const Intro = () => {
  return (
    <S.IntroContainer>
      <S.IntroInfoContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <S.StrengthsList>
          <S.Strength>
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </S.Strength>
          <S.Strength>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </S.Strength>
          <S.Strength>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </S.Strength>
          <S.Strength>
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </S.Strength>
        </S.StrengthsList>
      </S.IntroInfoContainer>
      <img alt="Imagem de um cade com varios grãos ao lado" src={coffeeImage} />
    </S.IntroContainer>
  )
}
