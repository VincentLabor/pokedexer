import { GET_POKEMON, GET_SPRITE, GET_DEXENTRY } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        case GET_SPRITE:
            return {
                ...state,
                sprite: action.payload
            }
        case GET_DEXENTRY:
            return {
                ...state,
                dexEntry: action.payload
            }
        default:
            return state;
    }
}