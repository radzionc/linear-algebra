import React from 'react'

import Example from './3d-example'
import Expression from './expression'
import ExpressionPart from './expression-part'
import InBrackets from './in-brackets'
import Text from './text'

export default ({ matrix }) => {
  const renderInformation = ({ transformedColor }) => {
    return (
      <Expression>
        <ExpressionPart>
          <Text>det(</Text>
          <InBrackets color={transformedColor} columns={matrix.columns()} />
          <Text>)</Text>
        </ExpressionPart>
        <Text>{matrix.determinant()}</Text>
      </Expression>
    )
  }
  return <Example renderInformation={renderInformation} matrix={matrix} />
}
