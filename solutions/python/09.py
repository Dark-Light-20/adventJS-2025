from typing import Literal


def move_reno(board: str, moves: str) -> Literal['fail', 'crash', 'success']:
    row_index, col_index = 0, 0
    board_array = board.split("\n")[1: -1]
    for i, row in enumerate(board_array):
        if '@' in row:
            row_index, col_index = i, row.find('@')
            break
    movements = {"U": [-1, 0], "D": [1, 0], "L": [0, -1], "R": [0, 1]}
    for move in moves:
        row_index += movements[move][0]
        col_index += movements[move][1]

        if (row_index < 0 or row_index >= len(board_array) or
                col_index < 0 or col_index >= len(board_array[0])):
            return "crash"

        position = board_array[row_index][col_index]
        if (position == "*"):
            return "success"
        elif (position == "#"):
            return "crash"

    return "fail"


board = """
.....
.*#.*
.@...
.....
"""

reno1 = move_reno(board, "D")
print(reno1)
# ➞ 'fail' -> it moves but doesn't pick anything up

reno2 = move_reno(board, "U")
print(reno2)
# ➞ 'success' -> it picks something up (*) right above

reno3 = move_reno(board, "RU")
print(reno3)
# ➞ 'crash' -> it crashes into an obstacle (#)

reno4 = move_reno(board, "RRRUU")
print(reno4)
# ➞ 'success' -> it picks something up (*)

reno5 = move_reno(board, "DD")
print(reno5)
# ➞ 'crash' -> it crashes into the bottom of the board

reno6 = move_reno(board, "UUU")
print(reno6)
# ➞ 'success' -> it picks something up off the floor (*) and then crashes at the top

reno7 = move_reno(board, "RR")
print(reno7)
# ➞ 'fail' -> it moves but doesn't pick anything up

"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 280
  ops: 3536
"""
