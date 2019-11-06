import React, { useReducer } from 'react';
import pokemonReducer from './pokemonReducer';
import PokemonContext from './pokemonContext';
import axios from 'axios';
import {
    GET_POKEMON,
    SET_LOADING,
    GET_SPRITE,
    GET_DEXENTRY,
    GET_POKEMON_NAME,
    GET_TYPES,
    SEARCH_FAIL
} from '../types';


const PokemonState = (props) => {
    const initialState = {
        pokemon: '',
        sprite: '',
        dexEntry: '',
        pokeName: '',
        pokeType: [],
        loading: false,
        isShiny: false
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    const searchPokemon = async pkmn => {
        setLoading();

        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);
            dispatch({
                type: GET_POKEMON,
                payload: res.data
            })

        } catch (error) {
            console.log(error.response.data.msg);
        }
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

        for (let i = 0; i < 5; i++) { //When you use a for loop or a for each, this only displays the last entry available. 
            if (res.data.flavor_text_entries[i].language.name === "en") {
                dispatch({
                    type: GET_DEXENTRY,
                    payload: res.data.flavor_text_entries[i].flavor_text
                })
            }
        }
    }

    const getPokeType = async pkmn => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`);

        dispatch({
            type: GET_TYPES,
            payload: res.data.types //This displays numbered stuff which is okay. 
        })
    };

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
            pokeType: state.pokeType,
            searchPokemon,
            getSprite,
            getDexEntry,
            getPokeName,
            getPokeType,

        }}
    >
        {props.children}
    </PokemonContext.Provider>
}

export default PokemonState;
