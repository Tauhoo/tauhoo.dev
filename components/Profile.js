import React from "react"
import styled from "styled-components"
import TopicPart from "./TopicPart"
import Container from "./Container"
import Text from "./Text"
import colors from "../config/colors"
import { profile } from "../content/index"

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
  grid-template-rows: max-content 1fr;
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

export default function Profile({ darkMode }) {
  return (
    <Container
      style={{ background: darkMode ? colors.black : colors.lightGray }}
    >
      <ContainerBackground>
        <TopicPart
          darkMode={darkMode}
          topic={profile.topic}
          text={profile.text}
        ></TopicPart>
        <ContentContainer>
          {profile.posts.map(({ title, detail, key }) => (
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
