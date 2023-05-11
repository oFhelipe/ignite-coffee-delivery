import styled from 'styled-components'
import { Button } from '../Button'

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  @media (min-width: 800px) {
    padding: 2rem 10rem;
  }
`

export const Logo = styled.img`
  height: 2.5rem;
  @media (max-width: 480px) {
    display: none;
  }
`
export const LogoMobile = styled.img`
  height: 2.5rem;
  @media (min-width: 481px) {
    display: none;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  ${(props) => props.theme.fonts['text-regular-s']}
`

export const LocationButton = styled(Button)`
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors.purple};
  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.white};
  }
`
