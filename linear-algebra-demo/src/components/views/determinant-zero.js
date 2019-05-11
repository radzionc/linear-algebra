import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import DeterminantExample from '../determinant-example'

const matrix = new Matrix([4, 2], [2, 1])

export default () => (
  <DeterminantExample withVectors cells={5} matrix={matrix} />
)
