import styled from 'styled-components'

export default styled.p`
  color: ${p => p.color};
  margin-right: ${p => (p.noMargin ? '0px' : '6px')};
`
