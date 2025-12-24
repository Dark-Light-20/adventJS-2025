def is_trees_synchronized(tree1, tree2):
    def validate_sync(node1, node2):
        sub_sync_1 = True
        sub_sync_2 = True
        if (node1.get("left") and node2.get("right")):
            sub_sync_1 = validate_sync(node1.get("left"), node2.get("right"))
        if (node1.get("right") and node2.get("left")):
            sub_sync_2 = validate_sync(node1.get("right"), node2.get("left"))
        same_root = node1.get("value") == node2.get("value")
        return same_root and sub_sync_1 and sub_sync_2

    sync = validate_sync(tree1, tree2)
    first_root = tree1["value"]
    return [sync, first_root]


tree1 = {
    "value": "🎄",
    "left": {"value": "⭐"},
    "right": {"value": "🎅"},
}

tree2 = {
    "value": "🎄",
    "left": {"value": "🎅"},
    "right": {"value": "⭐"},
}

sync1 = is_trees_synchronized(tree1, tree2)  # [true, '🎄']
print(sync1)

"""
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
"""

tree3 = {
    "value": "🎄",
    "left": {"value": "🎅"},
    "right": {"value": "🎁"},
}

sync2 = is_trees_synchronized(tree1, tree3)  # [false, '🎄']
print(sync2)

tree4 = {
    "value": "🎄",
    "left": {"value": "⭐"},
    "right": {"value": "🎅"},
}

sync3 = is_trees_synchronized(tree1, tree4)  # [false, '🎄']
print(sync3)

sync4 = is_trees_synchronized({"value": "🎅"}, {"value": "🧑‍🎄"})  # [false, '🎅']
print(sync4)


"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 180
  ops: 3333
"""
