import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import PokemonContext from '../context/pokemon/pokemonContext';

const Alert = () => {
const alertContext = useContext(AlertContext);
const pokemonContext = useContext(PokemonContext);

const {searchError} = pokemonContext;

  return ( searchError !== null && (<div id='snackbar 'className='show'>
      The Pokemon you searched for cannot be found. Please check your spelling
  </div>))
};

export default Alert;

// {alert}
// return (<div id='snackbar 'className='show'>
// The Pokemon you searched for cannot be found. Please check your spelling
// </div>)