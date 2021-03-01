import React from "react"
import styled from "styled-components"
import Container from "./Container"
import ExperienceCard from "./ExperienceCard"
import TopicPart from "./TopicPart"
import { experience } from "../content/index"
import Text from "./Text"

const ContentContainer = styled.div`
  width: 100%;
  padding: 40px 0px;
  @media (max-width: 840px) {
    padding: 30px 0px;
  }
`

const ExperienceContainer = styled.div`
  width: 100%;
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
        {experience.years.map(({ posts, year }) => {
          return (
            <div key={year}>
              <Text
                darkMode={darkMode}
                style={{ textAlign: "center", margin: "50px 0px" }}
              >
                {year}
              </Text>
              <ExperienceContainer>
                {posts.map(({ title, detail, src, key }) => (
                  <ExperienceCard
                    darkMode={darkMode}
                    src={src}
                    title={title}
                    detail={detail}
                    key={key}
                  ></ExperienceCard>
                ))}
              </ExperienceContainer>
            </div>
          )
        })}
      </ContentContainer>
    </Container>
  )
}
