import {
  GET_POKEMON,
  GET_SPRITE,
  GET_DEXENTRY,
  SET_LOADING,
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
  PRE_EVO_NAME,
  EVO_SPRITE,
  EVO_SPRITE_2,
  PREVIOUS_POKE,
  NEXT_PAGE_SPRITE,
  PREV_PAGE_SPRITE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
    case PREVIOUS_POKE:
      return {
        ...state,
        prevPokeId: action.payload
      };
      case PREV_PAGE_SPRITE:
        return{
          ...state,
          previousPageSprite: action.payload.sprites.front_default,
          prevPokemonName: action.payload.name.charAt(0).toUpperCase() + action.payload.name.slice(1)
        }
      case NEXT_PAGE_SPRITE:
        return{
          ...state,
          nextPageSprite: action.payload.sprites.front_default,
          nextPokemonName: action.payload.name.charAt(0).toUpperCase() + action.payload.name.slice(1),
          nextPokeId: action.payload.id
        }
    case GET_POKEMON_NAME:
      return {
        ...state,
        pokeName: action.payload,
        loading: false
      };
    case GET_SPRITE:
      return {
        ...state,
        sprite: action.payload,
        loading: false
      };
    case GET_DEXENTRY:
      return {
        ...state,
        dexEntry: action.payload,
        loading: false
      };
    case GET_TYPES:
      return {
        ...state,
        pokeType: action.payload,
        loading: false
      };
    case GET_EVOLUTIONS:
      return {
        ...state,
        evolveChain: action.payload
      };
    case SAVE_API: //This is for the evolution forms such as eevee and ralts
      return {
        ...state,
        apiEvo: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case HAVE_EVOLUTION:
      return {
        ...state,
        haveEvolution: true
      };
    case STORE_EVOLUTIONS:
      return {
        ...state,
        evo1: action.payload
      };
    case STORE_2ND_EVO:
      return {
        ...state,
        evo2: action.payload
      };
    case EVO_SPRITE:
      return {
        ...state,
        evoSprite: action.payload
      };
    case EVO_SPRITE_2:
      return {
        ...state,
        evoSprite2: action.payload
      };
    case PRE_EVO_NAME:
      return {
        ...state,
        preEvoName: action.payload
      };
    case PRE_EVO:
      return {
        ...state,
        preEvoSprite: action.payload
      };
    case SEARCH_FAIL:
      return {
        ...state,
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
        preEvoName: "",
        evo1: "",
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
        searchError:
          "The Pokemon you searched for cannot be found. Please check your spelling"
      };

    case CLEAR:
      return {
        ...state,
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
        preEvoName: "",
        evo1: "",
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
        nextPageSprite: ""
      };
    case REVERT:
      return {
        ...state,
        searchError: null
      };
    default:
      return state;
  }
};
