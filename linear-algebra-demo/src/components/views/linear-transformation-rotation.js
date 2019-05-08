import React from 'react'
import { Matrix } from 'linear-algebra/matrix'
import { toRadians } from 'linear-algebra/utils'
import LTExample from '../linear-transformation-example'

const angle = toRadians(45)

const matrix = new Matrix(
  [Math.cos(angle), -Math.sin(angle)],
  [Math.sin(angle), Math.cos(angle)]
)

export default () => <LTExample matrix={matrix} />
