from collections import deque


def min_steps_to_deliver(map: list[list[str]]) -> int:
    rows = len(map)
    cols = len(map[0])
    directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]

    start = None
    gifts = []
    for row in range(0, rows):
        for col in range(0, cols):
            if map[row][col] == "S":
                start = [row, col]
            if map[row][col] == "G":
                gifts.append([row, col])

    dist = [[-1] * cols for _ in range(rows)]
    queue = deque()
    dist[start[0]][start[1]] = 0
    queue.append(start)

    while len(queue) > 0:
        [x, y] = queue.popleft()
        for [dx, dy] in directions:
            new_x = x + dx
            new_y = y + dy
            if (
                0 <= new_x < rows and
                0 <= new_y < cols and
                map[new_x][new_y] != "#" and
                dist[new_x][new_y] == -1
            ):
                dist[new_x][new_y] = dist[x][y] + 1
                queue.append([new_x, new_y])

    total = 0
    for gift_row, gift_col in gifts:
        distance = dist[gift_row][gift_col]
        if distance == -1:
            return -1
        total += distance

    return 0 if len(gifts) == 0 else total


deliver1 = min_steps_to_deliver([
    ["S", ".", "G"],
    [".", "#", "."],
    ["G", ".", "."],
])
# Result: 4
print(deliver1)

"""
Explanation:
- Minimum distance from S (0,0) to G (0,2): 2 steps
- Minimum distance from S (0,0) to G (2,0): 2 steps
- Total: 2 + 2 = 4
"""

deliver2 = min_steps_to_deliver([
    ["S", "#", "G"],
    ["#", "#", "."],
    ["G", ".", "."],
])
# Result: -1
# (The house at (0,2) is unreachable due to obstacles)
print(deliver2)

deliver3 = min_steps_to_deliver([["S", "G"]])
# Result: 1
print(deliver3)


"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 10
  ops: 2353
"""
