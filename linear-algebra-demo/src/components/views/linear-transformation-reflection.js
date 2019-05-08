import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import LTExample from '../linear-transformation-example'

const matrix = new Matrix([-1, 0], [0, 1])

export default () => <LTExample matrix={matrix} />
