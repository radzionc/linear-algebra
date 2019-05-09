import React from 'react'

import Expression from './expression'
import InBrackets from './in-brackets'
import Text from './text'

export default ({ columns, name, color }) => (
  <Expression color={color}>
    <Text color={color}>{name}</Text>
    <InBrackets columns={columns} color={color} />
  </Expression>
)
