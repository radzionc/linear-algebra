class Matrix {
  constructor(...rows) {
    this.rows = rows
  }
}

const matrix = new Matrix(
  [0, 1],
  [2, 3],
  [4, 5]
)
console.log(matrix)
// Matrix { rows: [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ] }
console.log(matrix.rows[1])
// [ 2, 3 ]
console.log(matrix.rows[1][1])
// 3

module.exports = {
  Matrix
}

