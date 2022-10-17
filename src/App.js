import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      {/* navbar */}
      <nav className="navbar bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1 text-white">Pokemon Stats</span>
        </div>
      </nav>

      {/* content */}
      <div className="">
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
                <img src="/search.png" alt="search"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
