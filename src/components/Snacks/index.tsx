import { Container, SearchContainer } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState } from 'react';

interface SnacksProps{
    snacks: any[]
}

export function Snacks({snacks}: SnacksProps){

    const [search, setSearch] = useState('');

    const hair = snacks.filter((snack) => snack.name.toLowerCase().includes(search.toLowerCase()));


    return (
        <>
            <SearchContainer>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <p><FiSearch /></p>
            </SearchContainer>
            <Container>
                {hair.map((snack) => (
                    <div key={snack.id} className='snack'>
                        <h2>{snack.name}</h2>
                        <img src={snack.image} alt={snack.name} />
                        <p>{snack.description}</p>
                        <div>
                            <strong>{snack.price}</strong>
                            <button type='button'><FiPlus /></button>
                        </div>
                    </div>
                ))}
            </Container>
        </>
    )
}