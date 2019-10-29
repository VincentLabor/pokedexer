import React, { useState, useContext } from 'react'
import PokemonContext from '../context/pokemon/pokemonContext';

const Search = () => {
    const pokemonContext = useContext(PokemonContext);
    
    const [pkmn, setPkmn] = useState(""); //Setting the state for this component
  
    

    const onChange = e => {
        setPkmn(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault(); //Prevents a new page from opening. 
        pokemonContext.searchPokemon(pkmn);
        pokemonContext.getSprite(pkmn);
        pokemonContext.getDexEntry(pkmn);
        setPkmn("")
       // pokemonContext.findDitto();
    }

    return (
        <form onSubmit={onSubmit} className="pkSearch">
            <input type="text" name="pkmn" value={pkmn} onChange={onChange} placeholder="E.g. Lugia, Rhyhorn, Swampert, etc..." className='search'/>
            <input type="submit" value="Go" className='goSubmit'/>
        </form>
    )
}

export default Search;
