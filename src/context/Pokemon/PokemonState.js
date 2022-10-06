import React, { useReducer } from "react";
import axios from "axios";

import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";

import { GET_POKEMONLIST, GET_POKEMON } from "../types";

const UserState = (props) => {
  const initialState = {
    pokemons: [],
    selectedPokemon: null,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  const getPokemonList = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
      const data = res.data.results;
      dispatch({ type: GET_POKEMONLIST, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemon = async (id) => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
      const data = res.data;
      dispatch({ type: GET_POKEMON, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        selectedPokemon: state.selectedPokemon,
        getPokemonList,
        getPokemon
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default UserState;
