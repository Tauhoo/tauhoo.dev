import React from "react"
import styled from "styled-components"
import Background from "./Background"
import Text from "../Text"

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  left: 0px;
  @media (max-width: 840px) {
    height: 70px;
  }
`

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
`

const MenuLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 600px;
  height: 100%;
  justify-items: center;
  align-items: center;
  > a {
    text-decoration: none;
  }

  @media (max-width: 840px) {
    a:not(a:nth-child(3)) {
      display: none;
    }
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export default function Navbar({ darkMode = false }) {
  return (
    <Container>
      <Background
        darkMode={darkMode}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      ></Background>
      <MenuContainer>
        <MenuLayout>
          <a href="">
            <Text darkMode={true}>Blogs</Text>
          </a>
          <a href="">
            <Text darkMode={true}>Profile</Text>
          </a>
          <a href="">
            <Text darkMode={true}>Tauhoo</Text>
          </a>
          <a href="">
            <Text darkMode={true}>Experience</Text>
          </a>
          <a href="">
            <Text darkMode={true}>Contact</Text>
          </a>
        </MenuLayout>
      </MenuContainer>
    </Container>
  )
}
