function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  return giftsToProduce
    .filter((order) => order.quantity > 0)
    .reduce((gifts, order) => {
      return gifts.concat(new Array(order.quantity).fill(order.toy));
    }, [] as string[]);
}

const production1 = [
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 },
];

const result1 = manufactureGifts(production1);
console.log(result1);
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: "train", quantity: 0 }, // not manufactured
  { toy: "bear", quantity: -2 }, // neither
  { toy: "puzzle", quantity: 1 },
];

const result2 = manufactureGifts(production2);
console.log(result2);
// ['puzzle']

const production3: Array<{ toy: string; quantity: number }> = [];
const result3 = manufactureGifts(production3);
console.log(result3);
// []

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 160
  ops: 1695
*/
