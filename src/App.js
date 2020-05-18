import React, { useState } from "react";
import "./App.css";

function App() {
  const [poke, setPoke] = useState([]);

  const handlePoke = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((res) => setPoke(res.results));
  };

  return (
    <div className="App">
      <button className="Bttn" onClick={handlePoke}>
        Fletch Pokemon
      </button>
      <ul>
        {poke.length > 0 &&
          poke.map((pokemon, i) => {
            return (
              <li key={i}>
                <p>{pokemon.name}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
