import styled from 'styled-components'

export const ButtonComponent = styled.button`
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    transition: background-color 0.15s linear;
  }
`
