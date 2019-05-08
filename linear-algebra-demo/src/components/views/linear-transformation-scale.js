import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import LTExample from '../linear-transformation-example'

const matrix = new Matrix([2, 0], [0, 2])

export default () => <LTExample matrix={matrix} />
