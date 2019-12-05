import React, { useContext, useState } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const EvoForms = ({ evolutionForms}) => {
  const pokemonContext = useContext(PokemonContext);

  const [form1, setForm1] = useState([]);

  const {
    searchPokemon,
    getSprite,
    getPokeName,
    getPokeType,
    getEvolutions,
    clearAll
  } = pokemonContext;

  // const secondEvo = () => {
  //   try {
  //     clearAll();
  //     searchPokemon(evolutionForms.toLowerCase());
  //     getSprite(evolutionForms.toLowerCase());
  //     getPokeName(evolutionForms.toLowerCase());
  //     getPokeType(evolutionForms.toLowerCase());
  //     getEvolutions(evolutionForms.toLowerCase());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(evolutionForms);

  return (
    <div>

    </div>
  );
};

export default EvoForms;
