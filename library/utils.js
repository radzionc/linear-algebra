const { EPSILON } = require('./constants')

const areEqual = (one, other, epsilon = EPSILON) =>
  Math.abs(one - other) < epsilon

const toDegrees = radians => (radians * 180) / Math.PI
const toRadians = degrees => (degrees * Math.PI) / 180
const sum = arr => arr.reduce((acc, value) => acc + value, 0)
const withoutElementAtIndex = (arr, index) => [ ...arr.slice(0, index), ...arr.slice(index + 1) ]

module.exports = {
  areEqual,
  toDegrees,
  toRadians,
  sum,
  withoutElementAtIndex
}

