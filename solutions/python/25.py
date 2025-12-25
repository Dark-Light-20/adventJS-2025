def execute(code: str) -> int:
    value = 0
    index = 0

    while index < len(code):
        instruction = code[index]
        if instruction == "+":
            value += 1
        elif instruction == "-":
            value -= 1
        elif instruction == "[" and value == 0:
            index = code.find("]", index)
        elif instruction == "]" and value != 0:
            index = code.rfind("[", 0, index)
        elif instruction == "{" and value == 0:
            index = code.find("}", index)

        index += 1

    return value


execute1 = execute("+++")  # 3
print(execute1)

execute2 = execute("+--")  # -1
print(execute2)

execute3 = execute(">+++[-]")  # 0
print(execute3)

execute4 = execute(">>>+{++}")  # 3
print(execute4)

execute5 = execute("+{[-]+}+")  # 2
print(execute5)

execute6 = execute("{+}{+}{+}")  # 0
print(execute6)

execute7 = execute("------[+]++")  # 2
print(execute7)

execute8 = execute("-[++{-}]+{++++}")  # 5
print(execute8)

"""
  Score: ★★★★★★ (3 bonus stars for solving it today!)
  Points: 250
  ops: 4154
"""
