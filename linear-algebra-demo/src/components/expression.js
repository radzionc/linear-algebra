import React from 'react'
import styled, { withTheme } from 'styled-components'

import Text from './text'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${p => p.color};
  margin: 10px;
  font-size: 24px;
`
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
    <Container>
      <Content />
    </Container>
  )
}

export default withTheme(Expression)
