import React from "react"
import styled from "styled-components"
import Container from "./Container"
import PostCard from "./PostCard"
import TopicPart from "./TopicPart"
import { blogs } from "../content/index"

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 40px;
  gap: 40px;
  @media (max-width: 1140px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`

export default function Blogs({ darkMode = false }) {
  return (
    <Container style={{ padding: "40px 0px" }}>
      <TopicPart
        darkMode={darkMode}
        topic={blogs.topic}
        text={blogs.text}
      ></TopicPart>
      <ContentContainer>
        {blogs.posts.map(props => (
          <PostCard {...props} darkMode={darkMode}></PostCard>
        ))}
      </ContentContainer>
    </Container>
  )
}
