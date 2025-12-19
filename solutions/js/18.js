/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const regex = /([GR])\1{3}/;
  const rowsLength = board.length;
  const colsLength = board[0].length;

  // Directions: right, down, down-right, down-left
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (let i = 0; i < rowsLength; i++) {
    for (let j = 0; j < colsLength; j++) {
      for (const [di, dj] of directions) {
        const endI = i + 3 * di;
        const endJ = j + 3 * dj;
        if (endI < 0 || endI >= rowsLength || endJ < 0 || endJ >= colsLength)
          continue;
        let parts = "";
        for (let k = 0; k < 4; k++) {
          const ni = i + k * di;
          const nj = j + k * dj;
          parts += board[ni][nj];
        }
        if (regex.test(parts)) return true;
      }
    }
  }
  return false;
}

const hasRow1 = hasFourInARow([
  ["R", ".", ".", "."],
  [".", "R", ".", "."],
  [".", ".", "R", "."],
  [".", ".", ".", "R"],
]);
// true → there are 4 red lights in a ↘ diagonal
console.log(hasRow1);

const hasRow2 = hasFourInARow([
  [".", ".", ".", "G"],
  [".", ".", "G", "."],
  [".", "G", ".", "."],
  ["G", ".", ".", "."],
]);
// true → there are 4 green lights in a ↙ diagonal
console.log(hasRow2);

const hasRow3 = hasFourInARow([
  ["R", "R", "R", "R"],
  ["G", "G", ".", "."],
  [".", ".", ".", "."],
  [".", ".", ".", "."],
]);
// true → there are 4 red lights in a horizontal line
console.log(hasRow3);

const hasRow4 = hasFourInARow([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]);
// false → there are no 4 consecutive lights of the same color
console.log(hasRow4);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 170
  ops: 3117
*/
