import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
 
export default function Hair(){

    const data = [
        {
            id:'1',
            name:'Corte Disfarçado Curto',
            price:'R$ 150,00',
            description:'Corte de cabelo disfarçado com dois risquinhos atrás para chamar a atenção, com um corte de cabelo desses você não vai querer guerra com ninguem mais. Venha pra Hair Commerce',
            image: 'https://i.imgur.com/fmvhB8r.jpeg'
        },
        {
            id:'2',
            name:'Corte Disfarçado Curto',
            price:'R$ 50,00',
            description:'Corte de cabelo disfarçado com o cabelo jogado pra trás para deixar o cabelo mais estiloso, com um corte de cabelo desses você não vai querer guerra com ninguem mais. Venha pra Hair Commerce',
            image: 'https://i.imgur.com/RTRsXFV.jpeg'
        },
        {
            id:'3',
            name:'Gel de cabelo L.A LOOKS - 100g',
            price:'R$ 80,00',
            description:'Gel de cabelo L.A LOOKS - 100g, feito para cabelos estilosos',
            image: 'https://i.imgur.com/d4kEO.jpeg'
        },
        {
            id:'4',
            name:'Pomada de cabelo ForteBerry - 120g',
            price:'R$ 150,00',
            description:'Pomada de cabelo ForteBerry - 120g, feito para cabelos estilosos',
            image: 'https://i.imgur.com/aSuIktV.jpeg'
        },
        {
            id:'5',
            name:'Creme de cabelo Neon &CO. - 250g',
            price:'R$ 200,00',
            description:'Creme de cabelo Neon &CO. - 250g, feito para cabelos quebrados, oliosos e com caspa',
            image: 'https://i.imgur.com/Wxlq7WH.png'
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