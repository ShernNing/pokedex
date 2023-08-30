import { useEffect, useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnails/PokemonThumbnail";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    // console.log(data);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className='app-container'>
      <h1>Pokedex</h1>
      <div className='pokemon-container'>
        <div className='all-containers'>
          {allPokemons.map((pokemonStats, index) => (
            <PokemonThumbnail
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          ))}
        </div>
        <button className='load-more' onClick={() => getAllPokemons()}>
          Load more
        </button>
      </div>
    </div>
  );
}

export default App;
