import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useSnacks } from "../../../hooks/useSnacks"

export default function Beard() {

    const { beard } = useSnacks();

    return (
        <>
            <Head title="Barba" description="Página de Barba" />
            <SnackTitle>Barba</SnackTitle>
            <Snacks snacks={beard} />
        </>
    )
}