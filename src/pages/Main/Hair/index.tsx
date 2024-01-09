import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useContext, useEffect, useState } from "react"
import { getHair } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"
import { snackContext } from "../../../App"

export default function Hair() {

  const { hair } = useContext(snackContext)

  return (
    <>
      <Head title="Cabelo" description="Página de Cabelo" />
      <SnackTitle>Cabelos</SnackTitle>
      <Snacks snacks={hair} />
    </>
  )
}