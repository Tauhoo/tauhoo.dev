import React from "react"
import styled from "styled-components"
import Image from "./Image"
import Text from "./Text"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 50px;

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 40px;
  }
`

const ContainerContent = styled.div``
const ContainerImage = styled.div`
  width: 100px;
  height: 100px;
`

export default function ExperienceCard({
  darkMode = false,
  title,
  detail,
  src,
}) {
  return (
    <Container>
      <ContainerImage>
        <Image src={src}></Image>
      </ContainerImage>
      <ContainerContent>
        <Text highlight darkMode={darkMode} bold>
          {title}
        </Text>
        <Text darkMode={darkMode}>{detail}</Text>
      </ContainerContent>
    </Container>
  )
}
