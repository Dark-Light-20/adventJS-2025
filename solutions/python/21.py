def clear_gifts(warehouse: list[list[str]], drops: list[int]) -> list[list[str]]:
    row_length = len(warehouse[0])
    grid = [row.copy() for row in warehouse]

    for drop in drops:
        for row_index in range(len(grid) - 1, -1, -1):
            if grid[row_index][drop] == ".":
                grid[row_index][drop] = "#"
                break

        remaining = [row for row in grid if not all(
            cell == "#" for cell in row)]
        removed = len(grid) - len(remaining)
        if removed:
            grid = [["."] * row_length for _ in range(removed)] + remaining

    return grid


clear1 = clear_gifts(
    [
        [".", ".", "."],
        [".", ".", "."],
        ["#", ".", "#"],
    ],
    [1]
)
"""
1. The gift falls in column 1
2. Row 2 becomes [# # #].
3. Row 2 is complete, the robot clears it.
6. A new empty row is added at position 0.

Result:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
"""
print(clear1)

clear2 = clear_gifts(
    [
        [".", ".", "#"],
        ["#", ".", "#"],
        ["#", ".", "#"],
    ],
    [0, 1, 2]
)

"""
1. The gift falls in column 0
2. The gift falls in column 1
3. Row 2 becomes [# # #]
4. Row 2 is complete, the robot clears it

For now it looks like this:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. The gift falls in column 2

Result:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
"""
print(clear2)


"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 170
  ops: 2602
"""
