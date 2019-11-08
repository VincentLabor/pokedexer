import { GET_POKEMON, GET_SPRITE, GET_DEXENTRY, SET_LOADING, GET_POKEMON_NAME, GET_TYPES, SEARCH_FAIL, GET_EVOLUTIONS, SAVE_API, HAVE_EVOLUTION } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                pokeName: action.payload,
                loading: false
            }
        case GET_SPRITE:
            return {
                ...state,
                sprite: action.payload,
                loading: false
            }
        case GET_DEXENTRY:
            return {
                ...state,
                dexEntry: action.payload,
                loading: false
            }
        case GET_TYPES:
            return {
                ...state,
                pokeType: action.payload,
                loading: false
            }
        case GET_EVOLUTIONS:
            return {
                ...state,
                evolveChain: action.payload
            }
        case SAVE_API:
            return {
                ...state,
                api: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case HAVE_EVOLUTION:
            return {
                ...state,
                haveEvolution: true
            }
        case SEARCH_FAIL:
            return {
                ...state,
                pokemon: '',
                sprite: '',
                dexEntry: '',
                pokeName: '',
                pokeType: '',
                loading: '',
                isShiny: '',
            }
        default:
            return state;
    }
}