import React, { createContext, useEffect, useState } from 'react'
import { SnackContentProps, SnackProvidersProps } from './snackContext.types'
import { SnackData } from '../../interfaces/SnackData'
import { getBeard, getEyebrow, getHair } from '../../services/api'


export const SnackContext = createContext({} as SnackContentProps)
export function SnackContextProvider({ children }: SnackProvidersProps) {

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
    <SnackContext.Provider value={{ beard, eyebrow, hair }}>
      {children}
    </SnackContext.Provider>
  )
}

