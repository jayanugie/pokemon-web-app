import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          species: res.data.species.name,
          img: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type: res.data.types[0].type.name,
        });
        setPokemonChosen(true);
      });
  };

  return (
    <div className="background">
      {/* navbar */}
      <nav className="navbar bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1 text-white">Pokemon Stats</span>
          <span className="text-white">List Pokemon</span>
        </div>
      </nav>

      {/* content */}
      <div>
        <div className="container">
          <div className="d-flex justify-content-center m-5">
            <div className="input-group input-group-lg w-25">
              <input
                placeholder="Search Pokemon"
                type="text"
                className="form-control"
                onChange={(e) => setPokemonName(e.target.value)}
              />
              <button
                className="rounded-end border search"
                onClick={searchPokemon}
              >
                <img src="/search.png" alt="search" />
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-center p-5">
            {!pokemonChosen ? (
              <h3 className="text-white">Please choose a Pokemon</h3>
            ) : (
              <ul className="list-group text-center w-50">
                <li className="list-group-item">{pokemon.name}</li>
                <li className="list-group-item"><img alt="img" src={pokemon.img} /></li>
                <li className="list-group-item">Species: {pokemon.species}</li>
                <li className="list-group-item">Type: {pokemon.type}</li>
                <li className="list-group-item">Hp: {pokemon.hp}</li>
                <li className="list-group-item">Attack: {pokemon.attack}</li>
                <li className="list-group-item">Defense: {pokemon.defense}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
