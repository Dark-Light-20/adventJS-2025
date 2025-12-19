function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  const rowLength = warehouse[0].length;
  for (const drop of drops) {
    const column = warehouse.map((row) => row[drop]);
    let lastColumnIndex = column.lastIndexOf(".");
    if (lastColumnIndex !== -1) warehouse[lastColumnIndex][drop] = "#";
    const rowToRemove = warehouse.findIndex((row) => !row.includes("."));
    if (rowToRemove > -1) {
      warehouse.splice(rowToRemove, 1);
      warehouse.unshift(
        Array.from({ length: rowLength }).fill(".") as string[]
      );
    }
  }
  return warehouse;
}

const clear1 = clearGifts(
  [
    [".", ".", "."],
    [".", ".", "."],
    ["#", ".", "#"],
  ],
  [1]
);
/*
1. The gift falls in column 1
2. Row 2 becomes [# # #].
3. Row 2 is complete, the robot clears it.
6. A new empty row is added at position 0.

Result:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/
console.log(clear1);

const clear2 = clearGifts(
  [
    [".", ".", "#"],
    ["#", ".", "#"],
    ["#", ".", "#"],
  ],
  [0, 1, 2]
);

/*
1. The gift falls in column 0
2. The gift falls in column 1
3. Row 2 becomes [# # #]
4. Row 2 is complete, the robot clears it

For now it looks like this:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. The gift falls in column 2

Result:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/
console.log(clear2);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 230
  ops: 2815
*/
