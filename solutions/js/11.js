/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let unsafeCount = 0;
  for (let i = 0; i < warehouse.length; i++) {
    const row = warehouse[i];
    for (let j = 0; j < row.length; j++) {
      const item = warehouse[i][j];
      if (item !== "*") continue;
      const upperItem = warehouse[i - 1]?.[j];
      const bottomItem = warehouse[i + 1]?.[j];
      const leftItem = warehouse[i][j - 1];
      const rightItem = warehouse[i][j + 1];
      const validateArray = [upperItem, bottomItem, leftItem, rightItem];
      if (!validateArray.includes("#")) unsafeCount++;
    }
  }
  return unsafeCount;
}

const unsafe1 = findUnsafeGifts([".*.", "*#*", ".*."]); // ➞ 0
// All the presents are next to a camera
console.log(unsafe1);

const unsafe2 = findUnsafeGifts(["...", ".*.", "..."]); // ➞ 1
// This present has no cameras around it
console.log(unsafe2);

const unsafe3 = findUnsafeGifts(["*.*", "...", "*#*"]); // ➞ 2
// The presents in the top corners have no cameras around them
console.log(unsafe3);

const unsafe4 = findUnsafeGifts([".....", ".*.*.", "..#..", ".*.*.", "....."]); // ➞ 4
// The four presents have no cameras, because they are diagonal to the camera
console.log(unsafe4);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 230
  ops: 3018
*/
