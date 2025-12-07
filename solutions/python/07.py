def draw_tree(height, ornament, frequency):
    tree = ""
    ornament_count = 0
    for i in range(1, height + 1):
        tree += " "*(height - i)
        for _ in range(0, 2 * (i - 1) + 1):
            ornament_count += 1
            if (ornament_count == frequency):
                tree += ornament
                ornament_count = 0
            else:
                tree += "*"
        tree += "\n"
    tree += " "*(height - 1) + "#"
    return tree


tree1 = draw_tree(5, "o", 2)
print(tree1)
#     *
#    o*o
#   *o*o*
#  o*o*o*o
# *o*o*o*o*
#     #

tree2 = draw_tree(3, "@", 3)
print(tree2)
#   *
#  *@*
# *@**@
#   #

tree3 = draw_tree(4, "+", 1)
print(tree3)
#    +
#   +++
#  +++++
# +++++++
#    #

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 340
  ops: 3787
"""
