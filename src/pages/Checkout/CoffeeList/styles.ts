import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1.5rem 1rem;
  max-width: 28rem;

  & > h3 {
    ${(props) => props.theme.fonts['title-xs']}
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const SummaryContainer = styled.div`
  border-radius: 6px 36px 6px 36px;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors['base-card']};
`
export const CoffeeList = styled.div`
  margin-bottom: 1.5rem;
`
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > div {
    display: flex;
    flex: 1;
    justify-content: space-between;
    ${(props) => props.theme.fonts['text-regular-m']}
    color: ${(props) => props.theme.colors['base-text']};
    strong {
      ${(props) => props.theme.fonts['text-bold-l']}
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }
`
export const ConfirmButton = styled(Button)`
  padding: 0.75rem 0;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fonts['button-g']};
`
