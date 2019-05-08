import React from 'react'
import styled from 'styled-components'

const Polygon = styled.polygon`
  fill: ${p => p.color};
  opacity: 0.2;
`

export default ({ contour, color, project }) => {
  const points = contour.map(project).vectors.map(v => v.components)
  return <Polygon points={points} color={color} />
}
