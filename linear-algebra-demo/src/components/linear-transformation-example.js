import React from 'react'
import { withTheme } from 'styled-components'
import { Contour } from 'linear-algebra/contour'
import { Vector } from 'linear-algebra/vector'

import GridExample from './grid-example'
import BracketedView from './bracketed'
import ContourView from './contour'

const contour = new Contour([
  new Vector(0, 0),
  new Vector(0, 4),
  new Vector(4, 4),
  new Vector(4, 0)
])

const LTExample = ({ theme, matrix }) => {
  const transformedColor = theme.color.blue
  const renderGridContent = ({ project }) => {
    const transformed = contour.transform(matrix)
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
      <BracketedView
        name="T"
        columns={matrix.columns()}
        color={transformedColor}
      />
    )
  }
  const props = { renderInformation, renderGridContent }
  return <GridExample {...props} />
}

export default withTheme(LTExample)
