import React from 'react'
import styled from 'styled-components'

const Arrow = styled.line`
  stroke-width: 2px;
  stroke: ${p => p.color};
`

const Text = styled.text`
  color: ${p => p.color};
`

export default ({ start, end, text, color }) => {
  return (
    <>
      <Arrow
        color={color}
        x1={start.components[0]}
        y1={start.components[1]}
        x2={end.components[0]}
        y2={end.components[1]}
      />
      <Text color={color}>{text}</Text>
    </>
  )
}
