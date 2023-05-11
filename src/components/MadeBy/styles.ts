import styled from 'styled-components'

export const MadeByContainer = styled.div`
  position: fixed;
  z-index: 99999;
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem;
  border-radius: 8px;
  bottom: 1rem;
  right: 1.8rem;
  ${(props) => props.theme.fonts['text-regular-m']}
  -webkit-box-shadow: -1px 1px 17px -2px ${(props) =>
    props.theme.colors['base-text']};
  -moz-box-shadow: -1px 1px 17px -2px ${(props) => props.theme.colors['base-text']};
  box-shadow: -1px 1px 17px -2px ${(props) => props.theme.colors['base-text']};
`
