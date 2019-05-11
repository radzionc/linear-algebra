import React from 'react'
import styled, { withTheme } from 'styled-components'
import * as THREE from 'three'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))

const rgbToHex = (r, g, b) =>
  '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')

const getGetAnimatedColor = (fromColor, toColor, period = 4000) => {
  const fromRgb = hexToRgb(fromColor)
  const toRgb = hexToRgb(toColor)
  const distances = fromRgb.map((fromPart, index) => {
    const toPart = toRgb[index]
    return fromPart <= toPart ? toPart - fromPart : 255 - fromPart + toPart
  })
  const start = Date.now()
  return () => {
    const now = Date.now()
    const timePassed = now - start
    if (timePassed > period) return toColor

    const animatedDistance = timePassed / period
    const rgb = fromRgb.map((fromPart, index) => {
      const distance = distances[index]
      const step = distance * animatedDistance
      return Math.round((fromPart + step) % 255)
    })
    console.log(rgb)
    return rgbToHex(...rgb)
  }
}

class ThreeScene extends React.Component {
  render() {
    return <Container ref={el => (this.container = el)} />
  }

  componentDidMount() {
    const { width, height } = this.container.getBoundingClientRect()
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(100, width / height)
    this.camera.position.z = 5
    this.camera.position.x = 1
    this.camera.position.y = 1

    const { theme } = this.props
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor(theme.color.background)
    this.renderer.setSize(width, height)
    this.container.appendChild(this.renderer.domElement)

    const axes = new THREE.AxesHelper(5)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const edges = new THREE.EdgesGeometry(geometry)
    this.line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: theme.color.mainFont })
    )
    this.getAnimatedColor = getGetAnimatedColor(
      theme.color.red,
      theme.color.purple
    )
    const material = new THREE.MeshBasicMaterial({ color: theme.color.red })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube, this.line, axes)
    this.frameId = requestAnimationFrame(this.animate)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId)
    this.container.removeChild(this.renderer.domElement)
  }

  animate = () => {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.line.rotation.x += 0.01
    this.line.rotation.y += 0.01
    this.cube.material.color.set(this.getAnimatedColor())
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate)
  }
}

export default withTheme(ThreeScene)
