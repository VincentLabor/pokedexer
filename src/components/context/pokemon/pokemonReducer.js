import { GET_POKEMON, GET_SPRITE, GET_DEXENTRY, SET_LOADING, GET_POKEMON_NAME } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            }
            case GET_POKEMON_NAME: 
            return{
                ...state,
                pokeName: action.payload
            }
        case GET_SPRITE:
            return {
                ...state,
                sprite: action.payload,
                loading:false
            }
        case GET_DEXENTRY:
            return {
                ...state,
                dexEntry: action.payload,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }  
        default:
            return state;
    }
}