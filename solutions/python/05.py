def time_until_take_off(from_time: str, take_off_time: str) -> int:
    from datetime import datetime
    from math import floor

    def to_timestamp(value: str) -> datetime:
        return datetime.strptime(value[:19], "%Y*%m*%d@%H|%M|%S")

    from_timestamp = to_timestamp(from_time).timestamp()
    take_off_timestamp = to_timestamp(take_off_time).timestamp()
    diff = (take_off_timestamp - from_timestamp)
    return floor(diff)


takeoff = "2025*12*25@00|00|00 NP"

# from December 24, 2025, 23:59:30, 30 seconds before takeoff
time1 = time_until_take_off("2025*12*24@23|59|30 NP", takeoff)
print(time1)
# 30

# exactly at takeoff time
time2 = time_until_take_off("2025*12*25@00|00|00 NP", takeoff)
print(time2)
# 0

# 12 seconds after takeoff
time3 = time_until_take_off("2025*12*25@00|00|12 NP", takeoff)
print(time3)
# -12

"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 70
  ops: 1474
"""
