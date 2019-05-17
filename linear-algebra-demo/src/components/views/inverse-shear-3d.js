import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import Example from '../inverse-matrix-3d-example'

const matrix = new Matrix([1, 2, 0], [0, 1, 0], [0, 0, 1])

export default () => <Example matrix={matrix} />
