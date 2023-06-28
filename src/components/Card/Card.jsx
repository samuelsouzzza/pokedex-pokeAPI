import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBurst } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

const Card = () => {

    const [pokemon, setPokemon] = React.useState();

    React.useEffect(() => {
        async function buscarDados() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`);
            const data = await response.json();
            setPokemon(data);
        }
        buscarDados();
    }, []);

    if(pokemon) console.log(pokemon);

        return (
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
        )
}

export default Card;