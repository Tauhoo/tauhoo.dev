import React from "react"
import styled from "styled-components"
import Topic from "./Topic"
import Text from "./Text"

const Container = styled.div`
  width: 100%;
  padding: 80px 20px;
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
    padding: 30px 20px;
  }
`

function Banner({ darkMode = false, style }) {
  return (
    <Container style={style}>
      <Topic style={{ textAlign: "center" }} level={1} darkMode={darkMode}>
        Wellcome !!
      </Topic>
      <Topic style={{ textAlign: "center" }} level={2} darkMode={darkMode}>
        Wellcome !!
      </Topic>
      <br></br>
      <Text style={{ textAlign: "center" }} darkMode={darkMode}>
        I’m wachirawit wacharak. This is my web blogs. Let’s enjoy it.
      </Text>
    </Container>
  )
}

export default Banner
