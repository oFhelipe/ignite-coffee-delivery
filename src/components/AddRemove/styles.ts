import styled from 'styled-components'
import { Button } from '../Button'

export const AddRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 8px;
  p {
    margin-top: 0.24rem;
  }
`
export const AddRemoveButton = styled(Button)`
  height: 2.375rem;
  padding: 0 0.625rem;
  color: ${(props) => props.theme.colors.purple};
  background-color: ${(props) => props.theme.colors['base-button']};
  ${(props) => props.theme.fonts['title-s']}
  &:hover {
    transition: all 0.5s linear;
    background-color: ${(props) => props.theme.colors['base-hover']};
    color: ${(props) => props.theme.colors['base-title']};
  }
`
