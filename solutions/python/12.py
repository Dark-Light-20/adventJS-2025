def elf_battle(elf1: str, elf2: str) -> int:
    elf1_health = 3
    elf2_health = 3
    for i in range(len(elf1)):
        elf1_move = elf1[i]
        elf2_move = elf2[i]
        elf1_damage = 2 if (elf1_move == "F") else (
            elf1_move == "A" and elf2_move != "B")
        elf2_damage = 2 if (elf2_move == "F") else (
            elf2_move == "A" and elf1_move != "B")
        elf2_health -= elf1_damage
        elf1_health -= elf2_damage
        if (elf1_health <= 0 or elf2_health <= 0):
            break
    if (elf1_health > elf2_health):
        return 1
    elif (elf2_health > elf1_health):
        return 2
    return 0


battle1 = elf_battle("A", "B")
# Round 1: A vs B -> Elf 2 blocks
# Result: Elf 1 = 3 HP
#         Elf 2 = 3 HP
# → 0
print(battle1)

battle2 = elf_battle("F", "B")
# Round 1: F vs B -> Elf 2 takes 2 damage (F cannot be blocked)
# Result: Elf 1 = 3 HP
#         Elf 2 = 1 HP
# → 1
print(battle2)

battle3 = elf_battle("AAB", "BBA")
# R1: A vs B → Elf 2 blocks
# R2: A vs B → Elf 2 blocks
# R3: B vs A → Elf 1 blocks
# Result: Elf 1 = 3, Elf 2 = 3
# → 0
print(battle3)

battle4 = elf_battle("AFA", "BBA")
# R1: A vs B → Elf 2 blocks
# R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
# R3: A vs A → both -1
# Result: Elf 1 = 2, Elf 2 = 0
# → 1
print(battle4)

battle5 = elf_battle("AFAB", "BBAF")
# R1: A vs B → Elf 2 blocks
# R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
# R3: A vs A → both -1 → Elf 2 reaches 0 Battle ends!
# R4: is not played, since Elf 2 has no health left
# → 1
print(battle5)

battle6 = elf_battle("AA", "FF")
# R1: A vs F → Elf 1 -2, Elf 2 -1
# R2: A vs F → Elf 1 -2, Elf 2 -1 → Elf 1 reaches -1
# → 2
print(battle6)

"""
  Score: ★★★★★★★ (3 bonus stars for solving it today!)
  Points: 350
  ops: 4974
"""
