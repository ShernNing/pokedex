import PokeSearch from "./components/PokeSearch/PokeSearch";
import PokeSearch2 from "./components/PokeSearch2/PokeSearch2";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <div className='app-container'>
      <PokeSearch />
      <Pokedex />
      {/* <PokeSearch2 /> */}
    </div>
  );
}

export default App;
