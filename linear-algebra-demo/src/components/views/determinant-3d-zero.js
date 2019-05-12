import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import Example from '../determinant-3d-example'

const matrix = new Matrix([1, 0, 1], [0.5, 1, 1.5], [1, 0, 1])

export default () => <Example matrix={matrix} />
