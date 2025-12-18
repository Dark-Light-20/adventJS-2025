from functools import reduce


def has_four_lights(board: list[list[str]]) -> bool:
    for row in board:
        line = "".join(row)
        if "RRRR" in line or "GGGG" in line:
            return True
    horizontal_length = len(board[0])
    for i in range(0, horizontal_length):
        line = reduce(lambda curr, row: curr + row[i], board, "")
        if "RRRR" in line or "GGGG" in line:
            return True
    return False


has1 = has_four_lights([
    [".", ".", ".", ".", "."],
    ["R", "R", "R", "R", "."],
    ["G", "G", ".", ".", "."],
])
# true → there are 4 red lights horizontally
print(has1)

has2 = has_four_lights([
    [".", "G", ".", "."],
    [".", "G", ".", "."],
    [".", "G", ".", "."],
    [".", "G", ".", "."],
])
# true → there are 4 green lights vertically
print(has2)

has3 = has_four_lights([
    ["R", "G", "R"],
    ["G", "R", "G"],
    ["G", "R", "G"],
])
# false → there are no 4 lights of the same color in a row
print(has3)


"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 300
  ops: 3888
"""
