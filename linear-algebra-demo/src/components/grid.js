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

const getSide = ({ width, height }) => Math.min(width, height) - MARGIN * 2

const getStepLen = ({ width, height }, cells) => {
  const side = getSide({ width, height })
  const middle = side / 2
  return middle / cells
}

class Grid extends React.Component {
  render() {
    const { size, children, cells } = this.props
    const side = getSide(size)
    const middle = side / 2
    const stepLen = middle / cells
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

  updateProject = (size, cells) => {
    const step = getStepLen(size, cells)
    this.props.updateProject(vector => {
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

  componentWillReceiveProps({ size, cells }) {
    if (this.props.updateProject) {
      const newStepLen = getStepLen(size, cells)
      const oldStepLen = getStepLen(this.props.size, cells)
      if (newStepLen !== oldStepLen) {
        this.updateProject(size, cells)
      }
    }
  }

  componentDidMount() {
    if (this.props.updateProject) {
      this.updateProject(this.props.size, this.props.cells)
    }
  }
}

export default withSize({ monitorHeight: true })(Grid)
