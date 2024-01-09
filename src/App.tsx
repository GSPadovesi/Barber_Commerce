import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { createContext, useEffect, useState } from 'react'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { getBeard } from './services/api'

interface snackContentProps {
  beard: SnackData[];
}

export const snackContext = createContext({} as snackContentProps)

export default function App() {

  const [beard, setBeard] = useState<SnackData[]>([])

  useEffect(() => {
    ; (async () => {
      const request = await getBeard();
      setBeard(request.data)
    })()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <snackContext.Provider value={{ beard }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </snackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
