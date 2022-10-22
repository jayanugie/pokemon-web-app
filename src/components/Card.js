import React from "react";

function Card({ pokemon, loading, infoPokemon }) {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="card p-3 bg-transparent"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <div className="row g-0 bg-secondary bg-gradient border rounded-pill pointer">
                  <div className="text-white col-md-2">
                    <p className="p-1">{item.id}</p>
                  </div>
                  <div className="col-md-3">
                    <img
                      src={item.sprites.front_default}
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7 text-white">
                    <div className="card-body">
                      <h5 className="card-title m-1">{item.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Card;
