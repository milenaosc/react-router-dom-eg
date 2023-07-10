import React from "react";

function Card({ item }) {
  console.log(item);
  return (
    <div className="card">
      <h2>{item.title}</h2>
      <img
        className="card-image"
        src={item.images[4] ? item.images[4] : item.images[0]}
      ></img>
      <div className="price">${item.price}</div>
    </div>
  );
}

export default Card;
