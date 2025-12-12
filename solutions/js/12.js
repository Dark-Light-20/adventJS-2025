/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let elf1Health = 3;
  let elf2Health = 3;
  for (let i = 0; i < elf1.length; i++) {
    const elf1Move = elf1[i];
    const elf2Move = elf2[i];
    elf2Health -=
      (elf1Move === "A" && elf2Move !== "B") + (elf1Move === "F") * 2;
    elf1Health -=
      (elf2Move === "A" && elf1Move !== "B") + (elf2Move === "F") * 2;
    if (elf1Health <= 0 || elf2Health <= 0) break;
  }
  if (elf1Health > elf2Health) return 1;
  else if (elf2Health > elf1Health) return 2;
  return 0;
}

const battle1 = elfBattle("A", "B");
// Round 1: A vs B -> Elf 2 blocks
// Result: Elf 1 = 3 HP
//         Elf 2 = 3 HP
// → 0
console.log(battle1);

const battle2 = elfBattle("F", "B");
// Round 1: F vs B -> Elf 2 takes 2 damage (F cannot be blocked)
// Result: Elf 1 = 3 HP
//         Elf 2 = 1 HP
// → 1
console.log(battle2);

const battle3 = elfBattle("AAB", "BBA");
// R1: A vs B → Elf 2 blocks
// R2: A vs B → Elf 2 blocks
// R3: B vs A → Elf 1 blocks
// Result: Elf 1 = 3, Elf 2 = 3
// → 0
console.log(battle3);

const battle4 = elfBattle("AFA", "BBA");
// R1: A vs B → Elf 2 blocks
// R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
// R3: A vs A → both -1
// Result: Elf 1 = 2, Elf 2 = 0
// → 1
console.log(battle4);

const battle5 = elfBattle("AFAB", "BBAF");
// R1: A vs B → Elf 2 blocks
// R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
// R3: A vs A → both -1 → Elf 2 reaches 0 Battle ends!
// R4: is not played, since Elf 2 has no health left
// → 1
console.log(battle5);

const battle6 = elfBattle("AA", "FF");
// R1: A vs F → Elf 1 -2, Elf 2 -1
// R2: A vs F → Elf 1 -2, Elf 2 -1 → Elf 1 reaches -1
// → 2
console.log(battle6);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 280
  ops: 4123
*/
