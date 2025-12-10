/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const boardArray = board.split("\n").slice(1, -1);
  let rowIndex = boardArray.findIndex((row) => row.includes("@"));
  let colIndex = boardArray[rowIndex].indexOf("@");
  const movements = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  for (const move of moves) {
    rowIndex += movements[move][0];
    colIndex += movements[move][1];
    const position = boardArray[rowIndex]?.[colIndex];
    if (position === "*") {
      return "success";
    } else if (!position || position === "#") {
      return "crash";
    }
  }
  return "fail";
}

const board = `
.....
.*#.*
.@...
.....
`;

const reno1 = moveReno(board, "D");
console.log(reno1);
// ➞ 'fail' -> it moves but doesn't pick anything up

const reno2 = moveReno(board, "U");
console.log(reno2);
// ➞ 'success' -> it picks something up (*) right above

const reno3 = moveReno(board, "RU");
console.log(reno3);
// ➞ 'crash' -> it crashes into an obstacle (#)

const reno4 = moveReno(board, "RRRUU");
console.log(reno4);
// ➞ 'success' -> it picks something up (*)

const reno5 = moveReno(board, "DD");
console.log(reno5);
// ➞ 'crash' -> it crashes into the bottom of the board

const reno6 = moveReno(board, "UUU");
console.log(reno6);
// ➞ 'success' -> it picks something up off the floor (*) and then crashes at the top

const reno7 = moveReno(board, "RR");
console.log(reno7);
// ➞ 'fail' -> it moves but doesn't pick anything up

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 330
  ops: 3707
*/
