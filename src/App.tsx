import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { GlobalStyle } from './styles/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
          <GlobalStyle />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
