const { Matrix } = require('./matrix')

const matrix = new Matrix(
  [0,  1,  2],
  [3,  4,  5],
  [6,  7,  8],
  [9, 10, 11]
)
console.log(matrix.transpose())
// Matrix {
//   rows: [
//     [ 0, 3, 6, 9 ],
//     [ 1, 4, 7, 10 ],
//     [ 2, 5, 8, 11 ]
//   ]
// }
