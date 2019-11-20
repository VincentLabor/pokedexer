import React, { useContext, Fragment } from 'react';
import PokemonContext from '../context/pokemon/pokemonContext';
import Spinner from '../layout/Spinner';
import PokeTypes from './Types/PokeTypes';
import Sprites from './sprites/Sprites';
import PokeEvolutions from './evolutions/PokeEvolutions';

const Item = () => {
    const pokemonContext = useContext(PokemonContext);
    const { pokemon, dexEntry, loading, pokeName } = pokemonContext;

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
            <div>
                <PokeEvolutions />
            </div>
        </Fragment>
    )
}

export default Item;