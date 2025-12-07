function drawTree(height: number, ornament: string, frequency: number): string {
  let tree = "";
  let ornamentCount = 0;
  for (let i = 1; i <= height; i++) {
    tree += " ".repeat(height - i);
    for (let j = 0; j < 2 * (i - 1) + 1; j++) {
      ornamentCount++;
      if (ornamentCount === frequency) {
        tree += ornament;
        ornamentCount = 0;
      } else {
        tree += "*";
      }
    }
    tree += "\n";
  }
  tree += " ".repeat(height - 1) + "#";
  return tree;
}

const tree1 = drawTree(5, "o", 2);
console.log(tree1);
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

const tree2 = drawTree(3, "@", 3);
console.log(tree2);
//   *
//  *@*
// *@**@
//   #

const tree3 = drawTree(4, "+", 1);
console.log(tree3);
//    +
//   +++
//  +++++
// +++++++
//    #

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 340
  ops: 4160
*/
