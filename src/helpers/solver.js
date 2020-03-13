export default function solver(gameState) {
  loopRows(gameState);
}

const loopRows = function(gameState) {
  for (let [row, arr] of gameState.entries()) {
    for (let [col, val] of arr.entries()) {
      if (val !== "") {
        checkRows(row, col, val, gameState);
      }
    }
  }
};

const checkRows = function(row, col, val, gameState) {
  let rowArr = [];
  if (row < 3) {
    rowArr = gameState.slice(0, 3);
  } else if (row < 6) {
    rowArr = gameState.slice(3, 6);
  } else {
    rowArr = gameState.slice(6, 9);
  }

  console.log(rowArr);
};
