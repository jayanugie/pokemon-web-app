import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import PokeInfo from "./components/PokeInfo";

function PokemonList() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res.data.results);

    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    // console.log(pokeData);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      // console.log(item.url)
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokeData((state) => {
        state = [...state, result.data];

        state.sort((a, b) => (a.id > b.id ? 1 : -1));

        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div className="background">
      <Navbar />

      {/* content */}
      <div className="container text-center">
        <div className="row text-white">
          {/* list */}
          <div className="col">
            <div className="row row-cols-2 p-3" style={{ height: "86vh" }}>
              <Card
                pokemon={pokeData}
                loading={loading}
                infoPokemon={(poke) => setPokeDex(poke)}
              />

              <div>
                {prevUrl && (
                  <button
                    className="btn btn-sm btn-secondary mx-2"
                    onClick={() => {
                      setPokeData([]);
                      setUrl(prevUrl);
                    }}
                  >
                    Previous
                  </button>
                )}
                {nextUrl && (
                  <button
                    className="btn btn-sm btn-secondary mx-2"
                    onClick={() => {
                      setPokeData([]);
                      setUrl(nextUrl);
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* pokemon information */}
          <div className="col">
            <PokeInfo data={pokeDex} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PokemonList;
