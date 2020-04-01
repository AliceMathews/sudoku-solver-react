import updateGame from "./updateGame";

export default function checkBoxes(rows, cols, game) {
  let missingVals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const foundVals = [];

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

  for (const row of rows) {
    for (const col of cols) {
      if (game[row][col] === "") {
        const potentialVals = findPossibleVals(row, col, missingVals, game);

        cellPotentialVals.push({ row, col, potentialVals });

        if (potentialVals.length === 1) {
          const updatedGame = updateGame(row, col, potentialVals[0], game);
          game = updatedGame;
          gameUpdated = { updatedGame };
        }
      }
    }
  }

  //check # of occurances for each missing value. if one then set that value
  missingVals.forEach(val => {
    const valOccurances = cellPotentialVals.filter(cell =>
      cell.potentialVals.includes(val)
    );
    if (valOccurances.length === 1) {
      const updatedGame = updateGame(
        valOccurances[0].row,
        valOccurances[0].col,
        val,
        game
      );
      game = updatedGame;

      gameUpdated = { updatedGame };
    }
  });

  return gameUpdated;
}

const findPossibleVals = function(row, col, missingVals, game) {
  let potentialVals = [...missingVals];

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

  return potentialVals;
};
