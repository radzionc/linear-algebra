import React from 'react'
import { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import GridExample from '../grid-example'
import Arrow from '../arrow'
import BracketedView from '../bracketed'
import Declaration from '../declaration'

const VectorsDotProduct = ({ theme }) => {
  const one = new Vector(0, 5)
  const other = new Vector(6, 2)
  const oneName = 'v⃗'
  const otherName = 'w⃗'
  const oneColor = theme.color.green
  const otherColor = theme.color.red
  const dotProduct = one.dotProduct(other).toFixed(2)

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
      <Declaration left={'v⃗ · w⃗'} right={dotProduct} />
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

export default withTheme(VectorsDotProduct)
