const { Matrix } = require('./matrix')

const one = new Matrix(
  [1, 2, 3],
  [4, 5, 6]
)
console.log(one.toDimension(3))
// Matrix { rows: [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 0, 0, 1 ]
// ] }
const another = new Matrix(
  [1, 2],
  [4, 5]
)
console.log(another.toDimension(4))
// Matrix { rows: [
//   [ 1, 2, 0, 0 ],
//   [ 4, 5, 0, 0 ],
//   [ 0, 0, 1, 0 ], 
//    0, 0, 0, 1 ]
// ] }
const other = new Matrix(
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
)
console.log(other.toDimension(2))
// Matrix { rows: [
//   [ 1, 2 ],
//   [ 4, 5 ]
// ] }