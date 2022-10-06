import React, { useContext, useEffect } from "react";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import PokemonContext from "../context/Pokemon/PokemonContext";

const Pokedex = () => {
  const { getPokemonList, pokemons } = useContext(PokemonContext);

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <>
      {pokemons.length ? (
        <div className="pokegallery">
          <Cards data={pokemons} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Pokedex;
