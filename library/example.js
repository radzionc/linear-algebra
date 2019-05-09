const { Matrix } = require('./matrix')

const matrix2 = new Matrix(
  [ 0, 3],
  [-2, 1]
)
console.log(matrix2.determinant())
// 6
const matrix3 = new Matrix(
  [2, -3,  1],
  [2,  0, -1],
  [1,  4,  5]
)
console.log(matrix3.determinant())
// 49
const matrix4 = new Matrix(
  [3, 0, 2, -1],
  [1, 2, 0, -2],
  [4, 0, 6, -3],
  [5, 0, 2,  0]
)
console.log(matrix4.determinant())
// 20
