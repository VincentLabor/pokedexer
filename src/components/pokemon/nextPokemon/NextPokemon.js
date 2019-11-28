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
    previousSprite,
    previousPageSprite,
    prevPokemonName,
    nextPageSprite,
    nextPokemonName,
    nextPokeId
  } = pokemonContext;

  const previousPage = () => {
    searchPokemon(prevPokeId);
    getSprite(prevPokeId);
    getDexEntry(prevPokeId);
    getPokeName(prevPokeId);
    getPokeType(prevPokeId);
    getEvolutions(prevPokeId);
  };

  const nextPage = () => {
    searchPokemon(nextPokeId);
    getSprite(nextPokeId);
    getDexEntry(nextPokeId);
    getPokeName(nextPokeId);
    getPokeType(nextPokeId);
    getEvolutions(nextPokeId);
  };

  return (
    <div className="spaceBetween">
      {pokemon === "" || pokemon.id === 1 ? null : (
        <Fragment>
          <div onClick={previousPage}>
            <p>
              #{prevPokeId} {prevPokemonName}
            </p>
            <img src={previousPageSprite} alt="" />
          </div>
          <div onClick={nextPage}>
            <p>
              #{nextPokeId} {nextPokemonName}
            </p>
            <img src={nextPageSprite} alt="" />
            <p></p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default NextPokemon;
