import "./App.css";
import { useState } from "react";
import axios from "axios";
import Navbar from './components/Navbar';

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

  const searchPokemon = async () => {
    try {
      await axios
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
    } catch {
      alert("The Pokemon name does not exist.");
    }
  };

  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* content */}
      <div>
        <div className="container">
          <div className="d-flex justify-content-center m-5">
            <div className="input-group input-group-lg w-50">
              <input
                placeholder="Search Pokemon Name"
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
              <ul className="list-group text-center w-50 rounded-pill">
                <li className="list-group-item bg-dark bg-gradient text-white">
                  {pokemon.name}
                </li>
                <li className="list-group-item bg-dark bg-gradient">
                  <img alt="img" src={pokemon.img} />
                </li>
                <li className="list-group-item bg-dark bg-gradient text-white">
                  Species: {pokemon.species}
                </li>
                <li className="list-group-item bg-dark bg-gradient text-white">
                  Type: {pokemon.type}
                </li>
                <li className="list-group-item bg-dark bg-gradient text-white">
                  Hp: {pokemon.hp}
                </li>
                <li className="list-group-item bg-dark bg-gradient text-white">
                  Attack: {pokemon.attack}
                </li>
                <li className="list-group-item bg-dark bg-gradient text-white">
                  Defense: {pokemon.defense}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
