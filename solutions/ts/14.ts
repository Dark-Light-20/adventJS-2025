type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  const path: Path = [];
  const getGiftPath = (object: Workshop, gift: Gift) => {
    const keys = Object.keys(object);
    for (const key of keys) {
      const value = object[key];
      if (value === gift) {
        path.unshift(key);
        return true;
      } else if (typeof value === "object") {
        if (getGiftPath(value, gift)) {
          path.unshift(key);
          return true;
        }
      }
    }
    return false;
  };
  getGiftPath(workshop, gift);
  return path;
}

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

const path1 = findGiftPath(workshop, "train");
// ➜ ['storage', 'shelf', 'box1']
console.log(path1);

const path2 = findGiftPath(workshop, "switch");
// ➜ ['storage', 'shelf', 'box2']
console.log(path2);

const path3 = findGiftPath(workshop, "car");
// ➜ ['storage', 'box']
console.log(path3);

const path4 = findGiftPath(workshop, "doll");
// ➜ ['gift']
console.log(path4);

const path5 = findGiftPath(workshop, "plane");
// ➜ []
console.log(path5);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 100
  ops: 2103
*/
