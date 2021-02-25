import React from "react"
import styled from "styled-components"
import Background from "./Background"
import Text from "../Text"

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  margin-top: 50px;
  @media (max-width: 840px) {
    height: 70px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkContainer = styled.div``

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
        <LinkContainer>
          <Text darkMode={true}>
            facebook | github | tauhoo_ice@hotmail.com
          </Text>
        </LinkContainer>
      </ContentContainer>
    </Container>
  )
}
