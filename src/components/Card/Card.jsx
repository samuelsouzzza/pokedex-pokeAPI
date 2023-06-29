import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBurst } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';



import './Card.css';

const Card = () => {

    const [name, setName] = React.useState('bulbasaur');
    const [search, setSearch] = React.useState(name);
    const [pokemon, setPokemon] = React.useState();

    React.useEffect(() => {
        async function searchPokemon(){
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const json = await response.json();
                setPokemon(json);
            }
            catch{
                console.log('Erro na requisão à API.');
            }
        }
        searchPokemon();
    }, [name]);
    
    if(pokemon == undefined){
        return (
            <div className="boxSearch">
                    <input type="text" placeholder='Pesquisar Pokémon' value={search} onChange={({target}) => setSearch(target.value)}/>
                    <button onClick={() => setName(search)}>Pesquisar</button>
            </div>
        )
    }

    return (
        <>
            <div className="boxSearch">
                <input type="text" placeholder='Pesquisar Pokémon' value={search} onChange={({target}) => setSearch(target.value)}/>
                <button onClick={() => setName(search)}>Pesquisar</button>
            </div>

            <section className='containerCard'>
                <header>
                    <span className='spanIdPokemon'>{pokemon.id}</span>
                    <p className='namePokemon'>{pokemon.name}</p>
                    <p className='typePokemon'>{pokemon.types[0].type.name}</p>
                </header>
                <main>
                    <img src={pokemon.sprites.front_default} className='imgPokemon'/>
                </main>
                <footer>
                    <div className="boxStats">
                        <label className='lblHp'>
                            <p>
                                <FontAwesomeIcon icon={faHeart} className='iconFontAwesome'/>
                                <span>{pokemon.stats[0].base_stat}</span>
                            </p>
                        </label>
                        <label className='lblAtk'>
                            <p>
                                <FontAwesomeIcon icon={faBurst} className='iconFontAwesome'/>
                                <span>{pokemon.stats[1].base_stat}</span>
                            </p>
                        </label>
                        <label className='lblDef'>
                            <p>
                                <FontAwesomeIcon icon={faShield} className='iconFontAwesome'/>
                                <span>{pokemon.stats[2].base_stat}</span>
                            </p>
                        </label>
                        <label className='lblWeight'>
                            <p>
                                <FontAwesomeIcon icon={faWeightScale} className='iconFontAwesome'/>
                                <span>{pokemon.stats[3].base_stat}</span>
                            </p>
                        </label>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Card;