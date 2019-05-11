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
import Arrow from './arrow'

const contour = new Contour([
  new Vector(0, 0),
  new Vector(0, 1),
  new Vector(1, 1),
  new Vector(1, 0)
])

const LTExample = ({ theme, matrix, cells, withVectors = false }) => {
  const initialColor = theme.color.red
  const transformedColor = theme.color.blue
  const transformed = contour.transform(matrix)
  const renderGridContent = ({ project }) => {
    const Vectors = () => {
      if (!withVectors) return null

      const iVectorName = 'i⃗'
      const jVectorName = 'j⃗'
      const iVector = new Vector(1, 0)
      const jVector = new Vector(0, 1)
      return (
        <>
          <Arrow
            project={project}
            vector={iVector}
            text={iVectorName}
            color={initialColor}
          />
          <Arrow
            project={project}
            vector={jVector}
            text={jVectorName}
            color={initialColor}
          />
          <Arrow
            project={project}
            vector={iVector.transform(matrix)}
            text={iVectorName}
            color={transformedColor}
          />
          <Arrow
            project={project}
            vector={jVector.transform(matrix)}
            text={jVectorName}
            color={transformedColor}
          />
        </>
      )
    }
    return (
      <>
        <ContourView contour={contour} color={initialColor} project={project} />
        <ContourView
          contour={transformed}
          color={transformedColor}
          project={project}
        />
        <Vectors />
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
