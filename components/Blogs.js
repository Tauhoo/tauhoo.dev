import React from "react"
import styled from "styled-components"
import Container from "./Container"
import PostCard from "./PostCard"
import TopicPart from "./TopicPart"

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 40px;
  gap: 40px;
  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const postData = [
  {
    title: "How to create React project in 3 min easily",
    detail:
      "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
    src:
      "https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0",
    tag: ["React", "Web technology"],
    key: "0",
  },
  {
    title: "How to create React project in 3 min easily",
    detail:
      "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
    src:
      "https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0",
    tag: ["React", "Web technology"],
    key: "1",
  },
  {
    title: "How to create React project in 3 min easily",
    detail:
      "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
    src:
      "https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0",
    tag: ["React", "Web technology"],
    key: "2",
  },
]

export default function Blogs({ darkMode = false }) {
  return (
    <Container style={{ padding: "40px 0px" }}>
      <TopicPart
        darkMode={darkMode}
        topic="Blogs"
        text="They are article about what I am interested."
      ></TopicPart>
      <ContentContainer>
        {postData.map(props => (
          <PostCard {...props} darkMode={darkMode}></PostCard>
        ))}
      </ContentContainer>
    </Container>
  )
}
