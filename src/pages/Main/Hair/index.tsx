import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useSnacks } from "../../../hooks/useSnacks"

export default function Hair() {

  const { hair } = useSnacks();

  return (
    <>
      <Head title="Cabelo" description="Página de Cabelo" />
      <SnackTitle>Cabelos</SnackTitle>
      <Snacks snacks={hair} />
    </>
  )
}