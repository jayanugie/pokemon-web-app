import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css'

function PokemonList() {
  return (
    <div className="background">
      <Navbar />
        
      <Footer />
    </div>
  );
}

export default PokemonList;
