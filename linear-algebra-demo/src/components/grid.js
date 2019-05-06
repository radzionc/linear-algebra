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

const getSide = ({ width, height }) => Math.min(width, height) - MARGIN * 2

const getStepLen = ({ width, height }, units) => {
  const side = Math.min(width, height) - MARGIN * 2
  const middle = side / 2
  return middle / units
}

class Grid extends React.Component {
  render() {
    const { size, children, units = UNITS } = this.props
    const side = getSide(size)
    const middle = side / 2
    const stepLen = middle / units
    const steps = new Array(Math.floor(middle / stepLen))
      .fill(0)
      .reduce(
        (acc, _, i) => [...acc, stepLen * (i + 1), -stepLen * (i + 1)],
        []
      )

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
          <g>
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
          </g>
          {children}
        </svg>
      </Container>
    )
  }

  updateProjectToGrid = (size, units) => {
    const step = getStepLen(size, units)
    this.props.updateProjectToGrid(vector => {
      // we don't have transformation method in vector class yet, so:
      const scaled = vector.scaleBy(step)
      const withNegatedY = new Vector(
        scaled.components[0],
        -scaled.components[1]
      )
      const middle = getSide(size) / 2
      return withNegatedY.add(new Vector(middle, middle))
    })
  }

  componentWillReceiveProps({ size, units }) {
    if (this.props.updateProjectToGrid) {
      const newStepLen = getStepLen(size, units)
      const oldStepLen = getStepLen(this.props.size, units)
      if (newStepLen !== oldStepLen) {
        this.updateProjectToGrid(size, units)
      }
    }
  }

  componentDidMount() {
    if (this.props.updateProjectToGrid) {
      this.updateProjectToGrid(this.props.size, this.props.units)
    }
  }
}

export default withSize({ monitorHeight: true })(Grid)
