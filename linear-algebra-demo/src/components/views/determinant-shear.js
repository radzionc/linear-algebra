import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import DeterminantExample from '../determinant-example'

const matrix = new Matrix([1, 0.5], [0, 1])

export default () => <DeterminantExample cells={4} matrix={matrix} />
