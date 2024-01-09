import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useContext } from "react"
import { SnackContext } from "../../../context/snackContext/snackContext"

export default function Hair() {

  const { hair } = useContext(SnackContext)

  return (
    <>
      <Head title="Cabelo" description="Página de Cabelo" />
      <SnackTitle>Cabelos</SnackTitle>
      <Snacks snacks={hair} />
    </>
  )
}