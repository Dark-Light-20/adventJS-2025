function drawGift(size: number, symbol: string): string {
  if (size < 2) return "";
  let box = "";
  box += symbol.repeat(size) + "\n";
  for (let i = 1; i < size - 1; i++) {
    box += symbol + " ".repeat(size - 2) + symbol + "\n";
  }
  box += symbol.repeat(size);
  return box;
}

const g1 = drawGift(4, "*");
console.log(g1);
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, "#");
console.log(g2);
/*
###
# #
###
*/

const g3 = drawGift(2, "-");
console.log(g3);
/*
--
--
*/

const g4 = drawGift(1, "+");
console.log(g4);
// ""  poor intern…

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 360
  ops: 4275
*/
