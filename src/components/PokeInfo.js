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
          <div className="m-5">
            <h2>{data.name}</h2>
            <img
              className="bg-white bg-transparent img-fluid p-3"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt="pokemon"
            />
            <div>
              <p className="fst-italic m-0 fs-4 text-decoration-underline">
                Ability:
              </p>
              {data.abilities.map((poke) => {
                return (
                  <div>
                    <p className="m-0 fst-italic m-0 fs-5 fw-light">
                      {poke.ability.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="fst-italic m-0 fs-4 text-decoration-underline mt-3">
              Stats:
            </p>
            {data.stats.map((poke) => {
              return (
                <>
                  <p className="fst-italic m-0 fw-light fs-5">
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
