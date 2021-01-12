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
  PRE_EVO,
  EVO_SPRITE,
  EVO_SPRITE_2,
  PRE_EVO_NAME,
  PREVIOUS_POKE,
  NEXT_PAGE_SPRITE,
  PREV_PAGE_SPRITE,
  STACK_SPRITE,
} from "../types";

const PokemonState = (props) => {
  const initialState = {
    pokemon: "",
    sprite: "",
    dexEntry: "",
    pokeName: "",
    pokeType: [],
    apiEvo: [],
    evolutions: "",
    evolveChain: [],
    loading: false,
    isShiny: false,
    haveEvolution: null,
    searchError: null,
    preEvoName: "",
    evo1: null,
    evo2: "",
    evoSprite: "",
    evoSprite2: "",
    preEvoSprite: "",
    nextPokemon: "",
    prevPokemonName: "",
    nextPokemonName: "",
    nextPokeId: "",
    prevPokeId: "",
    previousPageSprite: "",
    nextPageSprite: "",
    stackSprite: [],
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const searchPokemon = async (pkmn) => {
    setLoading();
    clearAll();

    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
      dispatch({
        type: GET_POKEMON,
        payload: res.data,
      });

//refactor code here
dispatch(getPrevPokemon(res.data.id - 1))
dispatch(getNextPokemon(res.data.id + 1))

    } catch (err) {
      console.log(err);
      dispatch({
        type: SEARCH_FAIL,
      });

      setTimeout(() => dispatch({ type: REVERT }), 6400);
    }
  };

  const getPrevPokemon = async (pokeId)=>{
    dispatch({
      //This is to catch the previous pokemon's id
      type: PREVIOUS_POKE,
      payload: pokeId - 1,
    });

    //This is for the name and sprite of the previous page pokemon
    const res2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeId - 1}/`
    );

    dispatch({
      type: PREV_PAGE_SPRITE,
      payload: res2.data,
    });
  }

  const getNextPokemon = async (pokeId)=>{
    const res3 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeId + 1}/`
    );

    dispatch({
      type: NEXT_PAGE_SPRITE,
      payload: res3.data,
    });
  }

  //Get the name of the pokemon
  const getPokeName = async (pkmn) => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
    dispatch({
      type: GET_POKEMON_NAME,
      payload: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
    });
  };

  //Get the sprite of the pokemon
  const getSprite = async (pkmn) => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);

    dispatch({
      type: GET_SPRITE,
      payload: res.data.sprites,
    });
  };

  //Get the evolutions
  const getEvolutions = async (pkmn) => {
    setLoading();

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`
    );
    dispatch({
      type: GET_EVOLUTIONS,
      payload: res.data.evolution_chain.url,
    });

    if (res.data.evolves_from_species !== null) {
      checkEvolution();
    }

    const res2 = await axios.get(res.data.evolution_chain.url); //This will reach to the evolution section of the API

    dispatch({
      type: SAVE_API,
      payload: res2.data.chain.evolves_to, //This takes all of the potential evolutions for the pokemon
    });

    //Consider what can be done in the previous call to the reducer here.
    const resFind = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pkmn}/`
    );

    //const resFind = await res2.data.chain.evolves_to.map(pkForm=> axios.get(`https://pokeapi.co/api/v2/pokemon/${pkForm.species.name}`));

    console.log(resFind);

    dispatch({
      type: STACK_SPRITE,
      payload: resFind,
    });

    //This is the first evolution. We do it this way because in the chance that a person selects a 2nd evolution, the first evolution will be present.
    dispatch({
      type: PRE_EVO_NAME,
      payload:
        res2.data.chain.species.name.charAt(0).toUpperCase() +
        res2.data.chain.species.name.slice(1),
    });

    const thirdResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${res2.data.chain.species.name}`
    );

    dispatch({
      type: PRE_EVO,
      payload: thirdResponse.data.sprites.front_default,
    });

    //2nd Evolution
    if (res2.data.chain.evolves_to.length !== 0) {
      dispatch({
        type: STORE_EVOLUTIONS,
        payload:
          res2.data.chain.evolves_to[0].species.name.charAt(0).toUpperCase() +
          res2.data.chain.evolves_to[0].species.name.slice(1),
      });

      const fourthResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${res2.data.chain.evolves_to[0].species.name}`
      );

      dispatch({
        type: EVO_SPRITE,
        payload: fourthResponse.data.sprites.front_default,
      });
    }

    try {
      const fifthResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${res2.data.chain.evolves_to[0].evolves_to[0].species.name}`
      );

      dispatch({
        //3rd evolution
        type: STORE_2ND_EVO,
        payload:
          res2.data.chain.evolves_to[0].evolves_to[0].species.name
            .charAt(0)
            .toUpperCase() +
          res2.data.chain.evolves_to[0].evolves_to[0].species.name.slice(1),
      });

      dispatch({
        type: EVO_SPRITE_2,
        payload: fifthResponse.data.sprites.front_default,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkEvolution = () => {
    setLoading();
    dispatch({ type: HAVE_EVOLUTION });
  };

  //Get the pokedex text entry
  const getDexEntry = async (pkmn) => {
    setLoading();
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`
    );
    for (let i = 0; i < 5; i++) {
      //When you use a for loop or a for each, this only displays the last entry available.
      if (res.data.flavor_text_entries[i].language.name === "en") {
        dispatch({
          type: GET_DEXENTRY,
          payload: res.data.flavor_text_entries[i].flavor_text,
        });
      }
    }
  };

  //Get the pokemon's typings
  const getPokeType = async (pkmn) => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);

    dispatch({
      type: GET_TYPES,
      payload: res.data.types, //This displays numbered stuff which is okay.
    });
  };

  //The loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  //The clear/Reset
  const clearAll = () => {
    dispatch({
      type: CLEAR,
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
        preEvoName: state.preEvoName,
        preEvoSprite: state.preEvoSprite,
        evo1: state.evo1,
        evo2: state.evo2,
        apiEvo: state.apiEvo,
        evoSprite: state.evoSprite,
        evoSprite2: state.evoSprite2,
        nextPokemon: state.nextPokemon,
        prevPokemonName: state.prevPokemonName,
        nextPokemonName: state.nextPokemonName,
        nextPokeId: state.nextPokeId,
        prevPokeId: state.prevPokeId,
        previousPageSprite: state.previousPageSprite,
        nextPageSprite: state.nextPageSprite,
        stackSprite: state.stackSprite,
        searchPokemon,
        getSprite,
        getDexEntry,
        getPokeName,
        getPokeType,
        getEvolutions,
        // getSprite2,
        checkEvolution,
        clearAll,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
