
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  return matrix
    .map((row, i) => (i % 2 != 0) ? row.reverse() : row)
    .reduce((acc, row) => acc.concat(row), []);
}
