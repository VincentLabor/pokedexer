import React, { useContext, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const NextPokemon = () => {
  const pokemonContext = useContext(PokemonContext);

  const { pokeName, pokemon } = pokemonContext;

  return (
    <div className="spaceBetween">
      {pokemon === "" || pokemon.id === 1 ? null : (
        <Fragment>
          <div>
            <p>#{pokemon.id - 1}</p>
            <p></p>
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
