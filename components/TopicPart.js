import React from "react"
import styled from "styled-components"
import Text from "./Text"
import Topic from "./Topic"

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  width: 100%;
  gap: 20px;
  justify-items: center;
  align-items: center;
  @media (max-width: 840px) {
    > div:nth-child(2) {
      display: none;
    }
    > div:nth-child(3) {
      display: none;
    }
  }
`

function TopicPart({ topic, text, darkMode = false }) {
  return (
    <Container>
      <Topic level={0} darkMode={darkMode}>
        {topic}
      </Topic>
      <Topic darkMode={darkMode}>|</Topic>
      <Text darkMode={darkMode}>{text}</Text>
    </Container>
  )
}

export default TopicPart
