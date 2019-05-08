import { default as VectorLength } from './vector-length'
import { default as VectorScale } from './vector-scale'
import { default as VectorsAddition } from './vectors-addition'
import { default as VectorsSubtraction } from './vectors-subtraction'
import { default as VectorsDotProduct } from './vectors-dot-product'
import { default as VectorLinearCombination } from './vector-linear-combination'
import { default as LTReflection } from './linear-transformation-reflection'
import { default as LTScale } from './linear-transformation-scale'
import { default as LTRotation } from './linear-transformation-rotation'
import { default as LTShear } from './linear-transformation-shear'

export default {
  'vectors: addition': VectorsAddition,
  'vectors: subtraction': VectorsSubtraction,
  'vectors: length': VectorLength,
  'vectors: scale': VectorScale,
  'vectors: dot product': VectorsDotProduct,
  'vectors: linear combination': VectorLinearCombination,
  'linear transformation: reflection': LTReflection,
  'linear transformation: scale': LTScale,
  'linear transformation: rotation': LTRotation,
  'linear transformation: shear': LTShear
}
