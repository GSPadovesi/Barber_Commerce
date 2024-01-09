import { useContext, useEffect, useState } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { SnackData } from "../../../interfaces/SnackData"
import { getEyebrow } from "../../../services/api"
import { snackContext } from "../../../App"


export default function Eyebrow() {

    const { eyebrow } = useContext(snackContext)

    return (
        <>
            <Head title="Sobrancelha" description="Página de Sobrancelha" />
            <SnackTitle>Sobrancelha</SnackTitle>
            <Snacks snacks={eyebrow} />
        </>
    )
}