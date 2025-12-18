/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  for (const row of board) {
    const line = row.join("");
    if (line.includes("RRRR") || line.includes("GGGG")) {
      return true;
    }
  }
  const horizontalLength = board[0].length;
  for (let i = 0; i < horizontalLength; i++) {
    const line = board.reduce((curr, row) => {
      return curr.concat(row[i]);
    }, "");
    if (line.includes("RRRR") || line.includes("GGGG")) {
      return true;
    }
  }
  return false;
}

const has1 = hasFourLights([
  [".", ".", ".", ".", "."],
  ["R", "R", "R", "R", "."],
  ["G", "G", ".", ".", "."],
]);
// true → there are 4 red lights horizontally
console.log(has1);

const has2 = hasFourLights([
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
]);
// true → there are 4 green lights vertically
console.log(has2);

const has3 = hasFourLights([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]);
// false → there are no 4 lights of the same color in a row
console.log(has3);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 200
  ops: 3040
*/
