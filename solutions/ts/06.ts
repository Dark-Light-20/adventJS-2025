type Glove = { hand: "L" | "R"; color: string };

function matchGloves(gloves: Glove[]): string[] {
  const matches: { [key: string]: { L: number; R: number } } = {};
  for (const glove of gloves) {
    matches[glove.color] ??= { L: 0, R: 0 };
    matches[glove.color][glove.hand]++;
  }
  const result = [];
  for (const [color, counts] of Object.entries(matches)) {
    result.push(...new Array(Math.min(counts.L, counts.R)).fill(color));
  }
  return result;
}

const gloves: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];
const resultGloves1 = matchGloves(gloves);
console.log(resultGloves1);
// ["red", "green"]

const gloves2: Glove[] = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];
const resultGloves2 = matchGloves(gloves2);
console.log(resultGloves2);
// ["gold", "gold"]

const gloves3: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];
const resultGloves3 = matchGloves(gloves3);
console.log(resultGloves3);
// []

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 290
  ops: 2515
*/
