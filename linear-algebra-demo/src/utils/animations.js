import { hexToRgb, rgbToHex } from './generic'

export const getGetAnimatedColor = (fromColor, toColor, period) => {
  const fromRgb = hexToRgb(fromColor)
  const toRgb = hexToRgb(toColor)
  const distances = fromRgb.map((fromPart, index) => {
    const toPart = toRgb[index]
    return fromPart <= toPart ? toPart - fromPart : 255 - fromPart + toPart
  })
  return function() {
    if (!this.start) {
      this.start = Date.now()
    }
    const now = Date.now()
    const timePassed = now - this.start
    if (timePassed > period) return toColor

    const animatedDistance = timePassed / period
    const rgb = fromRgb.map((fromPart, index) => {
      const distance = distances[index]
      const step = distance * animatedDistance
      return Math.round((fromPart + step) % 255)
    })
    return rgbToHex(...rgb)
  }
}

export const getGetAnimatedTransformation = (fromMatrix, toMatrix, period) => {
  const distances = toMatrix.subtract(fromMatrix)
  return function() {
    if (!this.start) {
      this.start = Date.now()
    }
    const now = Date.now()
    const timePassed = now - this.start
    if (timePassed > period) return toMatrix

    const animatedDistance = timePassed / period
    const newMatrix = fromMatrix.map((fromComponent, i, j) => {
      const distance = distances.rows[i][j]
      const step = distance * animatedDistance
      return fromComponent + step
    })
    return newMatrix
  }
}
