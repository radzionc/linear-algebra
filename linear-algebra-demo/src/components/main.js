import React from 'react'
import styled from 'styled-components'

import views from './views'
import MenuItem from './menu-item'

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

const Menu = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: Object.keys(views)[0]
    }
  }

  render() {
    const { view } = this.state
    const View = views[view]
    const viewsNames = Object.keys(views)
    const MenuItems = () =>
      viewsNames.map(name => (
        <MenuItem
          key={name}
          selected={name === view}
          text={name}
          onClick={() => this.setState({ view: name })}
        />
      ))
    return (
      <Container>
        <View />
        <Menu>
          <MenuItems />
        </Menu>
      </Container>
    )
  }
}

export default Main
