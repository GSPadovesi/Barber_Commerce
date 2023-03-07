import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { dataBeard } from "../../../utils/dadosBeard"
import { useEffect, useState } from "react"
import { getBeard } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export default function Beard(){
    const [beard, setBeard] = useState<SnackData[]>([])

    useEffect(() => {
        (async () => {
            const response = await getBeard()
            setBeard(response.data)
        })()
    }, [])
    
    return(
        <>
            <Head title="Barba" description="Página de Barba" />
            <SnackTitle>Barba</SnackTitle>
            <Snacks snacks={beard}/>
        </>
    )
}