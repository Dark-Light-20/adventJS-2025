/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const mazeLength = maze.length;
  const rowLength = maze[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let santaPosition = [-1, -1];
  let exitPosition = [-1, -1];

  for (let i = 0; i < mazeLength; i++) {
    const santaCol = maze[i].indexOf("S");
    const exitCol = maze[i].indexOf("E");
    if (santaCol !== -1) santaPosition = [i, santaCol];
    if (exitCol !== -1) exitPosition = [i, exitCol];
  }

  const queue = [[santaPosition[0], santaPosition[1]]];
  const visited = new Set();
  visited.add(`${santaPosition[0]},${santaPosition[1]}`);

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === exitPosition[0] && y === exitPosition[1]) {
      return true;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < mazeLength &&
        newY >= 0 &&
        newY < rowLength &&
        maze[newX][newY] !== "#" &&
        !visited.has(`${newX},${newY}`)
      ) {
        visited.add(`${newX},${newY}`);
        queue.push([newX, newY]);
      }
    }
  }

  return false;
}

const escape1 = canEscape([
  ["S", ".", "#", "."],
  ["#", ".", "#", "."],
  [".", ".", ".", "."],
  ["#", "#", "#", "E"],
]);
// → true
console.log(escape1);

const escape2 = canEscape([
  ["S", "#", "#"],
  [".", "#", "."],
  [".", "#", "E"],
]);
// → false
console.log(escape2);

const escape3 = canEscape([["S", "E"]]);
// → true
console.log(escape3);

const escape4 = canEscape([
  ["S", ".", ".", ".", "."],
  ["#", "#", "#", "#", "."],
  [".", ".", ".", ".", "."],
  [".", "#", "#", "#", "#"],
  [".", ".", ".", ".", "E"],
]);
// → true
console.log(escape4);

const escape5 = canEscape([
  ["S", ".", "."],
  [".", ".", "."],
  ["#", "#", "#"],
  [".", ".", "E"],
]);
// → false
console.log(escape5);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 10
  ops: 2177
*/
