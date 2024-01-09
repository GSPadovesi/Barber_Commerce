import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { useSnacks } from "../../../hooks/useSnacks"



export default function Eyebrow() {

    const { eyebrow } = useSnacks();

    return (
        <>
            <Head title="Sobrancelha" description="Página de Sobrancelha" />
            <SnackTitle>Sobrancelha</SnackTitle>
            <Snacks snacks={eyebrow} />
        </>
    )
}