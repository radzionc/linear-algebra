import React from 'react'
import { withTheme } from 'styled-components'
import { Contour } from 'linear-algebra/contour'
import { Vector } from 'linear-algebra/vector'

import GridExample from './grid-example'
import Expression from './expression'
import ExpressionPart from './expression-part'
import InBrackets from './in-brackets'
import Text from './text'
import ContourView from './contour'

const contour = new Contour([
  new Vector(0, 0),
  new Vector(0, 1),
  new Vector(1, 1),
  new Vector(1, 0)
])

const LTExample = ({ theme, matrix, cells }) => {
  const transformedColor = theme.color.blue
  const transformed = contour.transform(matrix)
  const renderGridContent = ({ project }) => {
    return (
      <>
        <ContourView
          contour={contour}
          color={theme.color.red}
          project={project}
        />
        <ContourView
          contour={transformed}
          color={transformedColor}
          project={project}
        />
      </>
    )
  }
  const renderInformation = () => {
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
  const props = { cells, renderInformation, renderGridContent }
  return <GridExample {...props} />
}

export default withTheme(LTExample)
