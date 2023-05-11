import styled from 'styled-components'
import { Button } from '../Button'

interface CartButtonProps {
  color: 'yellow' | 'purple'
}

export const CartButtonContainer = styled(Button)<CartButtonProps>`
  padding: 0.5rem;
  position: relative;
  span {
    ${(props) => props.theme.fonts['text-bold-s']}
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    height: 1.25rem;
    min-width: 1.25rem;
    border-radius: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -20%;
    top: -20%;
    line-height: 0;
    padding: 0 0.3rem;
  }
  background-color: ${(props) =>
    props.theme.colors[
      props.color === 'yellow' ? 'yellow-light' : 'purple-dark'
    ]};
  color: ${(props) =>
    props.theme.colors[props.color === 'yellow' ? 'yellow-dark' : 'white']};
  &:hover {
    background-color: ${(props) =>
      props.theme.colors[
        props.color === 'yellow' ? 'yellow' : 'purple-darker'
      ]};
    color: ${(props) => props.theme.colors.white};
    transition: background-color 0.15s linear;
  }
`
