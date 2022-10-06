import { GET_POKEMONLIST, GET_POKEMON } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_POKEMONLIST:
      return {
        ...state,
        pokemons: payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        selectedPokemon: payload,
      };
    default:
      return state;
  }
};
