const blockLookup = {
  1: [0, 1, 2],
  2: [3, 4, 5],
  3: [6, 7, 8]
};

let game = [];

export default function solver(gameState, updateGameState) {
  let rowUpdated = false;
  game = gameState;
  console.log("GAME: ", game);
  rowUpdated = loopRows();

  while (rowUpdated) {
    rowUpdated = loopRows(gameState, updateGame);
  }
  // if (rowUpdated) {
  //   console.log("running again");
  //   rowUpdated = loopRows();
  // }

  // if (rowUpdated) {
  //   console.log("running again");
  //   rowUpdated = loopRows();
  // }
  console.log("clear");
}

const updateGame = function(row, column, value) {
  console.log("prevGame", game);

  const updatedGame = game.map((subarray, i) => {
    return subarray.map((el, j) => {
      if (i === row && j === column) {
        return Number(value);
      } else {
        return el;
      }
    });
  });
  game = updatedGame;
  console.log(game);
};

const loopRows = function() {
  let rowUpdated = false;
  for (let [row, arr] of game.entries()) {
    for (let [col, val] of arr.entries()) {
      if (val !== "") {
        rowUpdated = checkRows(row, col, val) || rowUpdated; //if rowupdated is ever true it maintains this value
      }
    }
  }
  console.log("row updated: ", rowUpdated);
  return rowUpdated;
};

const checkRows = function(row, col, val) {
  let rowArr = [];
  let block = Object.keys(blockLookup).find(key =>
    blockLookup[key].includes(row)
  );

  if (row < 3) {
    rowArr = game.slice(0, 3);
  } else if (row < 6) {
    rowArr = game.slice(3, 6);
  } else {
    rowArr = game.slice(6, 9);
  }

  const numOfOccurances = rowArr.reduce((total, currentVal) => {
    if (currentVal.includes(val)) {
      return total + 1;
    } else return total;
  }, 0);

  if (numOfOccurances === 2) {
    let matchRow = undefined;
    let matchCol = undefined;

    if (row % 3 === 0) {
      if (rowArr[1].includes(val)) {
        matchRow = row + 1;
        matchCol = rowArr[1].findIndex(el => el === val);
      } else {
        matchRow = row + 2;
        matchCol = rowArr[2].findIndex(el => el === val);
      }
    } else if (row % 3 === 1 || row === 1) {
      matchRow = row + 1;
      matchCol = rowArr[2].findIndex(el => el === val);
    }

    if (matchCol > 0) {
      return find3rdVal(val, block, [row, col], [matchRow, matchCol]);
    }
  }
};

const find3rdVal = function(val, block, coords1, coords2) {
  console.log("val: ", val);
  console.log("coords1: ", coords1);
  console.log("coords2: ", coords2);
  console.log("block: ", block);

  const missingRow = blockLookup[block].find(
    el => el !== coords1[0] && el !== coords2[0]
  );

  const missingColBlock = Object.keys(blockLookup).find(
    key =>
      !blockLookup[key].includes(coords1[1]) &&
      !blockLookup[key].includes(coords2[1])
  );

  let potentialCols = blockLookup[missingColBlock];
  console.log("pot cols 1", potentialCols);

  //filter out any cells that are already filled
  potentialCols = potentialCols.filter(col => game[missingRow][col] === "");
  console.log("pot cols 2", potentialCols);

  //filter out any cells that the cols already contain the val
  potentialCols = potentialCols.filter(col => {
    let valFound = 0;
    for (let i = 0; i < 9; i++) {
      if (game[i][col] === val) {
        valFound = 1;
      }
    }
    if (valFound === 0) return String(col); //convert to string to deal with bug where if col is 0, you get an empty array
    return undefined;
  });
  console.log("pot cols 3", potentialCols);

  if (potentialCols.length === 1) {
    const missingCol = potentialCols[0];
    console.log("missing col: ", missingCol);
    console.log("missing row: ", missingRow);
    updateGame(missingRow, missingCol, val);
    return true; //updates the rowUpdated value
  }
};
