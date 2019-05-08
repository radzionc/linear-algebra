class Contour {
  constructor(vectors) {
    this.vectors = vectors
  }

  transform(matrix) {
    const newVectors = this.vectors.map(v => v.transform(matrix))
    return new Contour(newVectors)
  }

  map(func) {
    return new Contour(this.vectors.map(func))
  }
}

module.exports = {
  Contour
}