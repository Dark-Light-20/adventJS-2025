/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  function validateSync(node1, node2) {
    let subSync1 = true;
    let subSync2 = true;
    if (node1.left && node2.right) {
      subSync1 = validateSync(node1.left, node2.right);
    }
    if (node1.right && node2.left) {
      subSync2 = validateSync(node1.right, node2.left);
    }
    const sameRoot = node1.value === node2.value;
    return sameRoot && subSync1 && subSync2;
  }
  const sync = validateSync(tree1, tree2);
  const firstRoot = tree1.value;
  return [sync, firstRoot];
}

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

const sync1 = isTreesSynchronized(tree1, tree2); // [true, '🎄']
console.log(sync1);

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

const sync2 = isTreesSynchronized(tree1, tree3); // [false, '🎄']
console.log(sync2);

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const sync3 = isTreesSynchronized(tree1, tree4); // [false, '🎄']
console.log(sync3);

const sync4 = isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }); // [false, '🎅']
console.log(sync4);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 80
  ops: 1941
*/
