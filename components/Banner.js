import React from "react"
import styled from "styled-components"
import Topic from "./Topic"
import Text from "./Text"

const Container = styled.div`
  width: 100%;
  height: 350px;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div:nth-child(1) {
    display: none;
  }
  @media (max-width: 840px) {
    div:nth-child(1) {
      display: block;
    }
    div:nth-child(2) {
      display: none;
    }
    height: 250px;
  }
`

function Banner({ darkMode = false, style }) {
  return (
    <Container style={style}>
      <Topic style={{ textAlign: "center" }} level={1} darkMode={darkMode}>
        Wellcom !!
      </Topic>
      <Topic style={{ textAlign: "center" }} level={2} darkMode={darkMode}>
        Wellcom !!
      </Topic>
      <br></br>
      <Text style={{ textAlign: "center" }} darkMode={darkMode}>
        I’m wachirawit wacharak. This is my web blogs. Let’s enjoy it.
      </Text>
    </Container>
  )
}

export default Banner
