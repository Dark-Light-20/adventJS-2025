function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  for (const drop of drops) {
    const column = warehouse.map((row) => row[drop]);
    let lastColumnIndex = column.lastIndexOf(".");
    if (lastColumnIndex !== -1) warehouse[lastColumnIndex][drop] = "#";
  }
  return warehouse;
}

const drop1 = dropGifts(
  [
    [".", ".", "."],
    [".", "#", "."],
    ["#", "#", "."],
  ],
  [0]
);
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/
console.log(drop1);

const drop2 = dropGifts(
  [
    [".", ".", "."],
    ["#", "#", "."],
    ["#", "#", "#"],
  ],
  [0, 2]
);
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/
console.log(drop2);

const drop3 = dropGifts(
  [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ],
  [0, 1, 2]
);
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/
console.log(drop3);

const drop4 = dropGifts(
  [
    ["#", "#"],
    ["#", "#"],
  ],
  [0, 0]
);
/*
[
  ['#', '#']
  ['#', '#']
]
*/
console.log(drop4);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 260
  ops: 2670
*/
