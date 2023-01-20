import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useEffect, useState } from "react"
import { getHair } from "../../../services/api"
 
export default function Hair(){

  const [hair, setHair] = useState([])
  
  useEffect(() => {
    (async () => {
      const response = await getHair()
      setHair(response.data)
    })()
  }, [])

    return(
        <>
            <Head title="Cabelo" description="Página de Cabelo" />
            <SnackTitle>Cabelos</SnackTitle>
            <Snacks snacks={hair} />
        </>
    )
}