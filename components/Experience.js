import React from "react"
import styled from "styled-components"
import Container from "./Container"
import ExperienceCard from "./ExperienceCard"
import TopicPart from "./TopicPart"

const ContentContainer = styled.div`
  width: 100%;
  padding: 40px 0px;
  @media (max-width: 840px) {
    padding: 30px 0px;
  }
`

const ExperienceContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`

export default function Experience({ darkMode }) {
  return (
    <Container>
      <ContentContainer>
        <TopicPart
          darkMode={darkMode}
          topic="Experience"
          text="I’ll tell you what I have done in my life."
        ></TopicPart>
        <ExperienceContainer>
          <ExperienceCard
            darkMode={darkMode}
            src="https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0"
            title="I’ll tell you what I have done in my life."
            detail="I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life."
          ></ExperienceCard>
          <ExperienceCard
            darkMode={darkMode}
            src="https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0"
            title="I’ll tell you what I have done in my life."
            detail="I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life."
          ></ExperienceCard>
          <ExperienceCard
            darkMode={darkMode}
            src="https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0"
            title="I’ll tell you what I have done in my life."
            detail="I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life.I’ll tell you what I have done in my life."
          ></ExperienceCard>
        </ExperienceContainer>
      </ContentContainer>
    </Container>
  )
}
