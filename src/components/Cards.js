import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="pokegallery">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4" key={item.name}>
            <Card name={item.name} url={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
