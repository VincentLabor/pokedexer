import React, { useContext, Fragment} from 'react';
import PokemonContext from '../context/pokemon/pokemonContext';
import Spinner from '../layout/Spinner';

const Item = () => {
    const pokemonContext = useContext(PokemonContext);
    const { sprite, pokemon, dexEntry, loading, pokeName } = pokemonContext;
    const names = pokemon.name;
    const pokedexNum = pokemon.id;

    if(loading){
      return <Spinner/>
    }

    return (
        <Fragment>
            <div className="pokeContainer">
                <p className='pokeNum'>{pokedexNum === undefined ? "" : "#" + pokedexNum}</p>
                <h4 className='pokeName'>{pokeName}</h4>
            </div>
            <div className="spriteHolder">
                <img src={sprite.front_default} alt="" className='sprites' />
                <img src={sprite.back_default} alt="" className='sprites' />
            </div>
            <p className='pokeData'>{dexEntry}</p>
        </Fragment>
    )
}

export default Item;