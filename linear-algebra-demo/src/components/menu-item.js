import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
  cursor: pointer;
  margin: 10px;
  color: ${p =>
    p.selected ? p.theme.color.mainText : p.theme.color.secondaryText};
  transition: 0.35s ease-in-out;
  &:hover {
    color: ${p => p.theme.color.mainText};
  }
`

export default ({ text, onClick, selected }) => (
  <Container onClick={onClick} selected={selected}>
    {text}
  </Container>
)
