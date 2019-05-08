const { Contour } = require('./contour')
const { Vector } = require('./vector')
const { Matrix } = require('./matrix')

const contour = new Contour([
  new Vector(2, 2),
  new Vector(2, 6),
  new Vector(6, 6),
  new Vector(6, 2)
])
const matrix = new Matrix(
  [0, 1],
  [1, 0]
)
console.log(contour.transform(matrix))