import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: ${p => p.color};
  margin: 10px;
  font-size: 24px;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  color: ${p => p.color};
  margin-right: 6px;
`

const Component = styled.p`
  color: ${p => p.color};
  margin: 4px;
`

const BracketsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Bracket = styled.div`
  height: 100%;
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

const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default ({ columns, name, color }) => {
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
    <Container>
      <TextContainer>
        <Text color={color}>{name} = </Text>
      </TextContainer>
      <BracketsContainer>
        <LeftBracket color={color} />
        <Components />
        <RightBracket color={color} />
      </BracketsContainer>
    </Container>
  )
}
