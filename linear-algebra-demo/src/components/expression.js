import React from 'react'
import { withTheme } from 'styled-components'

import Text from './text'
import ExpressionPart from './expression-part'

const Expression = ({ children, theme, color = theme.color.mainText }) => {
  const Content = () =>
    children.reduce((acc, component, i) => {
      if (i === children.length - 1) return [...acc, component]
      return [
        ...acc,
        component,
        <Text key={i} color={color}>
          {' '}
          ={' '}
        </Text>
      ]
    }, [])
  return (
    <ExpressionPart>
      <Content />
    </ExpressionPart>
  )
}

export default withTheme(Expression)
