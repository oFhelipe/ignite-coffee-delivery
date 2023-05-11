import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
  }

  button, input {
    outline: none;
    border: none;
  }
  

  button:hover {
    cursor: pointer;
  }
`
