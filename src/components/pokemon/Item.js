import React, {useContext} from 'react';
import PokemonContext from '../context/pokemon/pokemonContext';

const Item = ()=>{

    const pokemonContext = useContext(PokemonContext);
    const {sprite} = pokemonContext;

    return(
        <div>
            <img src={sprite.front_default} alt=""/>
        </div>
    )
}

export default Item;