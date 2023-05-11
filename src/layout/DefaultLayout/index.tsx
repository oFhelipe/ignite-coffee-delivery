import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { Header } from '../../components/Header'
import MadeBy from '../../components/MadeBy'

export const DefaultLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <MadeBy />
    </S.Container>
  )
}
