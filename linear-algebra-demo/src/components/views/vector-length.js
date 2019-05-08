import React from 'react'
import { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import GridExample from '../grid-example'
import Arrow from '../arrow'
import BracketedView from '../bracketed'
import Declaration from '../declaration'

const VectorsAddition = ({ theme }) => {
  const one = new Vector(0, 5)
  const oneName = 'v⃗'
  const oneColor = theme.color.green

  const other = new Vector(6, 2)
  const otherName = 'w⃗'
  const otherColor = theme.color.red

  const renderInformation = () => (
    <>
      <BracketedView
        columns={[one.components]}
        name={oneName}
        color={oneColor}
      />
      <Declaration text={`||v⃗|| = ${one.length().toFixed(2)}`} />
      <BracketedView
        columns={[other.components]}
        name={otherName}
        color={otherColor}
      />
      <Declaration text={`||v⃗|| = ${other.length().toFixed(2)}`} />
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
    </>
  )
  const props = { renderInformation, renderGridContent }

  return <GridExample {...props} />
}

export default withTheme(VectorsAddition)
