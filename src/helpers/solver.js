import checkRows from "./rows";
let GLOBAL_GAME = [];

export default function solver(gameState, updateGameState) {
  let rowUpdated = false;
  GLOBAL_GAME = gameState;

  rowUpdated = loopRows();
  while (rowUpdated) {
    rowUpdated = loopRows();
  }

  console.log("END OF SOLVER");
  console.log(GLOBAL_GAME);
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
  console.log("row updated: ", result);
  return result;
};
