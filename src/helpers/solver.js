const blockLookup = {
  1: [0, 1, 2],
  2: [3, 4, 5],
  3: [6, 7, 8]
};

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
  let block = Object.keys(blockLookup).find(key =>
    blockLookup[key].includes(row)
  );

  if (row < 3) {
    rowArr = gameState.slice(0, 3);
  } else if (row < 6) {
    rowArr = gameState.slice(3, 6);
  } else {
    rowArr = gameState.slice(6, 9);
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

      console.log(matchRow, matchCol);
    } else if (row % 3 === 1 || row === 1) {
      matchRow = row + 1;
      matchCol = rowArr[2].findIndex(el => el === val);
      console.log(matchRow, matchCol);
    }

    if (matchCol > 0) {
      find3rdVal(val, block, [row, col], [matchRow, matchCol]);
    }
  }
};

const find3rdVal = function(val, block, coords1, coords2) {
  console.log("val: ", val);
  console.log("coords1: ", coords1);
  console.log("coords2: ", coords2);
  console.log("block: ", block);
};
