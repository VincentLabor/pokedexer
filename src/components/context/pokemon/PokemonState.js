import React, { useReducer } from "react";
import pokemonReducer from "./pokemonReducer";
import PokemonContext from "./pokemonContext";
import axios from "axios";
import {
  GET_POKEMON,
  SET_LOADING,
  GET_SPRITE,
  GET_DEXENTRY,
  GET_POKEMON_NAME,
  GET_TYPES,
  SEARCH_FAIL,
  GET_EVOLUTIONS,
  SAVE_API,
  HAVE_EVOLUTION,
  REVERT
} from "../types";

const PokemonState = props => {
  const initialState = {
    pokemon: "",
    sprite: "",
    dexEntry: "",
    pokeName: "",
    pokeType: [],
    api: "",
    evolutions: "",
    evolveChain: "",
    loading: false,
    isShiny: false,
    haveEvolution: null,
    searchError: null
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const searchPokemon = async pkmn => {
    setLoading();

    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
      dispatch({
        type: GET_POKEMON,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SEARCH_FAIL
      });

      setTimeout(() => dispatch({type: REVERT}), 6400);

      // setTimeout(()=>{
      //   dispatch({
      //     type: REVERT
      //   }, 7000)
      // })

    }
  };

  const getPokeName = async pkmn => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
    dispatch({
      type: GET_POKEMON_NAME,
      payload: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1)
    });
  };

  const getSprite = async pkmn => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);

    dispatch({
      type: GET_SPRITE,
      payload: res.data.sprites
    });
  };

  const getEvolutions = async pkmn => {
    setLoading();
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`
    );
    dispatch({
      type: GET_EVOLUTIONS,
      payload: res.data.evolution_chain.url
    });

    if (res.data.evolves_from_species !== null) {
      checkEvolution();
    }

    const res2 = await axios.get(res.data.evolution_chain.url);
    dispatch({
      type: SAVE_API,
      payload: res2.data.chain.evolves_to
    });
    if (res2.data.chain.evolves_to.length === 1) {
      checkEvolution();
    }
    console.log(res2.data.chain.evolves_to);
  };

  const checkEvolution = () => {
    dispatch({ type: HAVE_EVOLUTION });
  };

  const getDexEntry = async pkmn => {
    setLoading();
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`
    );
    for (let i = 0; i < 5; i++) {
      //When you use a for loop or a for each, this only displays the last entry available.
      if (res.data.flavor_text_entries[i].language.name === "en") {
        dispatch({
          type: GET_DEXENTRY,
          payload: res.data.flavor_text_entries[i].flavor_text
        });
      }
    }
  };

  const getPokeType = async pkmn => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);

    dispatch({
      type: GET_TYPES,
      payload: res.data.types //This displays numbered stuff which is okay.
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon: state.pokemon,
        sprite: state.sprite,
        dexEntry: state.dexEntry,
        loading: state.loading,
        pokeName: state.pokeName,
        pokeType: state.pokeType,
        evolveChain: state.evolveChain,
        haveEvolution: state.haveEvolution,
        searchError: state.searchError,
        api: state.api,
        searchPokemon,
        getSprite,
        getDexEntry,
        getPokeName,
        getPokeType,
        getEvolutions,
        checkEvolution
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
