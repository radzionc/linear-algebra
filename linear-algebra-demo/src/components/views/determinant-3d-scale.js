import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import Example from '../determinant-3d-example'

const matrix = new Matrix([3, 0, 0], [0, 3, 0], [0, 0, 3])

export default () => <Example matrix={matrix} />
