const { Vector } = require('./vector')
const { Matrix } = require('./matrix')

const vector2D = new Vector(3, 5)
const vector3D = new Vector(3, 5, 2)
const matrix2x2D = new Matrix(
  [1, 2],
  [3, 4]
)
const matrix2x3D = new Matrix(
  [1, 2, 3],
  [4, 5, 6]
)
const matrix3x2D = new Matrix(
  [1, 2],
  [3, 4],
  [5, 6]
)
// 2D => 2D
console.log(vector2D.transform(matrix2x2D))
// Vector { components: [ 13, 29 ] }

// 3D => 2D
console.log(vector3D.transform(matrix2x3D))
// Vector { components: [ 19, 49 ] }

// 2D => 3D
console.log(vector2D.transform(matrix3x2D))
// Vector { components: [ 13, 29, 45 ] }
console.log(vector2D.transform(matrix2x3D))
// Error: Matrix columns length should be equal to vector components length.

