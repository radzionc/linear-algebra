import React from 'react'
import styled from 'styled-components'
import { Vector } from 'linear-algebra/vector'

const Arrow = styled.line`
  stroke-width: 2px;
  stroke: ${p => p.color};
`

const Head = styled.polygon`
  fill: ${p => p.color};
`

const Text = styled.text`
  font-size: 26px;
  fill: ${p => p.color};
`

export default ({ vector, text, color, project }) => {
  const direction = vector.normalize()

  const headStart = direction.scaleBy(vector.length() - 0.6)
  const headSide = new Vector(
    direction.components[1],
    -direction.components[0]
  ).scaleBy(0.2)
  const headPoints = [
    headStart.add(headSide),
    headStart.subtract(headSide),
    vector
  ]
    .map(project)
    .map(v => v.components)

  const projectedStart = project(new Vector(0, 0))
  const projectedEnd = project(vector)

  const PositionedText = () => {
    if (!text) return null
    const { components } = project(vector.withLength(vector.length() + 0.2))
    return (
      <Text color={color} x={components[0]} y={components[1]}>
        {text}
      </Text>
    )
  }
  return (
    <g>
      <Arrow
        color={color}
        x1={projectedStart.components[0]}
        y1={projectedStart.components[1]}
        x2={projectedEnd.components[0]}
        y2={projectedEnd.components[1]}
      />
      <Head color={color} points={headPoints} />
      <PositionedText />
    </g>
  )
}
