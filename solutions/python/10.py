def max_depth(s: str) -> int:
    stash = []
    max_value = 0
    for char in s:
        if char == "[":
            stash.append(char)
            max_value = max(max_value, len(stash))
        elif not len(stash):
            return -1
        else:
            stash.pop()
    return -1 if len(stash) else max_value


depth1 = max_depth("[]")  # -> 1
print(depth1)

depth2 = max_depth("[[]]")  # -> 2
print(depth2)

depth3 = max_depth("[][]")  # -> 1
print(depth3)

depth4 = max_depth("[[][]]")  # -> 2
print(depth4)

depth5 = max_depth("[[[]]]")  # -> 3
print(depth5)

depth6 = max_depth("[][[]][]")  # -> 2
print(depth6)

depth7 = max_depth("][")  # -> -1 (closes before opening)
print(depth7)

depth8 = max_depth("[[[")  # -> -1 (missing closing brackets)
print(depth8)

depth9 = max_depth("[]]]")  # -> -1 (extra closing brackets)
print(depth9)

depth10 = max_depth("[][][")  # -> -1 (one remains unclosed)
print(depth10)

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 140
  ops: 2235
"""
