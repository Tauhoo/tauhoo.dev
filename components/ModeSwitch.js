import React, { useState } from "react"
import styled from "styled-components"
import colors from "../config/colors"

const Container = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ mode }) => (mode ? colors.black : colors.lightGray)};
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s;
`

const Button = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${({ mode }) => (mode ? "40px" : "5px")};
  transition: 0.3s;
  transform: translateY(-50%);
  background-color: ${({ mode }) => (mode ? "white" : "#f1c40f")};
`

const Shadow = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${({ mode }) => (mode ? "-10px" : "-20px")};
  transition: 0.3s;
  transform: translateY(-50%);
  background-color: ${({ mode }) => (mode ? colors.black : colors.lightGray)};
`

function ModeSwitch({ darkMode = false, onChange }) {
  return (
    <Container mode={darkMode} onClick={onChange}>
      <Button mode={darkMode}>
        <Shadow mode={darkMode}></Shadow>
      </Button>
    </Container>
  )
}

export default ModeSwitch
