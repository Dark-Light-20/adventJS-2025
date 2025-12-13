def find_unsafe_gifts(warehouse: list[str]) -> int:
    rows = len(warehouse)
    cols = len(warehouse[0])
    unsafe_count = 0

    for i, row in enumerate(warehouse):
        for j, char in enumerate(row):
            if char != '*':
                continue
            if not any(
                0 <= ni < rows and 0 <= nj < cols and warehouse[ni][nj] == '#'
                for ni, nj in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]
            ):
                unsafe_count += 1

    return unsafe_count


unsafe1 = find_unsafe_gifts([".*.", "*#*", ".*."])  # ➞ 0
# All the presents are next to a camera
print(unsafe1)

unsafe2 = find_unsafe_gifts(["...", ".*.", "..."])  # ➞ 1
# This present has no cameras around it
print(unsafe2)

unsafe3 = find_unsafe_gifts(["*.*", "...", "*#*"])  # ➞ 2
# The presents in the top corners have no cameras around them
print(unsafe3)

unsafe4 = find_unsafe_gifts(
    [".....", ".*.*.", "..#..", ".*.*.", "....."])  # ➞ 4
# The four presents have no cameras, because they are diagonal to the camera
print(unsafe4)

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 80
  ops: 2524
"""
