import { Container, SearchContainer } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { moneyFormat } from '../../helpers/moneyFormat';

interface SnacksProps{
    snacks: any[]
}

export function Snacks({snacks}: SnacksProps){

    const [search, setSearch] = useState('');

    const filter = snacks.filter((snack) => snack.name.toLowerCase().includes(search.toLowerCase()));
    console.log(search, '-', snacks)


    return (
        <>
            <SearchContainer>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <p><FiSearch /></p>
            </SearchContainer>
            <Container>
                {filter.map((snack) => (
                    <div key={snack.id} className='snack'>
                        <h2>{snack.name}</h2>
                        <img src={snack.image} alt={snack.name} />
                        <p>{snack.description}</p>
                        <div>
                            <strong>{moneyFormat(snack.price)}</strong>
                            <button type='button'><FiPlus /></button>
                        </div>
                    </div>
                ))}
            </Container>
        </>
    )
}