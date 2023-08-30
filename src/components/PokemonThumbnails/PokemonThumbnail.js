import React from "react";

function PokemonThumbnail({ id, name, image, type }) {
  const style = `thumb-container ${type}`;
  return (
    <div className={style}>
      <div className='number'>
        <small>#{id}</small>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div>
    </div>
  );
}

export default PokemonThumbnail;
