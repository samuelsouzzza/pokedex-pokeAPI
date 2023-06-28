import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBurst } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';



import './Card.css';

const Card = () => {

    const [search, setSearch] = React.useState();
    const [pokemon, setPokemon] = React.useState();

    if(pokemon == null || search == null){
        React.useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
        
        }, [search, pokemon]);
    }


        if(search == null || pokemon == null){
            return (
                 <div className="boxSearch">
                    <input type="text" placeholder='Pesquisar Pokémon' value={search} onChange={({target}) => setSearch(target.value)}/>
                </div>
            )
        }
        return (
            <>
                <div className="boxSearch">
                    <input type="text" placeholder='Pesquisar Pokémon' value={search} onChange={({target}) => setSearch(target.value)}/>
                </div>
                
                <section className='containerCard'>
                {pokemon ? (
                    <>
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
                                        {pokemon.stats[0].base_stat}
                                    </p>
                                </label>
                                <label className='lblAtk'>
                                    <p>
                                        <FontAwesomeIcon icon={faBurst} className='iconFontAwesome'/>
                                        {pokemon.stats[1].base_stat}
                                    </p>
                                </label>
                                <label className='lblDef'>
                                    <p>
                                        <FontAwesomeIcon icon={faShield} className='iconFontAwesome'/>
                                        {pokemon.stats[2].base_stat}
                                    </p>
                                </label>
                                <label className='lblWeight'>
                                    <p>
                                        <FontAwesomeIcon icon={faWeightScale} className='iconFontAwesome'/>
                                        {Math.round(pokemon.weight / 100).toFixed(1) + 'kg'}
                                    </p>
                                </label>
                            </div>
                        </footer>
                    </>
                ) : <p>Carregando...</p> }
                </section>
            </>
        )
}

export default Card;