import { useContext } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { SnackContext } from "../../../context/snackContext/snackContext"



export default function Eyebrow() {

    const { eyebrow } = useContext(SnackContext)

    return (
        <>
            <Head title="Sobrancelha" description="Página de Sobrancelha" />
            <SnackTitle>Sobrancelha</SnackTitle>
            <Snacks snacks={eyebrow} />
        </>
    )
}