import React from "react";
import "./App.css";

import Puzzle from "./components/Puzzle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sudoku Solver</p>
        <Puzzle />
      </header>
    </div>
  );
}

export default App;
