const { Matrix } = require('./matrix')

const matrix = new Matrix(
  [1, 2, 0],
  [0, 1, 2],
  [2, 0, 1]
)
console.log(matrix.adjugate())
// Matrix {
//   rows: [
//     [ 1, -2, 4 ],
//     [ 4, 1, -2 ],
//     [ -2, 4, 1 ]
//   ]
// }