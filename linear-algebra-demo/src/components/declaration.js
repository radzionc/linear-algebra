import React from 'react'
import styled from 'styled-components'

import Expression from './expression'

const Text = styled.p`
  color: ${p => p.color};
  margin-right: 6px;
`

export default ({ left, right, color }) => (
  <Expression color={color}>
    <Text>{left}</Text>
    <Text>{right}</Text>
  </Expression>
)
