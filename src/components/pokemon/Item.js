import React, { useContext, Fragment } from 'react';
import PokemonContext from '../context/pokemon/pokemonContext';
import Spinner from '../layout/Spinner';
import PokeTypes from './Types/PokeTypes.js';
import Sprites from './sprites/Sprites';

const Item = () => {
    const pokemonContext = useContext(PokemonContext);
    const { sprite, pokemon, dexEntry, loading, pokeName } = pokemonContext;

    const pokedexNum = pokemon.id;

    if (loading) {
        return <Spinner />
    }

    return (
        <Fragment>
            <div className="pokeContainer">
                <p className='pokeNum'>{pokedexNum === undefined ? "" : "#" + pokedexNum}</p>
                <h4 className='pokeName'>{pokeName}</h4>
            </div>
            <Sprites />
            <div className='pokeContainer'>
                <PokeTypes />
            </div>
            <p className='pokeData'>{dexEntry}</p>
        </Fragment>
    )
}

export default Item;