import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import EvoForms from "./EvoForms";

const PokemonForms = () => {
  const pokemonContext = useContext(PokemonContext);
  const { apiEvo } = pokemonContext;

  return( apiEvo.map((evolutionForms, index)=> <EvoForms key={index} evolutionForms={evolutionForms.evolves_to} diffForms={evolutionForms}/> )); //When you map through, the values in the array are already accounted for. 
 
};

export default PokemonForms;
