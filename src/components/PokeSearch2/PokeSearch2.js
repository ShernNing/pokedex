import React, { useEffect, useState } from "react";

function PokeSearch2() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  const showPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div>
        <h2>Pokemon stats</h2>
        <input type='text' onChange={(e) => setPokemonName(e.target.value)} />
        <button onClick={showPokemon}>Search..</button>
      </div>
      <div>
        <h2>Name: {pokemon.name}</h2>
      </div>
    </div>
  );
}

export default PokeSearch2;
