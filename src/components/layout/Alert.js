import React, { useContext } from "react";
import PokemonContext from '../context/pokemon/pokemonContext';

const Alert = () => {
const pokemonContext = useContext(PokemonContext);

const {searchError} = pokemonContext;

  return ( searchError !== null && (<div id='snackbar'className='show' >
      <i className="fa fa-info-circle" /> {' '} {searchError}
  </div>))
};

export default Alert;
