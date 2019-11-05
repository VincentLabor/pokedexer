import React, { useContext } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Sprites = () => {
    const pokemonContext = useContext(PokemonContext);

    const { sprite } = pokemonContext;

    return (
        <div className='spriteHolder'>
            <img src={sprite.front_default} alt="" className='sprites' />
            <img src={sprite.back_default} alt="" className='sprites' />
        </div>
    )
}

export default Sprites
