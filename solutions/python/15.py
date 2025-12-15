from typing import Union


def draw_table(data: list[dict[str, Union[str, int]]], sort_by: str) -> str:
    sorted_data = sorted(data, key=lambda item: item[sort_by])

    columns = list(sorted_data[0].keys())
    col_widths = [
        max(len(str(item[col])) for item in sorted_data)
        for col in columns
    ]

    separator = "+" + "+".join("-" * (width + 2) for width in col_widths) + "+"

    headers = [chr(65 + i) for i in range(len(columns))]
    header_row = "|" + \
        "|".join(f" {header.ljust(width)} " for header,
                 width in zip(headers, col_widths)) + "|"

    rows = []
    for item in sorted_data:
        row_cells = [f" {str(item[col]).ljust(width)} " for col,
                     width in zip(columns, col_widths)]
        rows.append("|" + "|".join(row_cells) + "|")

    return "\n".join([separator, header_row, separator] + rows + [separator])


table1 = draw_table(
    [
        {"name": "Charlie", "city": "New York"},
        {"name": "Alice", "city": "London"},
        {"name": "Bob", "city": "Paris"},
    ],
    "name"
)
# +---------+----------+
# | A       | B        |
# +---------+----------+
# | Alice   | London   |
# | Bob     | Paris    |
# | Charlie | New York |
# +---------+----------+
print(table1)

table2 = draw_table(
    [
        {"gift": "Book", "quantity": 5},
        {"gift": "Music CD", "quantity": 1},
        {"gift": "Doll", "quantity": 10},
    ],
    "quantity"
)
# +----------+----+
# | A        | B  |
# +----------+----+
# | Music CD | 1  |
# | Book     | 5  |
# | Doll     | 10 |
# +----------+----+
print(table2)

# TODO: Validate
"""
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 1
  ops: 10
"""
