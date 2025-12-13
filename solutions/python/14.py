from typing import Union


def find_gift_path(workshop: dict, gift: Union[str, int, bool]) -> list[str]:
    path = []

    def get_gift_path(node: dict, gift: Union[str, int, bool]) -> bool:
        keys = node.keys()
        for key in keys:
            value = node[key]
            if (value == gift):
                path.insert(0, key)
                return True
            elif (isinstance(value, dict)):
                if (get_gift_path(value, gift)):
                    path.insert(0, key)
                    return True
        return False
    get_gift_path(workshop, gift)
    return path


workshop = {
    "storage": {
        "shelf": {
            "box1": "train",
            "box2": "switch",
        },
        "box": "car",
    },
    "gift": "doll",
}

path1 = find_gift_path(workshop, "train")
# ➜ ['storage', 'shelf', 'box1']
print(path1)

path2 = find_gift_path(workshop, "switch")
# ➜ ['storage', 'shelf', 'box2']
print(path2)

path3 = find_gift_path(workshop, "car")
# ➜ ['storage', 'box']
print(path3)

path4 = find_gift_path(workshop, "doll")
# ➜ ['gift']
print(path4)

path5 = find_gift_path(workshop, "plane")
# ➜ []
print(path5)

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 100
  ops: 2033
"""
