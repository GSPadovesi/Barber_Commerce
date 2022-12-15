import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Hair(){

    const data = [
        {
            id:'1',
            name:'Corte Disfarçado Longo',
            price:'R$ 150,00',
            description:'Corte de cabelo feminino',
            image: 'https://i.imgur.com/fmvhB8r.jpeg'
        },
        {
            id:'2',
            name:'Corte Disfarçado Curto',
            price:'R$ 50,00',
            description:'Corte de cabelo masculino',
            image: 'https://i.imgur.com/RTRsXFV.jpeg'
        }
    ]
    
    return(
        <>
            <Head title="Cabelo" description="Página de Cabelo" />
            <SnackTitle>Cabelos</SnackTitle>
            <Snacks snacks={data} />
        </>
    )
}