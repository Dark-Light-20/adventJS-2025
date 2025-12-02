def manufacture_gifts(gifts_to_produce):
    result = []
    for order in gifts_to_produce:
        quantity = order['quantity']
        if isinstance(quantity, int) and quantity > 0:
            result.extend([order['toy']]*order['quantity'])
    return result


production1 = [
    {"toy": "car", "quantity": 3},
    {"toy": "doll", "quantity": 1},
    {"toy": "ball", "quantity": 2},
]

result1 = manufacture_gifts(production1)
print(list(result1))
# ['car', 'car', 'car', 'doll', 'ball', 'ball']

production2 = [
    {"toy": "train", "quantity": 0},  # not manufactured
    {"toy": "bear", "quantity": -2},  # neither
    {"toy": "puzzle", "quantity": 1},
]

result2 = manufacture_gifts(production2)
print(list(result2))
# ['puzzle']

production3 = []
result3 = manufacture_gifts(production3)
print(list(result3))
# []

"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 140
  ops: 1680
"""
