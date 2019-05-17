import React from 'react'
import styled, { withTheme } from 'styled-components'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'
import { withSize } from 'react-sizeme'

const View = styled.div`
  width: 100%;
  height: 100%;
`

class ThreeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      scene: undefined,
      camera: undefined,
      renderer: undefined
    }
  }

  render() {
    const Content = () => {
      const { renderView } = this.props
      const { scene, camera, renderer } = this.state
      if (scene) {
        const props = { scene, camera, renderer }
        return renderView(props)
      }
      return null
    }
    return (
      <>
        <View ref={el => (this.view = el)} />
        <Content />
      </>
    )
  }

  componentDidMount() {
    const {
      size: { width, height },
      theme
    } = this.props
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(100, width / height)
    camera.position.set(1, 1, 4)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(theme.color.background)
    renderer.setSize(width, height)
    this.view.appendChild(renderer.domElement)
    new OrbitControls(camera)
    this.setState({ width, height, scene, camera, renderer })
  }

  componentWillUnmount() {
    const { renderer } = this.state
    if (renderer) {
      this.view.removeChild(renderer.domElement)
    }
  }

  componentWillReceiveProps({ size: { width, height } }) {
    if (this.state.width !== width || this.state.height !== height) {
      this.setState({ width, height })
      this.renderer.setSize(width, height)
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
    }
  }
}

export default withTheme(withSize({ monitorHeight: true })(ThreeContainer))
