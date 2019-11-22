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
  EVO_SPRITE_2,
  EVO_SPRITE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
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
    case SAVE_API:
      return {
        ...state,
        api: action.payload
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
        return{
          ...state,
          evoSprite: action.payload
        }
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
        evolveChain: "",
        loading: false,
        isShiny: false,
        haveEvolution: null,
        searchError:
          "The Pokemon you searched for cannot be found. Please check your spelling",
        evo1: "",
        evo2: ""
      };

    case CLEAR:
      return {
        ...state,
        pokemon: "",
        sprite: "",
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
        evo2: ""
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
