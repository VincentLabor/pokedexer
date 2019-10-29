import React, {useContext} from 'react';
import PokemonContext from '../context/pokemon/pokemonContext';

const Item = ()=>{

    const pokemonContext = useContext(PokemonContext);
    const {sprite,pokemon, dexEntry} = pokemonContext;
    const names = pokemon.name;


    return(
        <div>
            <h4 className='pokeName'>{names}</h4>
            <img src={sprite.front_default} alt="" className='sprites'/>
            <img src={sprite.back_default} alt="" className='sprites'/>
            <p className='pokeData'>{dexEntry}</p>
        </div>
    )
}

export default Item;