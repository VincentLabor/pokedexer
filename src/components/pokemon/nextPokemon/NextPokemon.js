import React, { useContext, Fragment, useState } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const NextPokemon = () => {
  const pokemonContext = useContext(PokemonContext);

  const {
    pokeName,
    pokemon,
    clearAll,
    searchPokemon,
    getSprite,
    getDexEntry,
    getPokeName,
    getPokeType,
    getEvolutions,
    prevPokeId,
    previousSprite
  } = pokemonContext;

  return (
    <div className="spaceBetween">
      {pokemon === "" || pokemon.id === 1 ? null : (
        <Fragment>
          <div>
            <p>#{prevPokeId}</p>
            <img src={previousSprite} alt=""/>
          </div>
          <div>
            <p>#{pokemon.id + 1}</p>
            <p></p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default NextPokemon;
