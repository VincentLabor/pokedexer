import React, { useReducer } from 'react';
import pokemonReducer from './pokemonReducer';
import PokemonContext from './pokemonContext';
import axios from 'axios';
import {
    GET_POKEMON,
    SET_LOADING,
    GET_SPRITE,
    GET_DEXENTRY
} from '../types';


const PokemonState = (props) => {
    const initialState = {
        pokemon: '',
        sprite: '',
        dexEntry: '',
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
        
    }

    const getDexEntry = async (pkmn) =>{
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`);
        dispatch({
            type: GET_DEXENTRY,
            payload: res.data.flavor_text_entries[1].flavor_text
        })
        console.log(res.data.flavor_text_entries[1].flavor_text)
    }

    return <PokemonContext.Provider
        value={{
            pokemon: state.pokemon,
            sprite: state.sprite,
            dexEntry: state.dexEntry,
            searchPokemon,
            getSprite,
            getDexEntry,
        }}
    >
        {props.children}
    </PokemonContext.Provider>
}

export default PokemonState;
