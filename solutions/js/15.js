/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */
function drawTable(data, sortBy) {
  const isValueNumeric = typeof data[0][sortBy] === "number";
  const sortedItems = data.toSorted((item1, item2) =>
    isValueNumeric
      ? item1[sortBy] - item2[sortBy]
      : item1[sortBy].localeCompare(item2[sortBy])
  );
  let table = "";
  let currentColumnHeaderASCII = 65;
  const columnNames = Object.keys(sortedItems[0]);
  const columnLengths = columnNames.map((key) =>
    Math.max(...sortedItems.map((item) => item[key].toString().length))
  );
  const sectionSeparator = columnLengths.reduce(
    (curr, length) => `${curr}-${"-".repeat(length)}-+`,
    "+"
  );
  table += sectionSeparator + "\n";
  table +=
    columnLengths.reduce((curr, length, index) => {
      const header = String.fromCodePoint(currentColumnHeaderASCII + index);
      return `${curr} ${header.padEnd(length)} |`;
    }, "|") + "\n";
  table += sectionSeparator + "\n";
  table += sortedItems.reduce((curr, item) => {
    const row = Object.values(item).reduce(
      (rowValue, value, index) =>
        `${rowValue} ${value.toString().padEnd(columnLengths[index], " ")} |`,
      "|"
    );
    return `${curr}${row}\n`;
  }, "");
  table += sectionSeparator;
  return table;
}

const table1 = drawTable(
  [
    { name: "Charlie", city: "New York" },
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
  ],
  "name"
);
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+
console.log(table1);

const table2 = drawTable(
  [
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
    { gift: "Doll", quantity: 10 },
  ],
  "quantity"
);
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+
console.log(table2);

// TODO: Validate
/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 10
  ops: 1
*/
