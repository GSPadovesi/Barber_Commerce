import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useContext, useEffect, useState } from "react"
import { SnackContext } from "../../../context/snackContext/snackContext"

export default function Beard() {

    const { beard } = useContext(SnackContext)

    return (
        <>
            <Head title="Barba" description="Página de Barba" />
            <SnackTitle>Barba</SnackTitle>
            <Snacks snacks={beard} />
        </>
    )
}