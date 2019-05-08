const { areEqual, toDegrees, sum } = require('./utils')

class Vector {
  constructor(...components) {
    this.components = components
  }
  add({ components }) {
    return new Vector(
      ...components.map((component, index) => this.components[index] + component)
    )
  }
  subtract({ components }) {
    return new Vector(
      ...components.map((component, index) => this.components[index] - component)
    )
  }
  scaleBy(number) {
    return new Vector(
      ...this.components.map(component => component * number)
    )
  }
  length() {
    return Math.hypot(...this.components)
  }
  dotProduct({ components }) {
    return components.reduce((acc, component, index) => acc + component * this.components[index], 0)
  }
  normalize() {
    return this.scaleBy(1 / this.length())
  }
  haveSameDirectionWith(other) {
    const dotProduct = this.normalize().dotProduct(other.normalize())
    return areEqual(dotProduct, 1)
  }
  haveOppositeDirectionTo(other) {
    const dotProduct = this.normalize().dotProduct(other.normalize())
    return areEqual(dotProduct, -1)
  }
  isPerpendicularTo(other) {
    const dotProduct = this.normalize().dotProduct(other.normalize())
    return areEqual(dotProduct, 0)
  }
  // 3D vectors only
  crossProduct({ components }) {
    return new Vector(
      this.components[1] * components[2] - this.components[2] * components[1],
      this.components[2] * components[0] - this.components[0] * components[2],
      this.components[0] * components[1] - this.components[1] * components[0]
    )
  }
  angleBetween(other) {
    return toDegrees(
      Math.acos(
        this.dotProduct(other) /
        (this.length() * other.length())
      )
    )
  }
  negate() {
    return this.scaleBy(-1)
  }
  withLength(newLength) {
    return this.normalize().scaleBy(newLength)
  }
  projectOn(other) {
    const normalized = other.normalize()
    return normalized.scaleBy(this.dotProduct(normalized))
  }
  equalTo({ components }) {
    return components.every((component, index) => areEqual(component, this.components[index]))
  }
  transform(matrix) {
    const columns = matrix.columns()
    if(columns.length !== this.components.length) {
      throw new Error('Matrix columns length should be equal to vector components length.')
    }

    const multiplied = columns
      .map((column, i) => column.map(c => c * this.components[i]))
    const newComponents = multiplied[0].map((_, i) => sum(multiplied.map(column => column[i])))
    return new Vector(...newComponents)
  }
}

module.exports = {
  Vector
}

