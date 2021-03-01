import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Background from "./Background"
import Text from "../Text"
import { data } from "../../content/contact"

const Container = styled.div`
  width: 100%;
  padding: 45px 0px;
  position: relative;
  margin-top: 50px;
  @media (max-width: 840px) {
    padding: 30px 0px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkContainer = styled.div`
  z-index: 998;
  display: grid;
  grid-template-columns: repeat(7, max-content);
  gap: 10px;
  justify-items: center;
  * {
    text-decoration: none;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

const TextPipeContainer = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`

const render = source => {
  const result = []
  for (let index = 0; index < source.length; index++) {
    const { text, link, key } = source[index]
    result.push(
      <Link href={link} key={key}>
        <a>
          <Text darkMode={true}>{text}</Text>
        </a>
      </Link>
    )
    if (index !== source.length - 1)
      result.push(
        <TextPipeContainer key={key + "_pipe"}>
          <Text darkMode={true}>|</Text>
        </TextPipeContainer>
      )
  }
  return result
}

export default function Footer({ darkMode = false }) {
  return (
    <Container>
      <Background
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          height: "100%",
          width: "100%",
        }}
      ></Background>
      <ContentContainer>
        <LinkContainer>{render(data)}</LinkContainer>
      </ContentContainer>
    </Container>
  )
}
