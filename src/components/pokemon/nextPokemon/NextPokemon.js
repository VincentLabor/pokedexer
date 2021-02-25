import React, { useContext, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const NextPokemon = () => {
  const pokemonContext = useContext(PokemonContext);

  const {
    pokemon,
    searchPokemon,
    getSprite,
    getDexEntry,
    getPokeName,
    getPokeType,
    getEvolutions,
    prevPokeId,
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
    <div className="spaceBetween top-mg-2">
      {pokemon === "" || pokemon.id === 1 ? null : (
        <Fragment>
          <div onClick={previousPage} className="cursorPointer prev">
            
            <strong className="smallTextMobile">
              <p className="redText">Previous</p>
              <p>
                #{prevPokeId} {prevPokemonName}
              </p>
            </strong>

            <img src={previousPageSprite} alt="" className="smallOnMobile" />
          </div>
          <div onClick={nextPage} className="cursorPointer next ">
            <strong className="smallTextMobile">
              <p className="alignRight redText">Next</p>
              <p className="alignRight">
                #{nextPokeId} {nextPokemonName}
              </p>
            </strong>

            <img src={nextPageSprite} alt="" className="smallOnMobile floatRight"/>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default NextPokemon;
