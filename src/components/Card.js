import React from "react";

function Card() {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="text-dark col-md-2 bg-secondary">
            <h3 className="">1</h3>
          </div>
          <div className="col-md-3">
            <img src="/search.png" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7 text-dark bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
