function minStepsToDeliver(map: string[][]): number {
  const rows = map.length;
  const cols = map[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let start = null;
  const gifts = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (map[row][col] === "S") start = [row, col];
      if (map[row][col] === "G") gifts.push([row, col]);
    }
  }

  if (!start) return -1;

  const dist = Array.from({ length: rows }, () => new Array(cols).fill(-1));
  const queue: number[][] = [];
  dist[start[0]][start[1]] = 0;
  queue.push(start);

  while (queue.length > 0) {
    const [x, y] = queue.shift()!;
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (
        newX >= 0 &&
        newX < rows &&
        newY >= 0 &&
        newY < cols &&
        map[newX][newY] !== "#" &&
        dist[newX][newY] === -1
      ) {
        dist[newX][newY] = dist[x][y] + 1;
        queue.push([newX, newY]);
      }
    }
  }

  let total = 0;
  for (const [giftRow, giftCol] of gifts) {
    const distance = dist[giftRow][giftCol];
    if (distance === -1) return -1;
    total += distance;
  }

  return gifts.length === 0 ? -1 : total;
}

const deliver1 = minStepsToDeliver([
  ["S", ".", "G"],
  [".", "#", "."],
  ["G", ".", "."],
]);
// Result: 4
console.log(deliver1);

/* 
Explanation:
- Minimum distance from S (0,0) to G (0,2): 2 steps
- Minimum distance from S (0,0) to G (2,0): 2 steps
- Total: 2 + 2 = 4
*/

const deliver2 = minStepsToDeliver([
  ["S", "#", "G"],
  ["#", "#", "."],
  ["G", ".", "."],
]);
// Result: -1
// (The house at (0,2) is unreachable due to obstacles)
console.log(deliver2);

const deliver3 = minStepsToDeliver([["S", "G"]]);
// Result: 1
console.log(deliver3);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 10
  ops: 1237
*/
