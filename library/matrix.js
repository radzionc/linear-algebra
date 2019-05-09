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
}

module.exports = {
  Matrix
}

