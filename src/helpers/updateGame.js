export default function updateGame(row, column, value, game) {
  const updatedGame = game.map((subarray, i) => {
    return subarray.map((el, j) => {
      if (i === row && j === column) {
        return Number(value);
      } else {
        return el;
      }
    });
  });
  return updatedGame;
}
