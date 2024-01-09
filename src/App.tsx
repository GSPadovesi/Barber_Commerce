import { BrowserRouter } from 'react-router-dom'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { AppRoutes } from './routes'
import { SnackContextProvider } from './context/snackContext/snackContext'




export default function App() {

  return (
    <BrowserRouter>
      <Theme>
        <SnackContextProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContextProvider>
      </Theme>
    </BrowserRouter>
  )
}
