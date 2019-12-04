import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import EvoForms from "./EvoForms";

const PokemonForms = () => {
  const pokemonContext = useContext(PokemonContext);
  const { api } = pokemonContext;

  return( <div></div>);
};

export default PokemonForms;
