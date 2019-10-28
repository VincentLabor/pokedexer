import React, {useReducer} from 'react';
import pokemonReducer from './pokemonReducer';
import PokemonContext from './pokemonContext';
import axios from 'axios';
import {
    GET_POKEMON,
    SET_LOADING,
    TESTER
} from '../types';


const PokemonState = (props) => {
    const initialState = {
        pokemon: '',
        dittor: ''
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    const findDitto = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto/`);
        dispatch({
            type: TESTER,
            payload: res
        })
    }

    const searchPokemon = async pkmn => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
        dispatch({
            type: GET_POKEMON,
            payload: res.data
        })
        console.log(res.data)
    };

    return <PokemonContext.Provider
        value={{
            pokemon: state.pokemon,
            dittor: state.dittor,
            searchPokemon,
            findDitto
        }}
    >
        {props.children}
    </PokemonContext.Provider>
}

export default PokemonState;
