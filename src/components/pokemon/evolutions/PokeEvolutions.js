import React, {useContext} from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';

const PokeEvolutions = ()=>{
    const pokemonContext = useContext(PokemonContext);

    const {haveEvolution, evo1,evo2} = pokemonContext; 

    return(
        <div>
           <h3 className='evolutions'>{evo1}</h3>
           <h3 className='evolutions'>{evo2}</h3>
        </div>
    );
}

export default PokeEvolutions;