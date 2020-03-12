import React, { useState } from "react";

import "./Puzzle.css";
import Box from "./Box";

export default function Puzzle() {
  const [gameState, setGameState] = useState([
    [1, "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]
  ]);

  const updateGame = function(row, column, value) {
    // setGameState(prevGameState => [...gameState, ])
  };

  return (
    <div className="container">
      <Box id={[0, 0]} values={gameState} addValue={updateGame} />
      <Box id={[0, 1]} values={gameState} addValue={updateGame} />
      <Box id={[0, 2]} values={gameState} addValue={updateGame} />
      <Box id={[1, 0]} values={gameState} addValue={updateGame} />
      <Box id={[1, 1]} values={gameState} addValue={updateGame} />
      <Box id={[1, 2]} values={gameState} addValue={updateGame} />
      <Box id={[2, 0]} values={gameState} addValue={updateGame} />
      <Box id={[2, 1]} values={gameState} addValue={updateGame} />
      <Box id={[2, 2]} values={gameState} addValue={updateGame} />
    </div>
  );
}
