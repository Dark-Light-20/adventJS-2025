def draw_gift(size, symbol):
    if size < 2:
        return ''
    box = ""
    box += symbol * size + "\n"
    for _ in range(1, size-1):
        box += symbol + " " * (size-2) + symbol + "\n"
    box += symbol * size
    return box


g1 = draw_gift(4, "*")
print(g1)
"""
 ****
 *  *
 *  *
 ****
"""

g2 = draw_gift(3, "#")
print(g2)
"""
###
# #
###
"""

g3 = draw_gift(2, "-")
print(g3)
"""
--
--
"""

g4 = draw_gift(1, "+")
print(g4)
# ""  poor intern…

"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 460
  ops: 4713
"""
