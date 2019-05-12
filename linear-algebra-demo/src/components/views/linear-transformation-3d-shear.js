import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import Example from '../3d-example'
import BracketedView from '../bracketed'

const matrix = new Matrix([1, 2, 0], [0, 1, 0], [0, 0, 1])

export default () => {
  const renderInformation = ({ transformedColor }) => {
    return (
      <BracketedView
        name="T"
        columns={matrix.columns()}
        color={transformedColor}
      />
    )
  }
  return <Example renderInformation={renderInformation} matrix={matrix} />
}
