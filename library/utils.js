const { EPSILON } = require('./constants')

const areEqual = (one, other, epsilon = EPSILON) =>
  Math.abs(one - other) < epsilon

const toDegrees = radians => (radians * 180) / Math.PI
const toRadians = degrees => (degrees * Math.PI) / 180

module.exports = {
  areEqual,
  toDegrees,
  toRadians
}

