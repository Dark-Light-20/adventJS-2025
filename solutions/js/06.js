/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const matches = {};
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

const gloves = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];
const resultGloves1 = matchGloves(gloves);
console.log(resultGloves1);
// ["red", "green"]

const gloves2 = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];
const resultGloves2 = matchGloves(gloves2);
console.log(resultGloves2);
// ["gold", "gold"]

const gloves3 = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];
const resultGloves3 = matchGloves(gloves3);
console.log(resultGloves3);
// []

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 190
  ops: 1946
*/
