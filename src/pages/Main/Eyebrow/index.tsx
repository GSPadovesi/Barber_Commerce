import { useEffect, useState } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { SnackData } from "../../../interfaces/SnackData"
import { getEyebrow } from "../../../services/api"


export default function Eyebrow(){
    
    const[eye, setEye] = useState<SnackData[]>([])

    useEffect(() => {
        (async () => {
            const response = await getEyebrow()
            setEye(response.data)
        })()
    })

    console.log(eye)

    return(
        <>
            <Head title="Sobrancelha" description="Página de Sobrancelha" />
            <SnackTitle>Sobrancelha</SnackTitle>
            <Snacks snacks={eye} />
        </>
    )
}