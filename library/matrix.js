const { sum } = require('./utils')

class Matrix {
  constructor(...rows) {
    this.rows = rows
  }
  columns() {
    return this.rows[0].map((_, i) => this.rows.map(r => r[i]))
  }
  componentWiseOperation(func, { rows }) {
    const newRows = rows.map((row, i) =>
      row.map((element, j) => func(this.rows[i][j], element))
    )
    return new Matrix(...newRows)
  }
  add(other) {
    return this.componentWiseOperation((a, b) => a + b, other)
  }
  subtract(other) {
    return this.componentWiseOperation((a, b) => a - b, other)
  }
  scaleBy(number) {
    const newRows = this.rows.map(row =>
      row.map(element => element * number)
    )
    return new Matrix(...newRows)
  }
  multiply(other) {
    if (this.rows[0].length !== other.rows.length) {
      throw new Error('The number of columns of this matrix is not equal to the number of rows of the given matrix.')
    }
    const columns = other.columns()
    const newRows = this.rows.map(row => 
      columns.map(column => sum(row.map((element, i) => element * column[i])))
    )

    return new Matrix(...newRows)
  }
  transpose() {
    return new Matrix(...this.columns())
  }
  determinant() {
    if (this.rows.length !== this.rows[0].length) {
      throw new Error('Only matrices with the same number of rows and columns are supported.')
    }
    if (this.rows.length === 2) {
      return this.rows[0][0] * this.rows[1][1] - this.rows[0][1] * this.rows[1][0]
    }

    const parts = this.rows[0].map((coef, index) => {
      const matrixRows = this.rows.slice(1).map(row => [ ...row.slice(0, index), ...row.slice(index + 1)])
      const matrix = new Matrix(...matrixRows)
      const result = coef * matrix.determinant()
      return index % 2 === 0 ? result : -result
    })

    return sum(parts)
  }
}

module.exports = {
  Matrix
}

