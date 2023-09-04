import React, { useEffect, useState } from "react";
import "./PokeSearch.css";

function PokeSearch() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [error, setError] = useState("");

  const searchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    console.log(data);

    setPokemon({
      name: data.name,
      img: data.sprites.other.dream_world.front_default,
      ability: data.abilities[0].ability.name,
      hp: data.stats[0].base_stat,
      type: data.types[0].type.name,
      moves: data.moves[0].move.name,
    });
    console.log(pokemon);

    setPokemonChosen(true);
  };

  return (
    <div className='App'>
      {error ? `Error: ${error.message}` : null}
      <div className='content'>
        <h1>Pokemon Stats</h1>
        <input
          type='text'
          placeholder='Search here..'
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <button onClick={searchPokemon}>Search</button>
        <div className='display-results'>
          {!pokemonChosen ? (
            ""
          ) : (
            <div className='results'>
              <img src={pokemon.img} alt={pokemon.name} />
              <h3>Name: {pokemon.name}</h3>
              <medium>HP: {pokemon.hp}</medium>
              <medium>Type: {pokemon.type}</medium>
              <medium>Ability: {pokemon.ability}</medium>
              <medium>Moves: {pokemon.moves}</medium>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeSearch;
