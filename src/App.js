import "./App.css";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    <div className="background">
      {/* navbar */}
      <nav className="navbar bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand mb-0 h1 text-white">
            Pokemon Stats
          </a>
          <a href="/list-pokemon" className="text-white text-decoration-none">
            List Pokemon
          </a>
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

      {/* footer */}

      <div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x w-100">
          <footer className="text-center text-lg-start text-white bg-dark">
            <div className="container">
              <section>
                <div className="row d-flex align-items-center">
                  <div className="col-md-7 col-lg-8 text-center text-md-start">
                    <div className="p-3">
                      © 2022 Copyright:{" "}
                      <a
                        className="text-white"
                        target="blank"
                        href="https://jayanugie.github.io"
                      >
                        jayanugie
                      </a>
                    </div>
                  </div>

                  <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <a
                      href="https://github.com/jayanugie"
                      target="blank"
                      className="btn btn-outline-light btn-floating m-1"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faGit} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/jayanugie/"
                      target="blank"
                      className="btn btn-outline-light btn-floating m-1"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
