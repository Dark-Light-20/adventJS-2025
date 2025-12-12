def run_factory(factory: list[str]) -> str:
    pos_x = 0
    pos_y = 0
    visited_positions = {f"{pos_y}{pos_x}"}
    while ((0 <= pos_y < len(factory)) and (0 <= pos_x < len(factory[0]))):
        actual_movement = factory[pos_y][pos_x]
        if (actual_movement == ">"):
            pos_x += 1
        elif (actual_movement == "<"):
            pos_x -= 1
        elif (actual_movement == "^"):
            pos_y -= 1
        elif (actual_movement == "v"):
            pos_y += 1

        if (actual_movement == "."):
            return "completed"

        position = f"{pos_y}{pos_x}"
        if (position in visited_positions):
            return "loop"
        visited_positions.add(position)

    return "broken"


factory1 = run_factory([">>."])  # 'completed'
print(factory1)

factory2 = run_factory([">>>"])  # 'broken'
print(factory2)

factory3 = run_factory([">><"])  # 'loop'
print(factory3)

factory4 = run_factory([">>v", "..<"])  # 'completed'
print(factory4)

factory5 = run_factory([">>v", "<<<"])  # 'broken'
print(factory5)

factory6 = run_factory([">v.", "^.."])  # 'completed'
print(factory6)

factory7 = run_factory(["v.", "^."])  # 'loop'
print(factory7)

# TODO: Validate
"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 10??? 
  ops: 1???
"""
