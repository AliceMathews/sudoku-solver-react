export function loopRows(gameArray) {
  for (let [row, arr] of gameArray.entries()) {
    for (let [column, value] of arr.entries()) {
      if (value !== "") {
        // checkRows(row, column, value);
        console.log("check");
      }
    }
  }
}
