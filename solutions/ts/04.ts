function decodeSantaPin(code: string): string | null {
  let result = "";

  const digits = Array.from(code.matchAll(/\[([\d+\-<]+)\]/g), (m) => m[1]);
  digits.forEach((expression) => {
    const base = expression[0];
    let value = 0;
    if (base === "<") {
      value = Number.parseInt(result.at(-1)!);
    } else {
      const baseNumber = Number.parseInt(base);
      value = expression
        .slice(1)
        .split("")
        .reduce((acc: number, item: string) => {
          if (item === "+") {
            const transformed = acc + 1;
            return transformed === 10 ? 0 : transformed;
          } else {
            const transformed = acc - 1;
            return transformed === -1 ? 9 : transformed;
          }
        }, baseNumber);
    }
    result += value;
  });

  return result.length === 4 ? result : null;
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
  Points: 170
  ops: 3276
*/
