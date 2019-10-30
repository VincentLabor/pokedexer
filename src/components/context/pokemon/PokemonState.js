import React, { useReducer } from 'react';
import pokemonReducer from './pokemonReducer';
import PokemonContext from './pokemonContext';
import axios from 'axios';
import {
    GET_POKEMON,
    SET_LOADING,
    GET_SPRITE,
    GET_DEXENTRY,
    GET_POKEMON_NAME
} from '../types';


const PokemonState = (props) => {
    const initialState = {
        pokemon: '',
        sprite: '',
        dexEntry: '',
        pokeName: '',
        loading: false
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    const searchPokemon = async pkmn => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
        dispatch({
            type: GET_POKEMON,
            payload: res.data
        })
    };

    const getPokeName = async pkmn => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
        dispatch({
            type: GET_POKEMON_NAME,
            payload: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1)
        })
        
    };

    const getSprite = async (pkmn) => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
        dispatch({
            type: GET_SPRITE,
            payload: res.data.sprites
        })

    }

    const getDexEntry = async (pkmn) => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`);

        for(let i=0;i<5;i++){
            if (res.data.flavor_text_entries[i].language.name === "en"){
                dispatch({
                    type: GET_DEXENTRY,
                    payload: res.data.flavor_text_entries[i].flavor_text
                })
            }
        }
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <PokemonContext.Provider
        value={{
            pokemon: state.pokemon,
            sprite: state.sprite,
            dexEntry: state.dexEntry,
            loading: state.loading,
            pokeName: state.pokeName,
            searchPokemon,
            getSprite,
            getDexEntry,
            getPokeName
        }}
    >
        {props.children}
    </PokemonContext.Provider>
}

export default PokemonState;
