import updateGame from "./updateGame";

export default function checkBoxes(rows, cols, game) {
  let missingVals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const foundVals = [];

  let boxArr = game.slice(rows[0], rows[2] + 1);
  boxArr = boxArr.map(row => row.slice(cols[0], cols[2] + 1));
  const cellPotentialVals = [];

  let gameUpdated = false;

  for (const row of rows) {
    for (const col of cols) {
      if (game[row][col] !== "") {
        foundVals.push(game[row][col]);
      }
    }
  }

  missingVals = missingVals.filter(val => !foundVals.includes(val));

  for (const [i, row] of rows.entries()) {
    for (const [j, col] of cols.entries()) {
      if (game[row][col] === "") {
        let result = false;
        const potentialVals = findPossibleVals(row, col, missingVals, game);

        cellPotentialVals.push({ row, col, potentialVals });
        boxArr[i][j] = potentialVals;
        console.log("box: ", cellPotentialVals);

        // game2[row][col] = potentialVals;

        if (potentialVals.length === 1) {
          const updatedGame = updateGame(row, col, potentialVals[0], game);
          game = updatedGame;
          console.log("updated game: ", updatedGame);
          gameUpdated = { updatedGame };
        }
      }
    }
  }

  missingVals.forEach(val => {});

  return gameUpdated;
}

const findPossibleVals = function(row, col, missingVals, game) {
  let potentialVals = [...missingVals];

  console.log("row: ", row, "col: ", col, "pot vals", potentialVals);

  //filter for value in row
  potentialVals = potentialVals.filter(val => !game[row].includes(val));

  //filter for value in col
  potentialVals = potentialVals.filter(val => {
    let valFound = false;
    for (let row = 0; row < 9; row++) {
      if (game[row][col] === val) {
        valFound = true;
      }
    }
    if (!valFound) return val;

    return undefined;
  });

  console.log("pot vals: ", potentialVals);
  return potentialVals;

  if (potentialVals.length === 1) {
    const updatedGame = updateGame(row, col, potentialVals[0], game);
    console.log("updated game: ", updatedGame);
    return { updatedGame };
  } else {
    return false;
  }

  // console.log("pot vals: ", potentialVals);

  // missingVals.forEach(val => {
  //   //check rows
  //   if (game[row].includes(val) || )
  // });
  // let boxArr = game.slice(rows[0], rows[2] + 1);
  // boxArr = boxArr.map(row => row.slice(cols[0], cols[2] + 1));

  // for (const row of boxArr) {
  //   for (const cell of row) {
  //     if (cell === "") {
  //       missingVals.forEach(val => {

  //       })
  //     }
  //   }
  // }
};
