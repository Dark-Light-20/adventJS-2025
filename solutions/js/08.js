/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  const count = new Map();
  for (const letter of toy) {
    const key = letter.toLowerCase();
    count.set(
      key,
      count.get(key)
        ? {
            count: count.get(key).count + 1,
            letter: count.get(key).letter,
          }
        : { count: 1, letter }
    );
  }
  const unique =
    count.values().find(({ count }) => {
      return count === 1;
    })?.letter ?? "";
  return unique;
}

const unique1 = findUniqueToy("Gift"); // 'G'
console.log(unique1);
// ℹ️ The G is the first letter that is not repeated
// and we return it exactly as it appears

const unique2 = findUniqueToy("sS"); // ''
console.log(unique2);
// ℹ️ The letters are repeated, since it doesn't distinguish uppercase

const unique3 = findUniqueToy("reindeeR"); // 'i'
console.log(unique3);
// ℹ️ The r is repeated (even if it's uppercase)
// and the e as well, so the first one is 'i'

// More cases:
const unique4 = findUniqueToy("AaBbCc"); // ''
console.log(unique4);

const unique5 = findUniqueToy("abcDEF"); // 'a'
console.log(unique5);

const unique6 = findUniqueToy("aAaAaAF"); // 'F'
console.log(unique6);

const unique7 = findUniqueToy("sTreSS"); // 'T'
console.log(unique7);

const unique8 = findUniqueToy("z"); // 'z'
console.log(unique8);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 340
  ops: 3725
*/
