import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { snackContext } from "../../../App"
import { dataBeard } from "../../../utils/dadosBeard"
import { useContext, useEffect, useState } from "react"
import { getBeard } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export default function Beard() {

    const { beard } = useContext(snackContext)

    return (
        <>
            <Head title="Barba" description="Página de Barba" />
            <SnackTitle>Barba</SnackTitle>
            <Snacks snacks={beard} />
        </>
    )
}