import React from "react"
import Link from "next/link"
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

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  gap: 10px;
  * {
    text-decoration: none;
  }
`

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
          <Link href="https://www.facebook.com/tauhoo.ice">
            <a>
              <Text darkMode={true}>facebook</Text>
            </a>
          </Link>
          <Text darkMode={true}>|</Text>
          <Link href="https://github.com/Tauhoo">
            <a>
              <Text darkMode={true}>github</Text>
            </a>
          </Link>
          <Text darkMode={true}>|</Text>
          <Link href="mailto:tauhoo_ice@hotmail.com">
            <a>
              <Text darkMode={true}>tauhoo_ice@hotmail.com</Text>
            </a>
          </Link>
          <Text darkMode={true}>|</Text>
          <Text darkMode={true}>© {new Date().getFullYear()}</Text>
        </LinkContainer>
      </ContentContainer>
    </Container>
  )
}
