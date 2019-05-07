import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Vector } from 'linear-algebra/vector'

import Grid from './grid'

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

const InfoContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
    const { renderInformation, renderGridContent } = this.props
    const Content = () => {
      if (project && renderGridContent) {
        return renderGridContent({ project })
      }
      return null
    }
    const Information = () => {
      if (renderInformation) {
        return renderInformation()
      }
      return null
    }
    return (
      <Container>
        <Grid cells={10} updateProject={project => this.setState({ project })}>
          <Content />
        </Grid>
        <InfoContainer>
          <Information />
        </InfoContainer>
      </Container>
    )
  }
}

export default withTheme(Main)
