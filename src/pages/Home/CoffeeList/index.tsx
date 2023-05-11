import CoffeeCard from '../../../components/CoffeeCard'
import { coffees } from '../../../data/coffees'
import * as S from './styles'

export const CoffeeList = () => {
  return (
    <S.CoffeeListContainer>
      <S.HeaderContainer>
        <h2>Nossos cafés</h2>
        <S.FilterContainer></S.FilterContainer>
      </S.HeaderContainer>
      <S.CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard.Catalog key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeeList>
    </S.CoffeeListContainer>
  )
}
