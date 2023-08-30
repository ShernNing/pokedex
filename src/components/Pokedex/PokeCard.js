import React from "react";
import "./Pokedex.css";

function PokeCard({ name, image, type, id }) {
  const style = `card ${type}`;
  return (
    <div className={style}>
      <div className='content'>
        <div className='id'>#{id}</div>
        <img src={image} alt={name} />
        <h4 className='name'>{name}</h4>
        <div className='type'>Type: {type}</div>
      </div>
    </div>
  );
}

export default PokeCard;
