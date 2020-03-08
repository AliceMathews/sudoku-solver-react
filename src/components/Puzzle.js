import React, { useState } from "react";

import "./Puzzle.css";
import Box from "./Box";

export default function Puzzle() {
  const [gameState, setGameState] = useState([
    ["", "", "", "", "", "", "", "", ""],
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
      <Box id={[0, 0]} addValue={updateGame} />
      <Box id={[0, 1]} addValue={updateGame} />
      <Box id={[0, 2]} addValue={updateGame} />
      <Box id={[1, 0]} addValue={updateGame} />
      <Box id={[1, 1]} addValue={updateGame} />
      <Box id={[1, 2]} addValue={updateGame} />
      <Box id={[2, 0]} addValue={updateGame} />
      <Box id={[2, 1]} addValue={updateGame} />
      <Box id={[2, 2]} addValue={updateGame} />
    </div>
  );
}
