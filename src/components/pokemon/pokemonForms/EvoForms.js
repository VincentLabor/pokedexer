import React, { useContext, useState, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import axios from "axios";
// import { async } from "q";

const EvoForms = ({ evolutionForms, diffForms }) => {
  const pokemonContext = useContext(PokemonContext);

  const pokemonForm = async pkmn => {
     return getSprite2(pkmn);
  };

  const {
    searchPokemon,
    getSprite,
    getPokeName,
    getPokeType,
    getEvolutions,
    clearAll,
    evoSprite2,
    stackSprite,
    getSprite2,
  } = pokemonContext;

  return (
    <Fragment>
      {evolutionForms.map(nameOfForm => {
        //When you use map inside of jsx, you still have to return
        console.log(nameOfForm.species);
        return (
          <div>
            <p className="pd-1">{nameOfForm.species.name}</p>
            <img src={stackSprite} alt="" />
          </div>
        );
      })}
      <p className="pd-1">{diffForms.species.name} </p>
      <p> </p>
    </Fragment>
  );
};

export default EvoForms;
