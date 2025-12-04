/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  let result = "";
  let number = 0;

  for (const item of code) {
    switch (item) {
      case "+": {
        const transformed = number + 1;
        number = transformed === 10 ? 0 : transformed;
        break;
      }
      case "-": {
        const transformed = number - 1;
        number = transformed === -1 ? 9 : transformed;
        break;
      }
      case "<":
        number = Number.parseInt(result.at(-1));
        break;
      case "]":
        result += number;
        break;
      default:
        number = Number.parseInt(item);
    }
  }

  return result.length < 4 ? null : result;
}

const decode1 = decodeSantaPin("[1++][2-][3+][<]");
console.log(decode1);
// "3144"

const decode2 = decodeSantaPin("[9+][0-][4][<]");
console.log(decode2);
// "0944"

const decode3 = decodeSantaPin("[1+][2-]");
console.log(decode3);
// null (only 2 digits)

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 270
  ops: 4037
*/
