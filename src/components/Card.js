import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Cards.css";
import { capitalize, padNumber } from "../helpers/utils";
import axios from "axios";

const Card = ({ url }) => {
  const [body, setBody] = useState({ id: null, name: null, image: null });

  useEffect(() => {
    getPokemonInfo(url);
  }, []);

  const getPokemonInfo = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      setBody({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      {body.id ? (
        <div className="card text-center bg-warning animate__animated animate__fadeInUp">
          <div className="overflow">
            <img
              src={body.image}
              alt=""
              className="img-fluid mr-5"
              width="150"
            />
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">{capitalize(body.name)}</h4>
            <p className="card-text text-danger">#{padNumber(body.id, 3)}</p>
            <Link
              to={`/pokemon/${body.id}`}
              className="btn btn-outline-danger rounded-0"
            >
              Info
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Card;
