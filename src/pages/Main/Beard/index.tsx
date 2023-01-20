import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { dataBeard } from "../../../utils/dadosBeard"

export default function Beard(){
    const data = dataBeard;
    return(
        <>
            <Head title="Barba" description="Página de Barba" />
            <SnackTitle>Barba</SnackTitle>
            <Snacks snacks={data}/>
        </>
    )
}