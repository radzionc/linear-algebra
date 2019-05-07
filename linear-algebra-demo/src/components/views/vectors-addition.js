import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import Grid from '../grid'
import Arrow from '../arrow'
import VectorView from '../vector'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  flex-direction: row;
  position: relative;
`

const VectorsContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    const { theme } = props
    this.state = {
      oneColor: theme.color.green,
      otherColor: theme.color.red,
      oneName: 'v⃗',
      otherName: 'w⃗',
      one: new Vector(0, 5),
      other: new Vector(6, 2),
      project: undefined
    }
  }
  render() {
    const { project } = this.state
    const { theme } = this.props

    const one = new Vector(0, 5)
    const other = new Vector(6, 2)
    const oneName = 'v⃗'
    const otherName = 'w⃗'
    const oneColor = theme.color.green
    const otherColor = theme.color.red
    const sum = one.add(other)
    const sumColor = theme.color.blue
    const sumText = `${oneName} + ${otherName}`
    const Content = () => {
      if (!project) return null
      return (
        <>
          <Arrow
            project={project}
            vector={one}
            text={oneName}
            color={oneColor}
          />
          <Arrow
            project={project}
            vector={other}
            text={otherName}
            color={otherColor}
          />
          <Arrow
            project={project}
            vector={sum}
            text={sumText}
            color={sumColor}
          />
        </>
      )
    }
    return (
      <Container>
        <Grid cells={10} updateProject={project => this.setState({ project })}>
          <Content />
        </Grid>
        <VectorsContainer>
          <VectorView
            components={one.components}
            name={oneName}
            color={oneColor}
          />
          <VectorView
            components={other.components}
            name={otherName}
            color={otherColor}
          />
          <VectorView
            components={sum.components}
            name={sumText}
            color={sumColor}
          />
        </VectorsContainer>
      </Container>
    )
  }
}

export default withTheme(Main)
