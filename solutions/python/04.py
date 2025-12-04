def decode_santa_pin(code: str) -> str:
    result = ''
    number = 0

    for item in code:
        if (item == "+"):
            transformed = number+1
            number = 0 if transformed == 10 else transformed
        elif (item == "-"):
            transformed = number-1
            number = 9 if transformed == -1 else transformed
        elif (item == "<"):
            number = int(result[-1])
        elif (item == "]"):
            result += str(number)
        elif (item == "["):
            continue
        else:
            number = int(item)

    return result if len(result) == 4 else None


decode1 = decode_santa_pin("[1++][2-][3+][<]")
print(decode1)
# "3144"

decode2 = decode_santa_pin("[9+][0-][4][<]")
print(decode2)
# "0944"

decode3 = decode_santa_pin("[1+][2-]")
print(decode3)
# null (only 2 digits)

"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 140
  ops: 3498
"""
