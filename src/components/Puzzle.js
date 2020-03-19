import React, { useState } from "react";

import "./Puzzle.css";
import Box from "./Box";

import solver from "../helpers/solver";

export default function Puzzle() {
  const [gameState, setGameState] = useState([
    ["", "", "", "", 1, 8, "", "", ""],
    ["", "", 5, "", 4, "", "", 1, ""],
    [1, 7, "", 2, "", 6, "", 3, ""],
    [8, "", 9, "", "", "", "", 7, ""],
    ["", "", 4, "", "", "", 2, "", ""],
    ["", 6, "", "", "", "", 1, "", 5],
    ["", 5, "", 9, "", 2, "", 6, 4],
    ["", 4, "", "", 7, "", 5, "", ""],
    ["", "", "", 4, 3, "", "", "", ""]
  ]);

  const updateGame = function(row, column, value) {
    const updatedState = gameState.map((subarray, i) => {
      return subarray.map((el, j) => {
        if (i === row && j === column) {
          return Number(value);
        } else {
          return el;
        }
      });
    });

    setGameState(updatedState);
  };

  return (
    <>
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
      <button
        className="solve-button"
        onClick={() => solver(gameState, updateGame)}
      >
        Solve
      </button>
    </>
  );
}
