import React from 'react'
import { withTheme } from 'styled-components'
import { Contour } from 'linear-algebra/contour'
import { Vector } from 'linear-algebra/vector'

import GridExample from './grid-example'
import Expression from './expression'
import InBrackets from './in-brackets'
import Text from './text'
import ContourView from './contour'

const contour = new Contour([
  new Vector(0, 0),
  new Vector(0, 4),
  new Vector(4, 4),
  new Vector(4, 0)
])

const LTExample = ({ firstMatrix, secondMatrix, reversed = false, theme }) => {
  const initialColor = theme.color.red
  const firstColor = theme.color.blue
  const secondColor = theme.color.green
  const resultColor = theme.color.yellow
  const resultMatrix = reversed
    ? firstMatrix.multiply(secondMatrix)
    : secondMatrix.multiply(firstMatrix)
  const renderGridContent = ({ project }) => {
    const transformed = contour.transform(resultMatrix)
    return (
      <>
        <ContourView contour={contour} color={initialColor} project={project} />
        <ContourView
          contour={transformed}
          color={resultColor}
          project={project}
        />
      </>
    )
  }
  const AB = () => {
    const elements = [
      <Text key={'A'} color={firstColor}>
        A
      </Text>,
      <Text key={'B'} color={secondColor}>
        B
      </Text>
    ]
    return reversed ? elements.reverse() : elements
  }
  const Matrices = () => {
    const elements = [
      <InBrackets
        key={'A'}
        color={firstColor}
        columns={firstMatrix.columns()}
      />,
      <InBrackets
        key={'B'}
        color={secondColor}
        columns={secondMatrix.columns()}
      />
    ]
    return reversed ? elements.reverse() : elements
  }
  const renderInformation = () => {
    return (
      <Expression>
        <Text color={resultColor}>C</Text>
        <AB />
        <Matrices />
        <InBrackets color={resultColor} columns={resultMatrix.columns()} />
      </Expression>
    )
  }
  const props = { renderInformation, renderGridContent }
  return <GridExample {...props} />
}

export default withTheme(LTExample)
