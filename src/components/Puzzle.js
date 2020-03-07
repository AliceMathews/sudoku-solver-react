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

  return (
    <div className="container">
      <Box id={[0, 0]} addValue={setGameState} />
      <Box id={[0, 1]} addValue={setGameState} />
      <Box id={[0, 2]} addValue={setGameState} />
      <Box id={[1, 0]} addValue={setGameState} />
      <Box id={[1, 1]} addValue={setGameState} />
      <Box id={[1, 2]} addValue={setGameState} />
      <Box id={[2, 0]} addValue={setGameState} />
      <Box id={[2, 1]} addValue={setGameState} />
      <Box id={[2, 2]} addValue={setGameState} />
    </div>
  );
}
