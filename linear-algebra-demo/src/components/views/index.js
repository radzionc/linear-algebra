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
import { default as MM } from './matrix-multiplication'
import { default as MMReversed } from './matrix-multiplication-reversed'
import { default as DeterminantScale } from './determinant-scale'
import { default as DeterminantShear } from './determinant-shear'
import { default as DeterminantNegative } from './determinant-negative'
import { default as DeterminantZero } from './determinant-zero'
import { default as View3D } from './3d'

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
  'linear transformation: shear': LTShear,
  'matrix-matrix multiplication: AB': MM,
  'matrix-matrix multiplication: BA': MMReversed,
  'determinant: scale transformation': DeterminantScale,
  'determinant: shear transformation': DeterminantShear,
  'determinant: negative': DeterminantNegative,
  'determinant: zero': DeterminantZero,
  '3D': View3D
}
