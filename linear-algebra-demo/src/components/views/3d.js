import React from 'react'
import styled, { withTheme } from 'styled-components'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'
import { Matrix } from 'linear-algebra/matrix'

import {
  getGetAnimatedColor,
  getGetAnimatedTransformation
} from '../../utils/animations'
import { toMatrix4, fromMatrix4 } from '../../utils/three'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const matrix = new Matrix([1, 2, 0], [0, 1, 0], [0, 0, 1])

const period = 5000

class ThreeScene extends React.Component {
  render() {
    return <Container ref={el => (this.container = el)} />
  }

  componentDidMount() {
    const { width, height } = this.container.getBoundingClientRect()
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(100, width / height)
    this.camera.position.set(1, 1, 4)

    const { theme } = this.props
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor(theme.color.background)
    this.renderer.setSize(width, height)
    this.container.appendChild(this.renderer.domElement)

    const initialColor = theme.color.red
    const axes = new THREE.AxesHelper(4)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    this.segments = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: theme.color.mainText })
    )
    this.cube = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: initialColor })
    )
    this.objects = [this.cube, this.segments]
    this.objects.forEach(obj => (obj.matrixAutoUpdate = false))
    this.scene.add(this.cube, axes, this.segments)

    this.controls = new OrbitControls(this.camera)

    this.getAnimatedColor = getGetAnimatedColor(
      initialColor,
      theme.color.blue,
      period
    )
    const fromMatrix = fromMatrix4(this.cube.matrix)
    const toMatrix = matrix.toDimension(4)
    this.getAnimatedTransformation = getGetAnimatedTransformation(
      fromMatrix,
      toMatrix,
      period
    )
    this.frameId = requestAnimationFrame(this.animate)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId)
    this.container.removeChild(this.renderer.domElement)
  }

  animate = () => {
    const transformation = this.getAnimatedTransformation()
    const matrix4 = toMatrix4(transformation)
    this.cube.material.color.set(this.getAnimatedColor())
    this.objects.forEach(obj => obj.matrix.set(...matrix4.toArray()))
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate)
  }
}

export default withTheme(ThreeScene)
