import React from 'react'
import { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import GridExample from '../grid-example'
import Arrow from '../arrow'
import VectorView from '../vector'

const VectorsAddition = ({ theme }) => {
  const i = new Vector(1, 0)
  const j = new Vector(0, 1)
  const firstCoeff = 2
  const secondCoeff = 5
  const linearCombination = i.scaleBy(firstCoeff).add(j.scaleBy(secondCoeff))

  const iName = 'i⃗'
  const iColor = theme.color.green
  const jName = 'j⃗'
  const jColor = theme.color.red
  const linearCombinationName = `v⃗ = ${firstCoeff}${iName} + ${secondCoeff}${jName}`
  const linearCombinationColor = theme.color.blue

  const renderInformation = () => (
    <>
      <VectorView components={i.components} name={iName} color={iColor} />
      <VectorView components={j.components} name={jName} color={jColor} />
      <VectorView
        components={linearCombination.components}
        name={linearCombinationName}
        color={linearCombinationColor}
      />
    </>
  )
  const renderGridContent = ({ project }) => (
    <>
      <Arrow project={project} vector={i} text={iName} color={iColor} />
      <Arrow project={project} vector={j} text={jName} color={jColor} />
      <Arrow
        project={project}
        vector={linearCombination}
        text={linearCombinationName}
        color={linearCombinationColor}
      />
    </>
  )
  const props = { renderInformation, renderGridContent }

  return <GridExample {...props} />
}

export default withTheme(VectorsAddition)
