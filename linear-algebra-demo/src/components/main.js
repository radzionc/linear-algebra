import React from 'react'
import styled from 'styled-components'

import Grid from './grid'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Container>
    <Grid />
  </Container>
)
