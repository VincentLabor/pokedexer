import { GET_POKEMON, TESTER } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return{
                ...state,
                pokemon: action.payload
            }
            case TESTER:
                return{
                    ...state,
                    dittor: action.payload
                }
        default:
            return state;
    }
}