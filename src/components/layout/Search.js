import React, { useState, useContext, Fragment } from "react";
import PokemonContext from "../context/pokemon/pokemonContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const pokemonContext = useContext(PokemonContext);
  const alertContext = useContext(AlertContext);

  const [pkmn, setPkmn] = useState(""); //Setting the state for this component

  const {
    searchPokemon,
    getSprite,
    getDexEntry,
    getPokeName,
    getPokeType,
    getEvolutions,
    error,
    clearAll,
    pokemon
  } = pokemonContext;
  // const {setAlert} = alertContext;

  const onChange = e => {
    setPkmn(e.target.value);
  };

  const onClick = () => {
    setPkmn("");
    clearAll();
  };

  const randomized = ()=>{

    const pkmn = Math.floor(Math.random()*800) + 1;

    try {
      clearAll();
      searchPokemon(pkmn);
      getSprite(pkmn);
      getDexEntry(pkmn);
      getPokeName(pkmn);
      getPokeType(pkmn);
      getEvolutions(pkmn);
      setPkmn("");
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = e => {
    e.preventDefault(); //Prevents a new page from opening.
    try {
      searchPokemon(pkmn.toLowerCase());
      getSprite(pkmn.toLowerCase());
      getDexEntry(pkmn.toLowerCase());
      getPokeName(pkmn.toLowerCase());
      getPokeType(pkmn.toLowerCase());
      getEvolutions(pkmn.toLowerCase());
      setPkmn("");
    } catch (error) {
      console.log(error);
    }

    if (error === true) {
      //This comes from the pokemon state that trigger when a 404 is reached from the api.
      alertContext.setAlert(
        "The Pokemon you searched for cannot be found. Please check your spelling"
      );
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="pkSearch">
        <input
          type="text"
          name="pkmn"
          value={pkmn}
          onChange={onChange}
          placeholder="E.g. Lugia, Rhyhorn, Swampert, etc..."
          className="search"
          required
        />
        <input type="submit" value="Go" className="goSubmit" />
      </form>

      <button className="randomizer" onClick={randomized}>
          Random search
        </button>

      {pokemon !== "" ? (
        <button className="removeContent" onClick={onClick}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default Search;
