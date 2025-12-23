from collections import deque


def can_escape(maze: list[list[str]]) -> bool:
    maze_length = len(maze)
    row_length = len(maze[0])
    directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]

    santa_position = [-1, -1]
    exit_position = [-1, -1]

    for i in range(0, maze_length):
        for j in range(0, row_length):
            if (maze[i][j] == "S"):
                santa_position = [i, j]
            if (maze[i][j] == "E"):
                exit_position = [i, j]

    queue = deque()
    queue.append([santa_position[0], santa_position[1]])
    visited = set()
    visited.add(f"{santa_position[0]},{santa_position[1]}")

    while len(queue) > 0:
        [x, y] = queue.popleft()

        if (x == exit_position[0] and y == exit_position[1]):
            return True

        for [dx, dy] in directions:
            new_x = x + dx
            new_y = y + dy

            if (
                new_x >= 0 and
                new_x < maze_length and
                new_y >= 0 and
                new_y < row_length and
                maze[new_x][new_y] != "#" and
                f"{new_x},{new_y}" not in visited
            ):
                visited.add(f"{new_x},{new_y}")
                queue.append([new_x, new_y])

    return False


escape1 = can_escape([
    ["S", ".", "#", "."],
    ["#", ".", "#", "."],
    [".", ".", ".", "."],
    ["#", "#", "#", "E"],


])
# → true
print(escape1)

escape2 = can_escape([
    ["S", "#", "#"],
    [".", "#", "."],
    [".", "#", "E"],
])
# → false
print(escape2)

escape3 = can_escape([["S", "E"]])
# → true
print(escape3)

escape4 = can_escape([
    ["S", ".", ".", ".", "."],
    ["#", "#", "#", "#", "."],
    [".", ".", ".", ".", "."],
    [".", "#", "#", "#", "#"],
    [".", ".", ".", ".", "E"],
])
# → true
print(escape4)

escape5 = can_escape([
    ["S", ".", "."],
    [".", ".", "."],
    ["#", "#", "#"],
    [".", ".", "E"],
])
# → false
print(escape5)


"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 10
  ops: 2267
"""
