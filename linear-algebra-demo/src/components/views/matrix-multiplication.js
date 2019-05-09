import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import MMExample from '../matrix-matrix-example'

const firstMatrix = new Matrix([-1, 0], [0, 1])
const secondMatrix = new Matrix([1, 0.5], [0, 1])

export default () => (
  <MMExample firstMatrix={firstMatrix} secondMatrix={secondMatrix} />
)
