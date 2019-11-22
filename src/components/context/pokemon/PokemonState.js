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
  REVERT,
  STORE_EVOLUTIONS,
  STORE_2ND_EVO,
  CLEAR,
  EVO_SPRITE_2,
  EVO_SPRITE
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
    evolveChain: [],
    loading: false,
    isShiny: false,
    haveEvolution: null,
    searchError: null,
    evo1: "",
    evo2: "",
    evoSprite: "",
    evoSprite2: ""
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const searchPokemon = async pkmn => {
    setLoading();

    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);

      clearAll();

      dispatch({
        type: GET_POKEMON,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SEARCH_FAIL
      });

      setTimeout(() => dispatch({ type: REVERT }), 6400);
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

    const res2 = await axios.get(res.data.evolution_chain.url); //This will reach to the evolution section of the API
    dispatch({
      type: SAVE_API,
      payload: res2.data.chain.evolves_to
    });

    dispatch({
      //2nd Evolution
      type: STORE_EVOLUTIONS,
      payload: res2.data.chain.evolves_to[0].species.name
    });

    const thirdResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${res2.data.chain.evolves_to[0].species.name}`
    );

    dispatch({
      type: EVO_SPRITE,
      payload: thirdResponse.data.sprites.front_default
    });

    dispatch({
      //3rd evolution
      type: STORE_2ND_EVO,
      payload: res2.data.chain.evolves_to[0].evolves_to[0].species.name
    });

    const fourthResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${res2.data.chain.evolves_to[0].evolves_to[0].species.name}`
    );

      console.log(fourthResponse);

       dispatch({
         type: EVO_SPRITE_2,
         payload: fourthResponse.data.sprites.front_default
       })


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

  const clearAll = () => {
    dispatch({
      type: CLEAR
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
        evo1: state.evo1,
        evo2: state.evo2,
        api: state.api,
        evoSprite: state.evoSprite,
        evoSprite2: state.evoSprite2,
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
