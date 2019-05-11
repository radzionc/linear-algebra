import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import DeterminantExample from '../determinant-example'

const matrix = new Matrix([2, 1], [-1, -2])

export default () => (
  <DeterminantExample withVectors cells={4} matrix={matrix} />
)
