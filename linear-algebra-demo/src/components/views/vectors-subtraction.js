import React from 'react'
import { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import GridExample from '../grid-example'
import Arrow from '../arrow'
import BracketedView from '../bracketed'

const VectorsAddition = ({ theme }) => {
  const one = new Vector(0, 5)
  const other = new Vector(6, 2)
  const oneName = 'v⃗'
  const otherName = 'w⃗'
  const oneColor = theme.color.green
  const otherColor = theme.color.red
  const sum = one.subtract(other)
  const differenceColor = theme.color.blue
  const differenceText = `${oneName} - ${otherName}`

  const renderInformation = () => (
    <>
      <BracketedView
        columns={[one.components]}
        name={oneName}
        color={oneColor}
      />
      <BracketedView
        columns={[other.components]}
        name={otherName}
        color={otherColor}
      />
      <BracketedView
        columns={[sum.components]}
        name={differenceText}
        color={differenceColor}
      />
    </>
  )
  const renderGridContent = ({ project }) => (
    <>
      <Arrow project={project} vector={one} text={oneName} color={oneColor} />
      <Arrow
        project={project}
        vector={other}
        text={otherName}
        color={otherColor}
      />
      <Arrow
        project={project}
        vector={sum}
        text={differenceText}
        color={differenceColor}
      />
    </>
  )
  const props = { renderInformation, renderGridContent }

  return <GridExample {...props} />
}

export default withTheme(VectorsAddition)
