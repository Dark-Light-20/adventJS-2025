function execute(code: string): number {
  let v = 0,
    i = 0;

  const actions: { [key: string]: () => void } = {
    "+": () => v++,
    "-": () => v--,
    "[": () => v === 0 && (i = code.indexOf("]", i)),
    "]": () => v !== 0 && (i = code.lastIndexOf("[", i)),
    "{": () => v === 0 && (i = code.indexOf("}", i)),
  };

  while (i < code.length) {
    actions[code[i]]?.();
    i++;
  }

  return v;
}

const execute1 = execute("+++"); // 3
console.log(execute1);

const execute2 = execute("+--"); // -1
console.log(execute2);

const execute3 = execute(">+++[-]"); // 0
console.log(execute3);

const execute4 = execute(">>>+{++}"); // 3
console.log(execute4);

const execute5 = execute("+{[-]+}+"); // 2
console.log(execute5);

const execute6 = execute("{+}{+}{+}"); // 0
console.log(execute6);

const execute7 = execute("------[+]++"); // 2
console.log(execute7);

const execute8 = execute("-[++{-}]+{++++}"); // 5
console.log(execute8);

/* 
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 250
  ops: 3946
*/
