import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: ${p => p.color || p.theme.color.mainFont};
  margin: 10px;
`

export default ({ text, color }) => <Container color={color}>{text}</Container>
