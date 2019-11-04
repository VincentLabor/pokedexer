import React, { useState, useContext } from 'react'
import PokemonContext from '../context/pokemon/pokemonContext';

const Search = () => {
    const pokemonContext = useContext(PokemonContext);
    
    const [pkmn, setPkmn] = useState(""); //Setting the state for this component
  
    const {searchPokemon, getSprite, getDexEntry, getPokeName, getPokeType} = pokemonContext;
    

    const onChange = e => {
        setPkmn(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault(); //Prevents a new page from opening. 
        searchPokemon(pkmn.toLowerCase());
        getSprite(pkmn.toLowerCase());
        getDexEntry(pkmn.toLowerCase());
        getPokeName(pkmn.toLowerCase());
        getPokeType(pkmn.toLowerCase());
        setPkmn("");
    }

    return (
        <form onSubmit={onSubmit} className="pkSearch">
            <input type="text" name="pkmn" value={pkmn} onChange={onChange} placeholder="E.g. Lugia, Rhyhorn, Swampert, etc..." className='search'/>
            <input type="submit" value="Go" className='goSubmit'/>
        </form>
    )
}

export default Search;
