import updateGame from "./updateGame";

const blockLookup = {
  1: [0, 1, 2],
  2: [3, 4, 5],
  3: [6, 7, 8]
};

export default function checkCols(row, col, val, game) {
  let colArr = [];
  let block = Object.keys(blockLookup).find(key =>
    blockLookup[key].includes(col)
  );

  if (col < 3) {
    colArr = game.map(row => row.slice(0, 3));
  } else if (col < 6) {
    colArr = game.map(row => row.slice(3, 6));
  } else {
    colArr = game.map(row => row.slice(6, 9));
  }

  const numOfOccurances = colArr.reduce((total, currentVal) => {
    if (currentVal.includes(val)) {
      return total + 1;
    } else return total;
  }, 0);

  console.log("val: ", val, "num Occur: ", numOfOccurances);

  if (numOfOccurances === 2) {
    let matchRow = undefined;
    let matchCol = undefined;

    if (col % 3 === 0) {
      for (const [i, row] of colArr.entries()) {
        if (row[1] === val) {
          matchRow = i;
          matchCol = col + 1;
        } else if (row[2] === val) {
          matchRow = i;
          matchCol = col + 2;
        }
      }
    } else if (col % 3 === 1 || col === 1) {
      matchCol = col + 1;

      for (const [i, row] of colArr.entries()) {
        if (row[2] === val) {
          matchRow = i;
        }
      }
    }
    console.log("match row: ", matchRow, "match col: ", matchCol);

    if (matchCol && matchRow) {
      return find3rdVal(val, block, [row, col], [matchRow, matchCol], game);
    }
  }
}

const find3rdVal = function(val, block, coords1, coords2, game) {
  console.log("val: ", val);
  console.log("coords1: ", coords1);
  console.log("coords2: ", coords2);
  console.log("block: ", block);

  const missingCol = blockLookup[block].find(
    el => el !== coords1[1] && el !== coords2[1]
  );

  const missingRowBlock = Object.keys(blockLookup).find(
    key =>
      !blockLookup[key].includes(coords1[0]) &&
      !blockLookup[key].includes(coords2[0])
  );

  let potentialRows = blockLookup[missingRowBlock];
  console.log("potential rows", potentialRows);
};
