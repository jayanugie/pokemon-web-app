import React from "react";
import "../App.css";

function PokeInfo({ data }) {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="App-header">
            <h3>{data.name}</h3>
            <img
              className="bg-white bg-transparent"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt="pokemon"
            />
            {data.abilities.map((poke) => {
              return (
                <>
                  <p>{poke.ability.name}</p>
                </>
              );
            })}
            {data.stats.map((poke) => {
              return (
                <>
                  <p>ABILITY</p>
                  <p>
                    {poke.stat.name}: {poke.base_stat}
                  </p>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default PokeInfo;
