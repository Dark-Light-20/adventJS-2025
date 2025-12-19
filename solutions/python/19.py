def reveal_santa_route(routes: list[list[str]]) -> list[str]:
    mapping = {origin: dest for origin, dest in routes}

    dests = {dest for _, dest in routes}
    start = next(origin for origin, _ in routes if origin not in dests)

    result = [start]
    while start in mapping:
        start = mapping[start]
        result.append(start)

    return result


reveal1 = reveal_santa_route([
    ["MEX", "CAN"],
    ["UK", "GER"],
    ["CAN", "UK"],
])
# → ['MEX', 'CAN', 'UK', 'GER']
print(reveal1)

reveal2 = reveal_santa_route([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
    ["CMX", "HKN"],
])
# → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']
print(reveal2)

reveal3 = reveal_santa_route([
    ["STA", "HYD"],
    ["ESP", "CHN"],
])
# → ['STA', 'HYD']
print(reveal3)


"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 240
  ops: 3109
"""
