import React, { useReducer } from 'react';
import pokemonReducer from './pokemonReducer';
import PokemonContext from './pokemonContext';
import axios from 'axios';
import {
    GET_POKEMON,
    SET_LOADING,
    GET_SPRITE,
} from '../types';


const PokemonState = (props) => {
    const initialState = {
        pokemon: '',
        sprite: ''
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    const searchPokemon = async pkmn => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
        dispatch({
            type: GET_POKEMON,
            payload: res.data
        })
    };

    const getSprite = async (pkmn) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
        dispatch({
            type: GET_SPRITE,
            payload: res.data.sprites
        })
        console.log(res.data.sprites)
    }

    return <PokemonContext.Provider
        value={{
            pokemon: state.pokemon,
            sprite: state.sprite,
            searchPokemon,
            getSprite,
        }}
    >
        {props.children}
    </PokemonContext.Provider>
}

export default PokemonState;
