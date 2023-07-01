import React from 'react';

import Loader from '../Loader/Loader.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBurst } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

const Card = () => {


    const [name, setName] = React.useState('bulbasaur');
    const [search, setSearch] = React.useState(name);
    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [buttonState, setButtonState] = React.useState(true);

    React.useEffect(() => {
        async function searchPokemon(){
            try{          
                setLoading(true);

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
                const json = await response.json();

                setPokemon(json);
                setButtonState(true);
                setLoading(false);
            }
            catch{
                setLoading(false);
                setButtonState(true);
                setError('Parece que este pokémon não existe, tente digitar outro nome.');
            }
        }
        searchPokemon();
    }, [name]);

    function handleWrite({target}){
        setSearch(target.value);
        (target.value.length == 0) ? setButtonState(true) : setButtonState(false);
    }

    function handleClick(){
        setLoading(true);
        setName(search);
        setError(null);
        setLoading(false);
    }
    
    if(pokemon == undefined || !name || error){
        return (
            <>
                <div className="boxSearch">
                    <input type="text" placeholder='Pesquisar Pokémon' value={search} onChange={handleWrite}/>
                    <button onClick={handleClick} disabled={buttonState} className='btnSearch'>
                        <FontAwesomeIcon icon={faSearch} className='iconFontAwesome search'/>
                    </button>
                </div>
                {error && <p className='pError'>{error}</p> }
            </>
        )
    }

    return (
        <>
            <div className="boxSearch">
                <input type="text" placeholder='Pesquisar Pokémon' value={search} onChange={handleWrite}/>
                <button onClick={handleClick} disabled={buttonState} className='btnSearch'>
                        <FontAwesomeIcon icon={faSearch} className='iconFontAwesome search'/>
                </button>
            </div>
           {error && <p>{error}</p>}
            <section className='containerCard'>
                {loading && <Loader />}
                {!loading  && (
                    <>
                        <header>
                            <span className='idPokemon'>{pokemon.id}</span>
                            <p className='namePokemon'>{pokemon.name}</p>
                            <p className='typePokemon'>{pokemon.types[0].type.name}</p>
                        </header>
                        <main>
                            <img src={pokemon.sprites.front_default} className='imgPokemon'/>
                        </main>
                        <footer>
                            <div className="boxStats">
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
                                <label className='lblHp'>
                                    <p>
                                        <FontAwesomeIcon icon={faHeart} className='iconFontAwesome'/>
                                        <span>{pokemon.stats[0].base_stat}</span>
                                    </p>
                                </label>
                            </div>
                        </footer>
                    </>
                )}
            </section>
        </>
    )
}

export default Card;