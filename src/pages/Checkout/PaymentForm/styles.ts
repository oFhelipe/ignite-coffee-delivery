import styled from 'styled-components'
import { Input } from '../../../components/Input'

export const CheckoutItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1.5rem 1rem;

  & > h3 {
    ${(props) => props.theme.fonts['title-xs']}
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-card']};
  margin-bottom: 0.75rem;
`

export const DeliveryHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  .map-pin-line {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
  .currency-dollar {
    color: ${(props) => props.theme.colors.purple};
  }
  p {
    ${(props) => props.theme.fonts['text-regular-s']}
    color: ${(props) => props.theme.colors['base-text']};
  }
  h3 {
    ${(props) => props.theme.fonts['text-regular-m']}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const SmallInput = styled(Input)`
  @media (min-width: 1300px) {
    max-width: 200px;
  }
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 1300px) {
    flex-direction: row;
  }
`
export const UFInput = styled(Input)`
  input {
    text-transform: uppercase;
  }
  @media (min-width: 1300px) {
    max-width: 60px;
  }
`
export const PaymentTypeContianer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1300px) {
    flex-direction: row;
  }
`
