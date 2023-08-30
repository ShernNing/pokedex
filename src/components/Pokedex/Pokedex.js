import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [fetchPokemon, setFetchPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [error, setError] = useState("");

  const getPokemon = async () => {
    const res = await fetch(fetchPokemon);
    const data = await res.json();

    setFetchPokemon("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
    console.log(data);

    function showPokemon(results) {
      results.forEach(async (a) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${a.name}`);
        const data = await res.json();

        setPokemon((b) => [...b, data]);
      });
    }
    showPokemon(data.results);
    console.log(pokemon);
  };

  useEffect(() => {
    getPokemon().catch((error) => setError(error));
  }, []);

  return (
    <div className='container'>
      <h1 className='title'>Pokedex</h1>
      {error ? <p>Error: {error.message}</p> : null}
      <div className='poke-container'>
        {pokemon.map((c, d) => (
          <PokeCard
            key={d}
            id={c.id}
            image={c.sprites.other.dream_world.front_default}
            name={c.name}
            type={c.types[0].type.name}
          />
        ))}
      </div>
      <button className='button' onClick={() => getPokemon()}>
        Load more
      </button>
    </div>
  );
}

export default Pokedex;
