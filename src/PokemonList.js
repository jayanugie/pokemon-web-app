import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from './components/Card';

function PokemonList() {
  return (
    <div className="background">
      <Navbar />

      {/* content */}
      <div className="container text-center">
        <div className="row text-white">
          {/* list */}
          <div className="col">
            <div className="row row-cols-2 p-3"  style={{height: "86vh"}}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
                
  
            </div>
          </div>

          {/* pokemon */}
          <div className="col">
            <div className="App-header">column</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PokemonList;
