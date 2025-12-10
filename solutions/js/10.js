/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  const stash = [];
  let maxValue = 0;
  for (const char of s) {
    if (char === "[") {
      stash.push(char);
      maxValue = Math.max(maxValue, stash.length);
    } else if (!stash.pop()) {
      return -1;
    }
  }
  return stash.length > 0 ? -1 : maxValue;
}

const depth1 = maxDepth("[]"); // -> 1
console.log(depth1);

const depth2 = maxDepth("[[]]"); // -> 2
console.log(depth2);

const depth3 = maxDepth("[][]"); // -> 1
console.log(depth3);

const depth4 = maxDepth("[[][]]"); // -> 2
console.log(depth4);

const depth5 = maxDepth("[[[]]]"); // -> 3
console.log(depth5);

const depth6 = maxDepth("[][[]][]"); // -> 2
console.log(depth6);

const depth7 = maxDepth("]["); // -> -1 (closes before opening)
console.log(depth7);

const depth8 = maxDepth("[[["); // -> -1 (missing closing brackets)
console.log(depth8);

const depth9 = maxDepth("[]]]"); // -> -1 (extra closing brackets)
console.log(depth9);

const depth10 = maxDepth("[][]["); // -> -1 (one remains unclosed)
console.log(depth10);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 140
  ops: 2155
*/
