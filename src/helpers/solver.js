import checkRows from "./rows";
import checkCols from "./cols";
let GLOBAL_GAME = [];

export default function solver(gameState, updateGameState) {
  let rowUpdated = false;
  let colUpdated = false;
  GLOBAL_GAME = gameState;

  rowUpdated = loopRows();
  colUpdated = loopColumns();

  while (rowUpdated || colUpdated) {
    rowUpdated = loopRows();
    colUpdated = loopColumns();
    console.log("row updated: ", rowUpdated);
    console.log("col updated: ", colUpdated);
    console.log("-----------------");
  }

  let solved = true;

  for (const row of GLOBAL_GAME) {
    if (row.includes("")) {
      solved = false;
    }
  }

  if (solved) {
    console.log("SOLVED!!!!");
  } else {
    console.log("END OF SOLVER - I'M NOT SMART ENOUGH YET");
  }

  //update state
  for (const [i, row] of GLOBAL_GAME.entries()) {
    for (const [j] of row.entries()) {
      if (GLOBAL_GAME[i][j]) {
        updateGameState(i, j, GLOBAL_GAME[i][j]);
      }
    }
  }
}

const loopRows = function() {
  let result = false;
  for (let [row, arr] of GLOBAL_GAME.entries()) {
    for (let [col, val] of arr.entries()) {
      if (val !== "") {
        result = checkRows(row, col, val, GLOBAL_GAME) || result; //if rowupdated is ever true it maintains this value
        if (result) {
          GLOBAL_GAME = result.updatedGame;
        }
      }
    }
  }

  return result;
};

const loopColumns = function() {
  let result = false;

  for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 9; row++) {
      if (GLOBAL_GAME[row][col] !== "") {
        result =
          checkCols(row, col, GLOBAL_GAME[row][col], GLOBAL_GAME) || result;
        //if rowupdated is ever true it maintains this value
        if (result) {
          GLOBAL_GAME = result.updatedGame;
        }
      }
    }
  }

  return result;
};
