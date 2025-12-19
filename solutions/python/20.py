def drop_gifts(warehouse: list[list[str]], drops: list[int]) -> list[list[str]]:
    for drop in drops:
        for row_index in range(len(warehouse) - 1, -1, -1):
            if warehouse[row_index][drop] == ".":
                warehouse[row_index][drop] = "#"
                break

    return warehouse


drop1 = drop_gifts(
    [
        [".", ".", "."],
        [".", "#", "."],
        ["#", "#", "."],
    ],
    [0]
)
"""
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
"""
print(drop1)

drop2 = drop_gifts(
    [
        [".", ".", "."],
        ["#", "#", "."],
        ["#", "#", "#"],
    ],
    [0, 2]
)
"""
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
"""
print(drop2)

drop3 = drop_gifts(
    [
        [".", ".", "."],
        [".", ".", "."],
        [".", ".", "."],
    ],
    [0, 1, 2]
)
"""
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
"""
print(drop3)

drop4 = drop_gifts(
    [
        ["#", "#"],
        ["#", "#"],
    ],
    [0, 0]
)
"""
[
  ['#', '#']
  ['#', '#']
]
"""
print(drop4)


"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 260
  ops: 2592
"""
