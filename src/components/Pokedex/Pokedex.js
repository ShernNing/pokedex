import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [fetchPokemon, setFetchPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const getPokemon = async () => {
    const res = await fetch(fetchPokemon);
    const data = await res.json();

    setFetchPokemon(data.next);
    console.log(data, "fetch data");

    function showPokemon(results) {
      results.forEach(async (a) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${a.name}`);
        const data = await res.json();

        setPokemon((b) => [...b, data]);
        // console.log(data, "setPokemon data");
      });
    }
    showPokemon(data.results);
    console.log(data.results, "data.results");
    console.log(pokemon, "pokemon state");
  };

  useEffect(() => {
    getPokemon().catch((error) => setError(error));
  }, []);

  const filteredPokemon = pokemon.filter((data) =>
    data.name.toLowerCase().includes(name)
  );

  return (
    <div className='container'>
      <h1 className='title'>Pokedex</h1>
      {error ? `Error: ${(error.message, "Failed to fetch")}` : null}
      <input
        type='text'
        placeholder='Search a pokemon..'
        onChange={(e) => setName(e.target.value)}
      />
      <div className='poke-container'>
        {filteredPokemon.map((data, key) => (
          <PokeCard
            key={key}
            id={data.id}
            image={data.sprites.other.dream_world.front_default}
            name={data.name}
            type={data.types[0].type.name}
          />
        ))}
      </div>
      <button className='button' onClick={getPokemon}>
        Load more
      </button>
    </div>
  );
}

export default Pokedex;
