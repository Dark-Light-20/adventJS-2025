def has_four_in_a_row(board: list[list[str]]) -> bool:
    rows_length = len(board)
    cols_length = len(board[0])

    # Directions: right, down, down-right, down-left
    directions = (
        (0, 1),
        (1, 0),
        (1, 1),
        (1, -1),
    )

    for i in range(rows_length):
        for j in range(cols_length):
            v = board[i][j]
            # skip invalid cells early
            if v not in ("G", "R"):
                continue

            for di, dj in directions:
                end_i = i + 3 * di
                end_j = j + 3 * dj
                if end_i < 0 or end_i >= rows_length or end_j < 0 or end_j >= cols_length:
                    continue

                if (
                    board[i + di][j + dj] == v
                    and board[i + 2 * di][j + 2 * dj] == v
                    and board[end_i][end_j] == v
                ):
                    return True

    return False


hasRow1 = has_four_in_a_row([
    ["R", ".", ".", "."],
    [".", "R", ".", "."],
    [".", ".", "R", "."],
    [".", ".", ".", "R"],
])
# true → there are 4 red lights in a ↘ diagonal
print(hasRow1)

hasRow2 = has_four_in_a_row([
    [".", ".", ".", "G"],
    [".", ".", "G", "."],
    [".", "G", ".", "."],
    ["G", ".", ".", "."],
])
# true → there are 4 green lights in a ↙ diagonal
print(hasRow2)

hasRow3 = has_four_in_a_row([
    ["R", "R", "R", "R"],
    ["G", "G", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
])
# true → there are 4 red lights in a horizontal line
print(hasRow3)

hasRow4 = has_four_in_a_row([
    ["R", "G", "R"],
    ["G", "R", "G"],
    ["G", "R", "G"],
])
# false → there are no 4 consecutive lights of the same color
print(hasRow4)


"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 120
  ops: 3349
"""
