import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import DeterminantExample from '../determinant-example'

const matrix = new Matrix([3, 0], [0, 2])

export default () => <DeterminantExample matrix={matrix} />
