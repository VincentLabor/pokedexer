import React, {useContext} from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';

const PokeEvolutions = ()=>{
    const pokemonContext = useContext(PokemonContext);

    const {haveEvolution} = pokemonContext; 

    return(
        <div>
            {haveEvolution && <h3>Evolutions</h3>}
        </div>
    );
}

export default PokeEvolutions;