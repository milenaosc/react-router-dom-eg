import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`} state={{ from: item.id }}>
        {item.title}
      </Link>
      <img
        className="card-image"
        src={item.images[4] ? item.images[4] : item.images[0]}
      ></img>
      <div className="price">${item.price}</div>
    </div>
  );
}

export default Card;
