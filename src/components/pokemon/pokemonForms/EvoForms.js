import React, { useContext, useState, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import axios from "axios";
// import { async } from "q";

const EvoForms = ({ evolutionForms, diffForms }) => {
  const pokemonContext = useContext(PokemonContext);

  const pokemonForm = async pkmn => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);

    console.log(res.data)
    return res.data.sprites.front_shiny;
  };

  const {
    searchPokemon,
    getSprite,
    getPokeName,
    getPokeType,
    getEvolutions,
    clearAll
  } = pokemonContext;

  return (
    <Fragment>
      {evolutionForms.map(nameOfForm => {
        //When you use map inside of jsx, you still have to return
        return (
          <div>
            <p className="pd-1">{nameOfForm.species.name}</p>
            <img src={pokemonForm(nameOfForm.species.name)} alt="" />
          </div>
        );
      })}
      <p className="pd-1">{diffForms.species.name} </p>
      <p> </p>
    </Fragment>
  );
};

export default EvoForms;
