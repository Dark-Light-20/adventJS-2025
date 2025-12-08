def find_unique_toy(toy: str) -> str:
    count = {}
    for letter in toy:
        key = letter.lower()
        count.setdefault(key, {"count": 0, "letter": letter})
        count[key] = {"count": count[key]["count"] + 1,
                      "letter": count[key]["letter"]}
    unique = [item for item in count.values() if item["count"] == 1]
    return unique[0]["letter"] if unique else ""


unique1 = find_unique_toy("Gift")  # 'G'
print(unique1)
# ℹ️ The G is the first letter that is not repeated
# and we return it exactly as it appears

unique2 = find_unique_toy("sS")  # ''
print(unique2)
# ℹ️ The letters are repeated, since it doesn't distinguish uppercase

unique3 = find_unique_toy("reindeeR")  # 'i'
print(unique3)
# ℹ️ The r is repeated (even if it's uppercase)
# and the e as well, so the first one is 'i'

# More cases:
unique4 = find_unique_toy("AaBbCc")  # ''
print(unique4)

unique5 = find_unique_toy("abcDEF")  # 'a'
print(unique5)

unique6 = find_unique_toy("aAaAaAF")  # 'F'
print(unique6)

unique7 = find_unique_toy("sTreSS")  # 'T'
print(unique7)

unique8 = find_unique_toy("z")  # 'z'
print(unique8)

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 240
  ops: 3305
"""
