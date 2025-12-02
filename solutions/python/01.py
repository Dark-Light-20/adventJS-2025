def filter_gifts(gifts):
    return filter(lambda gift: '#' not in gift, gifts)


gifts1 = ["car", "doll#arm", "ball", "#train"]
good1 = filter_gifts(gifts1)
print(list(good1))
# ['car', 'ball']

gifts2 = ["#broken", "#rusty"]
good2 = filter_gifts(gifts2)
print(list(good2))
# []

gifts3 = []
good3 = filter_gifts(gifts3)
print(list(good3))
# []

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 170
  ops: 1692
"""
