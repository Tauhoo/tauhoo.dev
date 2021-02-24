import React from "react"
import styled from "styled-components"
import TopicPart from "./TopicPart"
import Topic from "./Topic"
import Container from "./Container"
import Text from "./Text"
import colors from "../config/colors"

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 40px;
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`

const ContainerBackground = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 40px 0px;
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 30px 0px;
  }
`

const profile = [
  {
    title: "How to create React project in 3 min easily",
    detail:
      "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
    key: "0",
  },
  {
    title: "How to create React project in 3 min easily",
    detail:
      "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
    key: "1",
  },
  {
    title: "How to create React project in 3 min easily",
    detail:
      "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
    key: "2",
  },
]

export default function Profile({ darkMode }) {
  return (
    <Container
      style={{ background: darkMode ? colors.black : colors.lightGray }}
    >
      <ContainerBackground>
        <TopicPart
          darkMode={darkMode}
          topic="Profile"
          text="Let’s me introduce myself."
        ></TopicPart>
        <ContentContainer>
          {profile.map(({ title, detail, key }) => (
            <Wrapper key={key}>
              <Text highlight bold darkMode={darkMode}>
                {title}
              </Text>
              <Text darkMode={darkMode}>{detail}</Text>
            </Wrapper>
          ))}
        </ContentContainer>
      </ContainerBackground>
    </Container>
  )
}
