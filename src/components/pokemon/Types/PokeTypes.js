import React, { useContext } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import TypeItem from './TypeItem';

const PokeTypes = (props) => {
    const pokemonContext = useContext(PokemonContext);

    const { pokeType, pokemon } = pokemonContext;

    return (pokeType.map((eleType, index) => <TypeItem key={index} eleType={eleType}/>))
}

export default PokeTypes;