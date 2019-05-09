import React from 'react'
import styled from 'styled-components'

const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Component = styled.p`
  color: ${p => p.color};
  margin: 4px;
`

const BracketsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 6px;
`

const Bracket = styled.div`
  width: 8px;
  border-top: 1px solid ${p => p.color};
  border-bottom: 1px solid ${p => p.color};
`

const LeftBracket = styled(Bracket)`
  border-left: 1px solid ${p => p.color};
`

const RightBracket = styled(Bracket)`
  border-right: 1px solid ${p => p.color};
`

export default ({ color, columns }) => {
  const Components = () =>
    columns.map((column, ci) => (
      <ComponentsContainer key={ci}>
        {column.map((component, i) => (
          <Component color={color} key={i}>
            {Number.isInteger(component) ? component : component.toFixed(2)}
          </Component>
        ))}
      </ComponentsContainer>
    ))

  return (
    <BracketsContainer>
      <LeftBracket color={color} />
      <Components />
      <RightBracket color={color} />
    </BracketsContainer>
  )
}
