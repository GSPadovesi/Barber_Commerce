import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { createContext, useEffect, useState } from 'react'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { getBeard, getEyebrow, getHair } from './services/api'

interface snackContentProps {
  beard: SnackData[];
  eyebrow: SnackData[];
  hair: SnackData[];
}

export const snackContext = createContext({} as snackContentProps)

export default function App() {

  const [beard, setBeard] = useState<SnackData[]>([])
  const [eyebrow, setEyebrow] = useState<SnackData[]>([])
  const [hair, setHair] = useState<SnackData[]>([])

  useEffect(() => {
    ; (async () => {
      try {
        const beardRequest = await getBeard();
        const eyebrowRequest = await getEyebrow();
        const hairRequest = await getHair();
        const request = [beardRequest, eyebrowRequest, hairRequest]

        const [
          { data: beardResponse },
          { data: eyebrowResponse },
          { data: hairResponse }
        ] = await Promise.all(request);

        setBeard(beardResponse)
        setEyebrow(eyebrowResponse)
        setHair(hairResponse)

      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <snackContext.Provider value={{ beard, eyebrow, hair }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </snackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
