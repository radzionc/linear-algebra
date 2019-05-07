import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import Grid from './grid'
import Arrow from './arrow'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: undefined
    }
  }
  render() {
    const Content = () => {
      const { project } = this.state
      if (!project) return null

      const one = new Vector(0, 5)
      const other = new Vector(6, 2)
      const sum = one.add(other)
      const { theme } = this.props
      return (
        <>
          <Arrow
            project={project}
            vector={one}
            text={'v⃗'}
            color={theme.color.green}
          />
          <Arrow
            project={project}
            vector={other}
            text={'w⃗'}
            color={theme.color.red}
          />
          <Arrow
            project={project}
            vector={sum}
            text={'v⃗ + w⃗'}
            color={theme.color.blue}
          />
        </>
      )
    }
    return (
      <Container>
        <Grid cells={10} updateProject={project => this.setState({ project })}>
          <Content />
        </Grid>
      </Container>
    )
  }
}

export default withTheme(Main)
