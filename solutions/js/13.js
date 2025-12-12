/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  let posX = 0;
  let posY = 0;
  const visitedPositions = new Set(`${posY}${posX}`);
  let actualMovement = factory[posY][posX];
  while (actualMovement !== undefined) {
    switch (actualMovement) {
      case ">":
        posX++;
        break;
      case "<":
        posX--;
        break;
      case "^":
        posY--;
        break;
      case "v":
        posY++;
        break;
    }
    actualMovement = factory[posY]?.[posX];
    if (actualMovement === ".") return "completed";
    const position = `${posY}${posX}`;
    if (visitedPositions.has(position)) return "loop";
    visitedPositions.add(position);
  }
  return "broken";
}

const factory1 = runFactory([">>."]); // 'completed'
console.log(factory1);

const factory2 = runFactory([">>>"]); // 'broken'
console.log(factory2);

const factory3 = runFactory([">><"]); // 'loop'
console.log(factory3);

const factory4 = runFactory([">>v", "..<"]); // 'completed'
console.log(factory4);

const factory5 = runFactory([">>v", "<<<"]); // 'broken'
console.log(factory5);

const factory6 = runFactory([">v.", "^.."]); // 'completed'
console.log(factory6);

const factory7 = runFactory(["v.", "^."]); // 'loop'
console.log(factory7);

// TODO: Validate
/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 10??? 
  ops: 1???
*/
