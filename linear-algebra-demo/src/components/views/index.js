import { default as VectorLength } from './vector-length'
import { default as VectorScale } from './vector-scale'
import { default as VectorsAddition } from './vectors-addition'
import { default as VectorsSubtraction } from './vectors-subtraction'
import { default as VectorsDotProduct } from './vectors-dot-product'
import { default as VectorLinearCombination } from './vector-linear-combination'

export default {
  'vectors: addition': VectorsAddition,
  'vectors: subtraction': VectorsSubtraction,
  'vectors: length': VectorLength,
  'vectors: scale': VectorScale,
  'vectors: dot product': VectorsDotProduct,
  'vector: linear combination': VectorLinearCombination
}
