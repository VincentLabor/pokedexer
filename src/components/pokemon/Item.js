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
            <div className="pad2 centers">
                <p className='pokeNum centerText'>{pokedexNum === undefined ? "" : "#" + pokedexNum}</p>
                <h4 className='pokeName '>{pokeName}</h4>
            </div>
            <Sprites />
            <div className='pad2 centers'>
                <PokeTypes />
            </div>
            <p className='centerText'>{dexEntry}</p>
            <div>
                <PokeEvolutions />
            </div>
        </Fragment>
    )
}

export default Item;