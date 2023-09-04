import React, { useEffect, useState } from "react";
import PokeCard from "../Pokedex/PokeCard";
import "./PokeSearch2.css";

function PokeSearch2() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [showPokemon, setShowPokemon] = useState(false);
  const [poke, setPoke] = useState([]);
  const [fetchPoke, setFetchPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [error, setError] = useState("");

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();

    console.log(data);

    setPokemon({
      name: data.name,
      moves: data.moves[0].move.name,
      img: data.sprites.front_default,
    });

    setShowPokemon(true);
  };

  const getPoke = async () => {
    const res = await fetch(fetchPoke);
    const data = await res.json();
    console.log(data);
    setFetchPoke(data.next);

    const showPoke = (results) => {
      results.forEach(async (a) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${a.name}`);
        const data = await res.json();

        setPoke((b) => [...b, data]);
      });
    };
    showPoke(data.results);
    console.log(poke);
  };

  useEffect(() => {
    getPoke().catch((err) => setError(err));
  }, []);

  return (
    <div>
      <div>
        <div className='search'>
          <h2>pokemon stats</h2>
          <input type='text' onChange={(e) => setPokemonName(e.target.value)} />
          <button onClick={fetchPokemon}>Search</button>
        </div>
        <div className='search search-results'>
          {!showPokemon ? (
            "Select a Pokemon"
          ) : (
            <div>
              <img src={pokemon.img} alt={pokemon.img} />
              <h2>Name: {pokemon.name}</h2>
              <h3>Moves: {pokemon.moves}</h3>
            </div>
          )}
        </div>
      </div>
      <div className='list'>
        {error ? `Error: ${error.message}` : null}
        <h2>Pokedex</h2>
        <div className='search pokedex'>
          {poke.map((data, key) => (
            <PokeCard
              key={key}
              id={data.id}
              name={data.name}
              type={data.types[0].type.name}
              image={data.sprites.other.dream_world.front_default}
            />
          ))}
        </div>
        <button onClick={getPoke}>Load More</button>
      </div>
    </div>
  );
}

export default PokeSearch2;
