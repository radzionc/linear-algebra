import * as THREE from 'three'
import { Matrix } from 'linear-algebra/matrix'

export const toMatrix4 = matrix => {
  const matrix4 = new THREE.Matrix4()
  matrix4.set(...matrix.components())
  return matrix4
}

export const fromMatrix4 = matrix4 => {
  const components = matrix4.toArray()
  const rows = new Array(4)
    .fill(0)
    .map((_, i) => components.slice(i * 4, (i + 1) * 4))
  return new Matrix(...rows)
}
