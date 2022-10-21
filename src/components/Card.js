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
                className="card mb-3"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <div className="row g-0">
                  <div className="text-dark col-md-2 bg-secondary">
                    <h3 className="">{item.id}</h3>
                  </div>
                  <div className="col-md-3">
                    <img
                      src={item.sprites.front_default}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7 text-dark bg-secondary">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
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
