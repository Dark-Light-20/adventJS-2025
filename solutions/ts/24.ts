type Tree = { value: string; left?: Tree; right?: Tree } | undefined;

function isTreesSynchronized(tree1: Tree, tree2: Tree): [boolean, string] {
  function validateSync(node1: Tree, node2: Tree): boolean {
    let subSync1 = true;
    let subSync2 = true;
    if (node1?.left && node2?.right) {
      subSync1 = validateSync(node1.left, node2.right);
    }
    if (node1?.right && node2?.left) {
      subSync2 = validateSync(node1.right, node2.left);
    }
    const sameRoot = node1?.value === node2?.value;
    return sameRoot && subSync1 && subSync2;
  }
  const sync = validateSync(tree1, tree2);
  const firstRoot = tree1!.value;
  return [sync, firstRoot];
}

const baseTree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const baseTree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

const sync1 = isTreesSynchronized(baseTree1, baseTree2); // [true, '🎄']
console.log(sync1);

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const baseTree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

const sync2 = isTreesSynchronized(baseTree1, baseTree3); // [false, '🎄']
console.log(sync2);

const baseTree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const sync3 = isTreesSynchronized(baseTree1, baseTree4); // [false, '🎄']
console.log(sync3);

const sync4 = isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }); // [false, '🎅']
console.log(sync4);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 180
  ops: 3144
*/
