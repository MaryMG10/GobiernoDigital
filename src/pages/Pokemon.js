import React, { useContext, useEffect } from "react";
import PokemonContext from "../context/Pokemon/PokemonContext";
import { capitalize, padNumber } from "../helpers/utils";
import Loading from "../components/Loading";

const Details = (props) => {
  const { getPokemon, selectedPokemon } = useContext(PokemonContext);
  const id = props.match.params.id;

  useEffect(() => {
    getPokemon(id);
  }, []);

  const toFeet = (meters) => {
    const realFeet = (meters * 0.3937) / 12;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return feet + "′" + inches + "´´";
  };

  const formatHeight = (height) => {
    return `${toFeet(height * 10)} (${height / 10}m)`;
  };

  const formatWeight = (weight) => {
    const lbs = Math.floor(weight * 22.046) / 100;
    return `${lbs} lbs  (${weight / 10}kg)`;
  };

  return (
    <>
      {selectedPokemon ? (
        <div className="container">
          <h1>
            {capitalize(selectedPokemon.name)} #
            {padNumber(selectedPokemon.id, 3)}
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img
                  src={selectedPokemon.sprites.front_default}
                  style={{ height: 300, width: 300 }}
                />
              </div>
              <div className="col-sm">
                <h4>Height: {formatHeight(selectedPokemon.height)}</h4>
                <h4>Weight: {formatWeight(selectedPokemon.weight)}</h4>
                <h4>
                  Abilities:{" "}
                  {selectedPokemon.abilities
                    .sort((a1, a2) => a1.slot - a2.slot)
                    .filter((ab) => !ab.is_hidden)
                    .map((ab) => capitalize(ab.ability.name))
                    .join(", ")}
                </h4>
                <h4>
                  Type:{" "}
                  {capitalize(
                    selectedPokemon.types && selectedPokemon.types[0].type.name
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
