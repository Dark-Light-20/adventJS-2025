from typing import Union


def pack_gifts(gifts: list[int], maxWeight: int) -> Union[int, None]:
    if not len(gifts):
        return 0
    sleighs = 1
    remain_weight = maxWeight
    for gift in gifts:
        if (gift > maxWeight):
            return None
        if (gift > remain_weight):
            sleighs += 1
            remain_weight = maxWeight
        remain_weight -= gift
    return sleighs


pack1 = pack_gifts([2, 3, 4, 1], 5)
# 2 sleighs
# Sleigh 1: 2 + 3 = 5
# Sleigh 2: 4 + 1 = 5
print(pack1)

pack2 = pack_gifts([3, 3, 2, 1], 3)
# 3 sleighs
# Sleigh 1: 3
# Sleigh 2: 3
# Sleigh 3: 2 + 1 = 3
print(pack2)

pack3 = pack_gifts([1, 1, 1, 1], 2)
# 2 sleighs
# Sleigh 1: 1 + 1 = 2
# Sleigh 2: 1 + 1 = 2
print(pack3)

pack4 = pack_gifts([5, 6, 1], 5)
# null
# There is a gift weighing 6 that doesn’t fit
print(pack4)

pack5 = pack_gifts([], 10)
# 0 sleighs
# There are no gifts to deliver
print(pack5)

# TODO: Validate
"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 340
  ops: 3998
"""
