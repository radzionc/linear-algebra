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
      projectToGrid: undefined
    }
  }
  render() {
    const Content = () => {
      const { projectToGrid } = this.state
      if (!projectToGrid) return null

      const start = projectToGrid(new Vector(0, 0))
      const one = projectToGrid(new Vector(4, 5))
      const other = projectToGrid(new Vector(6, 2))
      const { theme } = this.props
      return (
        <>
          <Arrow start={start} end={one} text={'v'} color={theme.color.green} />
          <Arrow start={start} end={other} text={'w'} color={theme.color.red} />
        </>
      )
    }
    return (
      <Container>
        <Grid
          units={10}
          updateProjectToGrid={projectToGrid =>
            this.setState({ projectToGrid })
          }
        >
          <Content />
        </Grid>
      </Container>
    )
  }
}

export default withTheme(Main)
