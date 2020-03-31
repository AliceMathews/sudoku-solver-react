import updateGame from "./updateGame";

const blockLookup = {
  1: [0, 1, 2],
  2: [3, 4, 5],
  3: [6, 7, 8]
};

export default function checkBoxes(rows, cols, game) {
  let missingVals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const foundVals = [];

  for (const row of rows) {
    for (const col of cols) {
      if (game[row][col] !== "") {
        foundVals.push(game[row][col]);
      }
    }
  }
  console.log(foundVals);
  missingVals = missingVals.filter(val => !foundVals.includes(val));
  console.log(missingVals);
}
