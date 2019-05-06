import React from 'react'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'
import { Vector } from 'linear-algebra/vector'

import GridLine from './grid-line'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MARGIN = 10
const UNITS = 20

const Grid = ({ children, size }) => {
  const side = Math.min(size.width, size.height) - MARGIN * 2
  const middle = side / 2
  const stepLen = middle / UNITS
  const steps = new Array(Math.floor(middle / stepLen))
    .fill(0)
    .reduce((acc, _, i) => [...acc, stepLen * (i + 1), -stepLen * (i + 1)], [])

  const XLines = () =>
    steps.map((step, i) => (
      <GridLine
        key={i}
        start={new Vector(middle + step, 0)}
        end={new Vector(middle + step, side)}
      />
    ))
  const YLines = () =>
    steps.map((step, i) => (
      <GridLine
        key={i}
        start={new Vector(0, middle + step)}
        end={new Vector(side, middle + step)}
      />
    ))

  return (
    <Container>
      <svg width={side} height={side}>
        <GridLine
          main
          start={new Vector(middle, 0)}
          end={new Vector(middle, side)}
        />
        <GridLine
          main
          start={new Vector(0, middle)}
          end={new Vector(side, middle)}
        />
        <XLines />
        <YLines />
        {children}
      </svg>
    </Container>
  )
}

export default withSize({ monitorHeight: true })(Grid)
