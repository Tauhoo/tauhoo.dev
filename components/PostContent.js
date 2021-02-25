import React from "react"
import styled from "styled-components"
import Text from "./Text"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  gap: 20px;
  @media (max-width: 840px) {
    gap: 10px;
  }
`

export default function PostContent({
  title,
  detail,
  tag = [],
  darkMode = false,
}) {
  return (
    <Container>
      <Text bold highlight darkMode={darkMode}>
        {title}
      </Text>
      <Text darkMode={darkMode}>{detail}</Text>
      <Text highlight darkMode={darkMode}>
        {tag.length > 0 ? tag.join() : null}
      </Text>
    </Container>
  )
}
