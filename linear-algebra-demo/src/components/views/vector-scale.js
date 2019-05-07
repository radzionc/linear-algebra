import React from 'react'
import { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import GridExample from '../grid-example'
import Arrow from '../arrow'
import VectorView from '../vector'

const VectorsAddition = ({ theme }) => {
  const vector = new Vector(2, 4)
  const name = 'v⃗'
  const color = theme.color.green

  const firstScale = 0.5
  const firstScaleVector = vector.scaleBy(firstScale)
  const firstScaleName = `${firstScale}${name}`
  const firstScaleColor = theme.color.red

  const secondScale = -2
  const secondScaleVector = vector.scaleBy(secondScale)
  const secondScaleName = `${secondScale}${name}`
  const secondScaleColor = theme.color.blue

  const renderInformation = () => (
    <>
      <VectorView components={vector.components} name={name} color={color} />
      <VectorView
        components={firstScaleVector.components}
        name={firstScaleName}
        color={firstScaleColor}
      />
      <VectorView
        components={secondScaleVector.components}
        name={secondScaleName}
        color={secondScaleColor}
      />
    </>
  )
  const renderGridContent = ({ project }) => (
    <>
      <Arrow project={project} vector={vector} text={name} color={color} />
      <Arrow
        project={project}
        vector={firstScaleVector}
        text={firstScaleName}
        color={firstScaleColor}
      />
      <Arrow
        project={project}
        vector={secondScaleVector}
        text={secondScaleName}
        color={secondScaleColor}
      />
    </>
  )
  const props = { renderInformation, renderGridContent }

  return <GridExample {...props} />
}

export default withTheme(VectorsAddition)
