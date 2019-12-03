import React, { useContext, Fragment } from "react";
import PokemonContext from "../context/pokemon/pokemonContext";
import Spinner from "../layout/Spinner";
import PokeTypes from "./Types/PokeTypes";
import Sprites from "./sprites/Sprites";
import PokeEvolutions from "./evolutions/PokeEvolutions";
import NextPokemon from "./nextPokemon/NextPokemon";

const Item = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemon, dexEntry, loading, pokeName } = pokemonContext;

  const pokedexNum = pokemon.id;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {pokedexNum === undefined ? null : (
        <div>
          <div className="pad2 centers">
            <p className="pokeNum centerText">
              {pokedexNum === undefined ? "" : "#" + pokedexNum}
            </p>
            <h4 className="pokeName ">{pokeName}</h4>
          </div>
          <Sprites />
          <div className="pad2 centers">
            <PokeTypes />
          </div>
          <p className="centerText">{dexEntry}</p>
          <div>
            <PokeEvolutions />
          </div>
          <div>
            <NextPokemon />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Item;
