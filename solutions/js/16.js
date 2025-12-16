/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  let sleighs = 0;
  let remainWeight = 0;
  for (const gift of gifts) {
    if (gift > maxWeight) return null;
    if (gift > remainWeight) {
      sleighs++;
      remainWeight = maxWeight;
    }
    remainWeight -= gift;
  }
  return sleighs;
}

const pack1 = packGifts([2, 3, 4, 1], 5);
// 2 sleighs
// Sleigh 1: 2 + 3 = 5
// Sleigh 2: 4 + 1 = 5
console.log(pack1);

const pack2 = packGifts([3, 3, 2, 1], 3);
// 3 sleighs
// Sleigh 1: 3
// Sleigh 2: 3
// Sleigh 3: 2 + 1 = 3
console.log(pack2);

const pack3 = packGifts([1, 1, 1, 1], 2);
// 2 sleighs
// Sleigh 1: 1 + 1 = 2
// Sleigh 2: 1 + 1 = 2
console.log(pack3);

const pack4 = packGifts([5, 6, 1], 5);
// null
// There is a gift weighing 6 that doesn’t fit
console.log(pack4);

const pack5 = packGifts([], 10);
// 0 sleighs
// There are no gifts to deliver
console.log(pack5);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 360
  ops: 4225
*/
