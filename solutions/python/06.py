from typing import List, Dict


def match_gloves(gloves: List[Dict[str, str]]) -> List[str]:
    matches = {}
    result = []
    for glove in gloves:
        matches.setdefault(glove['color'], {"L": 0, "R": 0})
        matches[glove['color']][glove['hand']] += 1
    for color, counts in matches.items():
        result += [color]*min(counts['L'], counts['R'])
    return result


gloves = [
    {"hand": "L", "color": "red"},
    {"hand": "R", "color": "red"},
    {"hand": "R", "color": "green"},
    {"hand": "L", "color": "blue"},
    {"hand": "L", "color": "green"},
]
result_gloves_1 = match_gloves(gloves)
print(result_gloves_1)
# ["red", "green"]

gloves2 = [
    {"hand": "L", "color": "gold"},
    {"hand": "R", "color": "gold"},
    {"hand": "L", "color": "gold"},
    {"hand": "L", "color": "gold"},
    {"hand": "R", "color": "gold"},
]
result_gloves_2 = match_gloves(gloves2)
print(result_gloves_2)
# ["gold", "gold"]

gloves3 = [
    {"hand": "L", "color": "red"},
    {"hand": "R", "color": "green"},
    {"hand": "L", "color": "blue"},
]
result_gloves_3 = match_gloves(gloves3)
print(result_gloves_3)
# []

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 1733
  ops: 140
"""
