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
    nextPokemonName
  } = pokemonContext;

  return (
    <div className="spaceBetween">
      {pokemon === "" || pokemon.id === 1 ? null : (
        <Fragment>
          <div>
            <p>
              #{prevPokeId} {prevPokemonName}
            </p>
            <img src={previousPageSprite} alt="" />
          </div>
          <div>
            <p>
              #{pokemon.id + 1} {nextPokemonName}
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
