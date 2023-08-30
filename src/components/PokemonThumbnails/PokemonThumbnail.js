import React from "react";

function PokemonThumbnail({ id, name, image, type, experience, ability }) {
  const style = `thumb-container ${type}`;
  return (
    <div className={style}>
      <div className='number'>
        <small>#{id}</small>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
          <h3>{name}</h3>
          <small>Type: {type}</small>
          <h5>Experience: {experience}xp</h5>
          <h4>{ability}</h4>
        </div>
      </div>
    </div>
  );
}

export default PokemonThumbnail;
