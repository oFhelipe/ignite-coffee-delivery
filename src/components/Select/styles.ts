import styled, { css } from 'styled-components'
import { Button } from '../Button'

interface SelectButtonProps {
  isSelected: boolean
}

export const SelectButton = styled(Button)<SelectButtonProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors['base-text']};
  border-width: 1px;
  border-style: solid;
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
  ${(props) =>
    props.isSelected
      ? css`
          background-color: ${(props) => props.theme.colors['purple-light']};
          border-color: ${(props) => props.theme.colors.purple};
          &:hover {
            background-color: ${(props) => props.theme.colors['purple-light']};
          }
        `
      : css`
          background-color: ${(props) => props.theme.colors['base-button']};
          border-color: ${(props) => props.theme.colors['base-button']};
          &:hover {
            background-color: ${(props) => props.theme.colors['base-hover']};
          }
        `}
`
