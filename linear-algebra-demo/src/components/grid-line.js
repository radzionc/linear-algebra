import React from 'react'
import styled from 'styled-components'

const Line = styled.line`
  stroke-width: ${p => (p.main ? '1px' : '0.4px')};
  stroke: ${p =>
    p.main ? p.theme.color.mainText : p.theme.color.secondaryText};
`

export default ({ start, end, main = false }) => {
  return (
    <Line
      main={main}
      x1={start.components[0]}
      y1={start.components[1]}
      x2={end.components[0]}
      y2={end.components[1]}
    />
  )
}
