import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
  cursor: pointer;
  color: ${p =>
    p.selected ? p.theme.color.mainText : p.theme.color.secondaryText};
`

export default ({ text, onClick, selected }) => (
  <Container onClick={onClick} selected={selected}>
    {text}
  </Container>
)
